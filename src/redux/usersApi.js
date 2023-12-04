import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://65681b2b9927836bd97417af.mockapi.io/redux";

// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "/",
    }),

    addNewUser: builder.mutation({
      query: (body) => ({
        url: "/",
        method: "POST",
        body: body,
      }),
    }),

    deleteUser: builder.mutation({
      query: ({ id }) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),

    updateUser: builder.mutation({
      query: (body) => ({
        url: `/${body.id}`,
        method: "PUT",
        body: body,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllUsersQuery,
  useAddNewUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = usersApi;
