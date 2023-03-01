import { apiSlice } from "@/app/api/authApi";

const workerSkillApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWorkerSkillByIdWorker: builder.query({
      query: ({ id_worker }) => ({
        url: `worker-skills/${id_worker}`,
      }),

      providesTags: ["getWorkerSkillByIdWorker"],
      transformResponse: (response, meta, args) => response.data,
    }),
    createWorkerSkill: builder.mutation({
      query: (data) => ({
        url: "worker-skills",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["getWorkerSkillByIdWorker"],
      transformResponse: (response, meta, args) => response.data,
    }),
    deleteWorkerSkillById: builder.mutation({
      query: ({ id }) => ({
        url: `worker-skills/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ["getWorkerSkillByIdWorker"],
      transformResponse: (response, meta, args) => response.data,
    }),
  }),
});

export const {
  useGetWorkerSkillByIdWorkerQuery,
  useCreateWorkerSkillMutation,
  useDeleteWorkerSkillByIdMutation,
} = workerSkillApi;
