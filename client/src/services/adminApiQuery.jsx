import { apiQuery } from "./apiQuery";

export const adminApiQuery = apiQuery.injectEndpoints({
    endpoints: (builder) => ({
        addNewItem: builder.mutation({
            query: (data) => ({
                url: 'admin/new-items',
                method: "POST",
                body: data
            })
        })
    })
})

export const { useAddNewItemMutation } = adminApiQuery