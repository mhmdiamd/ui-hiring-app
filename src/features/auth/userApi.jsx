import { apiSlice } from "@/app/api/authApi";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDataUserLogin: builder.query({
      query: () => ({
        url: "me",
      }),

      transformResponse: (response, meta, args) => response,
    }),
  
  }),
});

export const { useGetDataUserLoginQuery } = userApi;
