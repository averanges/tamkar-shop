import React from 'react'
import { useGetAllItemsQuery } from '../../services/userApiQuery'
import ProductCard from './ProductCard'

const NewHomeCards = () => {
    const category = 'NEW HOME'
    const {data, error, isLoading} = useGetAllItemsQuery({category})
    const allItems = data?.map(el => <ProductCard key={el._id} _id={el._id} brand={el.brand} 
        img={el.mainImg} title={el.title} price={el.price}  isNew={el.isNewItem} oldPrice={el.oldPrice}/>)
  return (
    <>{allItems}</>
  )
}

export default NewHomeCards