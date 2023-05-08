import React, { useEffect, useState } from 'react'

const CategoryChoice = ({setChosenCategories, name, setCategoryClicked, 
    categoryClicked, chosenCategories, setGridImagesLoading}) => {
    const [checked, setChecked] = useState(false)
    const handleCategoryChoice =() => {
        setChecked(prevChecked => !prevChecked)
        setTimeout(() => setChosenCategories(prev => prev && prev?.includes(name) ? prev?.filter(el => el !== name) : [...(prev ?? []), name]),300)
        setGridImagesLoading(false)
        setCategoryClicked(true)
    }
    useEffect(() => {
    if (categoryClicked && chosenCategories?.includes(name)){
        setChecked(true)
    }
    if (categoryClicked && !chosenCategories?.includes(name)){
        setChecked(false)
    }
    return () => {
        setChecked(false)
    }
    }, [chosenCategories])
  return (
    <div className='cursor-pointer hover:text-new-pink flex gap-3'>
        <input type="checkbox" name="" id={name} className='cursor-pointer' 
        checked={checked} onChange={() => handleCategoryChoice()}/>
        <label htmlFor={name} className='cursor-pointer'>{name}</label>
    </div>
  )
}

export default CategoryChoice