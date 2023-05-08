import { apiQuery } from "./apiQuery"


const userApiQuery = apiQuery.injectEndpoints({
    endpoints: (builder) => ({
    getAllItems: builder.query({
        query: (someCategory) => ({url: 'all-items', params: someCategory})
    }),
    getSingleProduct: builder.query({
        query: (someData) => ({url: 'single-item', params: someData})
    }),
    getAddedCard: builder.query({
        query: (allCardData) => ({url: 'get-added-card', params: allCardData})
    }),
    userLoginOrSigninViaGoogle: builder.query({
        query: (token) => ({url: 'auth/google', params: token})
    }),
    getClientToken: builder.query({
        query: () => ({url:'payment/generate/token'})
    }),
    makePayment: builder.mutation({
        query: (paymentData) => ({url: 'payment/process', method: "POST", body: paymentData})
    }),
    signUp: builder.mutation({
        query: (values) => ({url:'/auth/signup', method: 'POST', body: values})
    }),
    login: builder.mutation({
        query: (values) => ({url: '/auth/login', method: 'POST', body: values})
    }),
    saveAddress: builder.mutation({
        query: (values) => ({url: '/save-address', method: 'POST', body: values})
    }),
    getAccountInfo: builder.query({
        query: (token) => ({url: '/get-account-info', params: token})
    })
    })
})

export const { useGetAllItemsQuery , useGetSingleProductQuery, useGetClientTokenQuery,
    useGetAddedCardQuery, useLazyUserLoginOrSigninViaGoogleQuery, useMakePaymentMutation, 
    useSignUpMutation, useLoginMutation, useGetAccountInfoQuery, useSaveAddressMutation } = userApiQuery