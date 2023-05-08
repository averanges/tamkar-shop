import { useEffect, useRef, useState } from "react"
import { useGetClientTokenQuery, useMakePaymentMutation } from "../../../services/userApiQuery"
import DropIn from 'braintree-web-drop-in-react'

const PaymentForm = ({finalAmount}) => {
  const [mutate] = useMakePaymentMutation()
  const { data, isLoading } = useGetClientTokenQuery()
  const [instance, setInstance] = useState(null)

console.log(Number(finalAmount?.toFixed(1)))
  const onPurchase = async () => {
    try {
      const response = await instance.requestPaymentMethod()
      const paymentData = {
        nonce: response.nonce,
        amount: Number(finalAmount?.toFixed(1))
      }
      mutate(paymentData)
    } catch (error) {
      console.error(error)
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!data) {
    return <div>No client token available.</div>
  }

  return (
    <div>
      <DropIn
        options={{
          authorization: data,
          card: {
            cardholderName: true,
            cvc: true
          }
        }} 
        onInstance={(inst) => setInstance(inst)}
      />
      <button onClick={onPurchase} 
      className='w-full h-14 bg-new-pink text-lg text-white mt-5 hover:bg-black duration-500'>PLACE ORDER</button>
    </div>
  )
}

export default PaymentForm