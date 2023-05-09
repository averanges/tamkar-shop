// import braintree from 'braintree'
// import dotenv from 'dotenv'
// dotenv.config()

// const gateway = new braintree.BraintreeGateway({
//     environment: braintree.Environment.Sandbox,
//     merchantId: process.env.MERCHANT_ID,
//     publicKey: process.env.PUBLIC_KEY,
//     privateKey: process.env.PRIVATE_KEY
//   });

// class paymentService {
//     generateToken = async () => {
//         try {
//            const response = await gateway.clientToken.generate({})
//            return response.clientToken
//         } catch (error) {
//             return error
//         }
//     }
//     processPayment = async ({amount, nonce}) => {
//         try {
//             const result = await gateway.transaction.sale({
//                 amount: amount,
//                 paymentMethodNonce: nonce,
//                 options: {
//                   submitForSettlement: true
//                 }
//               });
//               console.log(result)
//               return result
//         } catch (error) {
//             return error
//         }
//     }
// }

// export default new paymentService()