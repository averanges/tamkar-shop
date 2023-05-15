import React, { useEffect } from 'react'
import { useGetAllItemsQuery } from '../../services/userApiQuery'
import ProductCard from './ProductCard'
import ClipLoader from "react-spinners/ClipLoader";

const SalesHomeCards = ({setLoading}) => {
    const category = 'SALES HOME'
    const {data, error, isLoading} = useGetAllItemsQuery({category})
    useEffect(() => {
      setLoading(isLoading)
    }, [isLoading])
    const allItems = data?.map(el => <ProductCard key={el._id} _id={el._id} brand={el.brand}
        img={el.mainImg} title={el.title} price={el.price}  isNew={el.isNew} oldPrice={el.oldPrice}/>)
  return (
    <>{isLoading ? <div className='w-full h-full flex justify-center items-center'><ClipLoader color='pink' size={100}/></div> : allItems}</>
  )
}

export default SalesHomeCards