import { apiSlice } from "@/app/api/authApi";

export const recruterAuthApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    recruterLogin: builder.mutation({
      query: (data) => ({
        url: "auth/recruters/login",
        method: "POST",
        body: data,
      }),

      transformResponse: (response, meta, args) => response,
    }),
    recruterRegister: builder.mutation({
      query: ({ data }) => ({
        url: "auth/recruters/register",
        method: "POST",
        body: data,
      }),

      transformResponse: (response, meta, args) => response,
    }),
  }),
});

export const { useRecruterRegisterMutation, useRecruterLoginMutation } =
  recruterAuthApi;
