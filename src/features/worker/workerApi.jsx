import { apiSlice } from "@/app/api/authApi";

const workerApi = apiSlice.injectEndpoints({
  tagTypes: ["GetAllWorker", "GetWorkerById"],
  endpoints: (builder) => ({
    getAllWorker: builder.query({
      query: ({ search, sortBy, sort, page, limit }) => {
        return {
          url: `workers?search=${search || ""}&page=${page || 1}&sortBy=${
            sortBy || "createdAt"
          }&sort=${sort || "asc"}&limit=${limit || 10}`,
        };
      },

      providesTags: ["GetAllWorker"],
      transformResponse: (response, meta, args) => response.data,
    }),
    getWorkerById: builder.query({
      query: (id) => {
        return {
          url: `workers/${id}`,
        };
      },

      providesTags: ["GetWorkerById"],
      transformResponse: (response, meta, args) => response.data,
    }),
    createExperience: builder.mutation({
      query: ({ data }) => ({
        url: "experiences",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["ExperienceWorker"],
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
    updateExperienceById: builder.mutation({
      query: ({ id, data }) => ({
        url: `experiences/${id}`,
        method: "PUT",
        body: data,
      }),

      invalidatesTags: ["ExperienceWorker"],
      transformResponse: (response, meta, args) => response.data,
    }),
  }),
});

export const { useGetAllWorkerQuery, useGetWorkerByIdQuery } = workerApi;
