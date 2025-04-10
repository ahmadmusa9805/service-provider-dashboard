import { baseApi } from "../../api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login', // your login endpoint
        method: 'POST',
        body: credentials,
        // credentials: 'include',
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
