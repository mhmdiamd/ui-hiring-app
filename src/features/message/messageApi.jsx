import { apiSlice } from "@/app/api/authApi";

const messageApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMessageWorker: builder.query({
      query: () => {
        return {
          url: `messages/workers`,
        };
      },

      providesTags: ["getMessageWorker"],
      transformResponse: (response, meta, args) => {
        console.log(response.data)
        
        const count = response.data.filter(message => message.read_status == 1).length
        return {data: response.data, total: count}
      },
    }),

    getMessageRecruter: builder.query({
      query: () => {
        return {
          url: `messages/recruters`,
        };
      },

      providesTags: ["getMessageRecruter"],
      transformResponse: (response, meta, args) => response.data,
    }),

    createMessage: builder.mutation({
      query: ({ data }) => ({
        url: `messages`,
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["getMessageRecruter","getMessageWorker"],
      transformResponse: (response, meta, args) => response.data,
    }),
    
    deleteMessageById: builder.mutation({
      query: (id) => ({
        url: `messages/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ["getMessageRecruter","getMessageWorker"],
      transformResponse: (response, meta, args) => response.data,
    }),
    updateMessageById: builder.mutation({
      query: ({ id, data }) => ({
        url: `messages/${id}`,
        method: "PUT",
        body: data,
      }),

      invalidatesTags: ["getMessageRecruter","getMessageWorker"],
      transformResponse: (response, meta, args) => response.data,
    }),
  }),
});

export const { useGetMessageWorkerQuery, useGetMessageRecruterQuery, useUpdateMessageByIdMutation,useDeleteMessageByIdMutation,useCreateMessageMutation } = messageApi;
