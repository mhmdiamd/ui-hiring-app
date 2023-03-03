import { apiSlice } from "@/app/api/authApi";

const recruterApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllRecruter: builder.query({
      query: ({ search, sortBy, sort, page, limit }) => {
        return {
          url: `recruters?search=${search || ""}&page=${page || 1}&sortBy=${
            sortBy || "createdAt"
          }&sort=${sort || "asc"}&limit=${limit || 10}`,
        };
      },

      providesTags: ["getAllRecruter"],
      transformResponse: (response, meta, args) => response.data,
    }),
    getRecruterById: builder.query({
      query: (id) => {
        return {
          url: `recruters/${id}`,
        };
      },

      providesTags: ["getRecruterById"],
      transformResponse: (response, meta, args) => response.data,
    }),
    
    deleteExperienceById: builder.mutation({
      query: (id) => ({
        url: `experiences/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ["ExperienceWorker"],
      transformResponse: (response, meta, args) => response.data,
    }),
    updateRecruterById: builder.mutation({
      query: ({ id, data }) => ({
        url: `recruters/${id}`,
        method: "PUT",
        body: data,
      }),

      invalidatesTags: [ "getRecruterById"],
      transformResponse: (response, meta, args) => response.data,
    }),
  }),
});

export const { usegetAllRecruterQuery, useGetRecruterByIdQuery, useUpdateRecruterByIdMutation } = recruterApi;
