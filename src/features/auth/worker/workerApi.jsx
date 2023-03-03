import { apiSlice } from "@/app/api/authApi";

export const workerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    workerLogin: builder.mutation({
      query: (data) => ({
        url: "auth/workers/login",
        method: "POST",
        body: data,
      }),

      transformResponse: (response, meta, args) => response,
    }),
    workerRegister: builder.mutation({
      query: ({ data }) => ({
        url: "auth/workers/register",
        method: "POST",
        body: data,
      }),

      transformResponse: (response, meta, args) => response,
    }),
    workerEmailActivation: builder.query({
      query: (token) => ({
        url: `workers/verification/${token}`,
      }),

      transformResponse: (response, meta, args) => response,
    }),
  }),
});

export const { useWorkerRegisterMutation, useWorkerLoginMutation, useWorkerEmailActivationQuery } = workerApi;
