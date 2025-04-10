// src/redux/features/service/serviceApi.js

import { baseApi } from "../../api/baseApi";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => "/services", // replace with actual endpoint
      providesTags: ["Service"],
    }),
    addService: builder.mutation({
      query: (data) => ({
        url: "/services",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Service"],
    }),

 // Update an existing service
 updateService: builder.mutation({
  query: (updatedService) => ({
    url: `/services/${updatedService.id}`,  // Assume your service has an ID
    method: "PUT",
    body: updatedService,
  }),
  // Invalidate and refetch relevant data after update (optional)
  invalidatesTags: ["Service"],  // Invalidate the "Service" cache to ensure fresh data
}),

    deleteService: builder.mutation({
      query: (id) => ({
        url: `/services/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Service"],
    }),
  }),
});

export const {
  useGetServicesQuery,
  useAddServiceMutation,
  useDeleteServiceMutation,
  useUpdateServiceMutation 
} = serviceApi;
