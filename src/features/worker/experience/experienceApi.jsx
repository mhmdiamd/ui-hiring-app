import { apiSlice } from "@/app/api/authApi";

const experienceApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getExperienceByIdWorker: builder.query({
      query: ({ id_worker }) => ({
        url: `experience/${id_worker}`,
      }),

      providesTags: ["ExperienceWorker"],
      transformResponse: (response, meta, args) => response.data,
    }),
    createExperience: builder.mutation({
      query: ({ data }) => ({
        url: "experiences",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["ExperienceWorker", "GetWorkerById"],
      transformResponse: (response, meta, args) => response.data,
    }),
    deleteExperienceById: builder.mutation({
      query: ({ id }) => ({
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

export const {
  useGetExperienceByIdWorkerQuery,
  useCreateExperienceMutation,
  useDeleteExperienceByIdMutation,
  useUpdateExperienceByIdMutation,
} = experienceApi;
