import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Cards from '../../../UI/cards/Cards'
import { useGetSingleProductQuery } from '../../../services/userApiQuery'
import { useMainImg } from '../hooks/useMainImg'
import ProductLocation from '../subComponents/productLocation'
import ImagesBlock from '../subComponents/ImagesBlock'
import TextBlock from '../subComponents/TextBlock'
import ReviewBlock from '../subComponents/ReviewBlock'
import AdditionalInfoBlock from '../subComponents/AdditionalInfoBlock'

const SingleProduct = () => {
    const [reveiwOpened, setReviewOpened] = useState(false)
    const _id = useSelector(state => state.user.chosenToOpenProductId)
    const idInSession = JSON.parse(sessionStorage.getItem('SPID'))
    const {data, isLoading, error} = useGetSingleProductQuery(_id ? {_id} : {_id: idInSession})
    const {chosenImg, setChosenImg} = useMainImg(data?.mainImg)

    useEffect(() => {
       if (!idInSession ) {
        sessionStorage.setItem('SPID', JSON.stringify(_id))
       }
        return () => {
        sessionStorage.removeItem('SPID') 
        setChosenImg(null);
        }
    }, [])

    return (
        <div className={`mt-24 flex min-h-screen flex-col h-full w-full justify-center items-center gap-20 duration-1000 ${chosenImg ? 'opacity-100' : 'opacity-0'}`}>
        {
    !isLoading &&
    (    <>
        {/* <ProductLocation/> */}
   <div className={`flex w-[90%] flex-col gap-10 md:flex-row h-full bg-white rounded-lg relative overflow-hidden duration-300`}>
           <ImagesBlock data={data} chosenImg={chosenImg} setChosenImg={setChosenImg}/>
           <TextBlock data={data} id={_id ? _id : idInSession}/>
        </div>
            <div className='flex flex-col justify-center w-[90%] h-full gap-20 items-center'>
                { !reveiwOpened ?
                    <AdditionalInfoBlock data={data} setReviewOpened={setReviewOpened}/>
                    :
                    <ReviewBlock setReviewOpened={setReviewOpened}/>
                }
                <div className='flex justify-center'>
                    <h4 className='text-4xl'>Viewed Products</h4>
                </div>
                <div className='grid md:grid-flow-col'>
               
                </div>
            </div>
            </>
    )
    }
  </div>
 )
}

export default SingleProduct