import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { setCredentials, logout } from './authSlice'

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL_ENDPOINT,
  credentials: 'include',
  prepareHeaders: (headers, {getState}) => {
    if(getState()?.auth?.token){
      const token = getState().auth.token
      headers.set('authorization', `Bearer ${token}`)
    }  

    if(localStorage.getItem('token')) {
      headers.set('authorization', `Bearer ${localStorage.getItem('token')}`)
    }

    return headers
  }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if(result?.error && result?.error?.status == 403) {
    const refreshResult = await baseQuery('/auth/refresh-token', api, extraOptions)

    if(refreshResult.data){
      const user = refreshResult?.data?.data?.data;
      const {iat, exp, ...other} = user
      const token = refreshResult?.data?.data?.token
      api.dispatch(setCredentials({user: other, token}))

      result = await baseQuery(args, api, extraOptions)
    }
  }

  if(result?.error?.status == 401) {
    api.dispatch(logout())
    // router.push(`/login/worker`)
  }

  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({})
})