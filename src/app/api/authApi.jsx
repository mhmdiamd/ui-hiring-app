import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { setCredentials, logout } from './authSlice'

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL_ENDPOINT,
  credentials: 'include',
  prepareHeaders: (headers, {getState}) => {
    console.log(getState())
    // if(getState()?.auth?.token){
    //   const token = getState().auth.token
    //   headers.set('authorization', token)
    // }  

    // if(localStorage.token('token')) {
    //   headers.set('authorization', localStorage.token('token'))
    // }

    // return headers
  }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if(result?.error && result?.error?.status == 401) {
    // const refreshResult = await baseQuery('/auth/refresh-token', api, extraOptions)
    // const dataUser = api.getState().auth.user
    // console.elog(refreshResult)
    // console.log(dataUser)
    // if(refreshResult.data){
    //   api.dispatch(setCredentials({}))
    // }
  }

  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({})
})