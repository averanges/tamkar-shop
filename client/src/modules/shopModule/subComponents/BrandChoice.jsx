import React, { useEffect, useState } from 'react'

const BrandChoice = ({data, setChosenBrands, setBrandClicked, brandClicked, chosenBrands, setGridImagesLoading}) => {
    const [checked, setChecked] = useState(false)
    const handleBrandChoice =() => {
        setTimeout(() => setChosenBrands(prev => (prev && prev?.includes(data?.[0])) ? prev?.filter(el => el !== data?.[0]) : [...(prev ?? []), data?.[0]] ),300)
        setGridImagesLoading(false)
        setBrandClicked(true)
    }
    useEffect(() => {
        if (brandClicked && chosenBrands?.includes(data?.[0])){
            setChecked(true)
        }
        if (brandClicked && !chosenBrands?.includes(data?.[0])){
            setChecked(false)
        }
        return () => {
            setChecked(false)
        }
        }, [chosenBrands])
  return (
    <div className='w-full flex justify-between gap-5'>
        <input type="checkbox" name="" id={data[0]} 
        checked={checked} onChange={() => handleBrandChoice()}/>
        <label htmlFor={data[0]}
        className='cursor-pointer hover:text-new-pink'>{data[0]}</label>
        <p>({data[1]})</p>
    </div>
  )
}

export default BrandChoice