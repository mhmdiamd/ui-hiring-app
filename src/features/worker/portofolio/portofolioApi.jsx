import { apiSlice } from "@/app/api/authApi";

const portofolioApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPortofolioByIdWorker: builder.query({
      query: ({ id_worker }) => ({
        url: `portofolio/${id_worker}`,
      }),

      providesTags: ["PortofolioWorker"],
      transformResponse: (response, meta, args) => response.data,
    }),
    createPortofolio: builder.mutation({
      query: (data) => ({
        url: "portofolios",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["PortofolioWorker", "GetWorkerById"],
      transformResponse: (response, meta, args) => response.data,
    }),
    deletePortofolioById: builder.mutation({
      query: ({ id }) => ({
        url: `portofolios/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ["PortofolioWorker"],
      transformResponse: (response, meta, args) => response.data,
    }),
    updatePortofolioById: builder.mutation({
      query: ({ id, data }) => ({
        url: `portofolios/${id}`,
        method: "PUT",
        body: data,
      }),

      invalidatesTags: ["PortofolioWorker"],
      transformResponse: (response, meta, args) => response.data,
    }),
  }),
});

export const {
  useGetPortofolioByIdWorkerQuery,
  useCreatePortofolioMutation,
  useDeletePortofolioByIdMutation,
  useUpdatePortofolioByIdMutation,
} = portofolioApi;
