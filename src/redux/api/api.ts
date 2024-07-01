import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type TTodosJson = {
  userId: number;
  id: string;
  title: string;
  completed: boolean;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodos: builder.query<TTodosJson, string>({
      query: (priority) => {
        const params = new URLSearchParams();

        if (priority) {
          params.append("priority", priority);
        }

        return {
          url: `/tasks`,
          method: "GET",
          params: params,
        };
      },
      providesTags: ["todo"],
    }),
    addTodos: builder.mutation({
      query: (data) => {
        console.log("Inside api ", data);
        return {
          url: "/task",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["todo"],
    }),
    updateCompleteTask: builder.mutation({
      query: (options) => {
        console.log("Inside api 2", options);
        return {
          url: `/task/${options.id}`,
          method: "PUT",
          body: options.taskData,
        };
      },
      invalidatesTags: ["todo"],
    }),
  }),
});

// export const { useGetTodosQuery } = baseApi;
