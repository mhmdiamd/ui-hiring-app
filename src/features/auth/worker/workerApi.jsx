import { apiSlice } from "@/app/api/authApi";

export const workerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    workerLogin: builder.mutation({
      query: ({data}) => ({
        url: 'auth/workers/login',
        method: 'POST',
        body: data
      }),

      transformResponse: (response,meta, args) => response.data
    }),
    workerRegister: builder.mutation({
      query: ({data}) => ({
        url: 'auth/workers/register',
        method: 'POST',
        body: data
      }),

      transformResponse: (response,meta, args) => response.data
    })
  })
})

export const {useWorkerRegisterMutation, useWorkerLoginMutation} = workerApi