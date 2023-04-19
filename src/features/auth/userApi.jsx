import { apiSlice } from "@/app/api/authApi";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDataUserLogin: builder.query({
      query: () => ({
        url: "me",
      }),

      providesTags: ['getDataUserLogin'],
      transformResponse: (response, meta, args) => response,
    }),
    logoutUserLogin: builder.mutation({
      query: () => ({
        url: "auth/logout",
        method: "POST",
      }),
      
      transformResponse: (response, meta, args) => response.data
    }),
    userRegister: builder.query({
      query: ({token, role}) => ({
        url: `${role}/verification/${token}`,
        method: "GET",
      }),
      
      transformResponse: (response, meta, args) => response.data
    })
  }),
});

export const { useGetDataUserLoginQuery, useLogoutUserLoginMutation, useUserRegisterQuery } = userApi;
