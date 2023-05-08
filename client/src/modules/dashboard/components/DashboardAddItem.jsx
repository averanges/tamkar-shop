import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewItem } from '../../../services/adminServices'
import { useAddNewItemMutation } from '../../../services/adminApiQuery'

const DashboardAddItem = () => {
    const [mutate, {isLoading}] = useAddNewItemMutation()
    const [checkbox, setCheckbox] = useState({
        isNewItem: false, 
        isSale: false
    })
    const [category, setCategory] = useState('')
    const [imagesTemp, setImagesTemp] = useState({additionalImages: '', descrImages: ''})
    const [disabled, setDisabled] = useState({
        title: false,
        brand: false,
        descr: false,
        price: false,
        oldPrice: false,
        mainImg: false,
        additionalImages: false,
        howToUse: false,
        skinType: false,
        ingredients: false,
        benefits: false,
        contents: false,
        descrImages: false,
    })
    const [newItem, setNewItem] = useState({
        title: '',
        brand: '',
        descr: '',
        price: null,
        oldPrice: null,
        mainImg: '',
        additionalImages: [],
        howToUse: '',
        skinType: '',
        ingredients: '',
        benefits: '',
        contents: '',
        descrImages: [],
    })
   const handleAddAdditionalImages = (e) => {
    const {name, value} = e.target
    setImagesTemp(prevImage => ({...prevImage, [name]: value}))
    }
    const handleAddAdditionalImagesButton = (name) => {
        if((disabled[name])) {
            return
        }
        const value = imagesTemp[name]
        if(value === '' ) {
            return
        }
        setNewItem(prevNewItem => ({...prevNewItem, [name]: [...prevNewItem[name], value] }))
        setImagesTemp(prevImage => ({...prevImage, [name]: ''}))
        setDisabled(prevDisabled => ({...prevDisabled, [name]: true}))
    }
    const handleAddOneMoreImg = (name) => {
        setDisabled(prevDisabled => ({...prevDisabled, [name]: false}))
    }
    const handleAllTextData = (e) => {
        let {name, value} = e.target
 
        if(name === 'price' || name === 'oldPrice') {
            value = Number(value)
        }
        setNewItem(prevNewItem => ({...prevNewItem, [name]: value}))
    }
    const disableInputData = (name) => {
        setDisabled(prevDisabled => ({...prevDisabled, [name]: true}))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const item = {...newItem, ...checkbox, category}
        mutate(item)
    }
  return (
    <div className='flex'>
        <form onSubmit={(e) => handleSubmit(e)} className='flex w-full justify-around gap-10'>
          <div className='flex flex-col gap-5'>
            <div className='flex gap-5'>
                <input onChange={(e) => handleAllTextData(e)} disabled={disabled.title}
                type="text" name="title" id="" value={newItem.title} 
                placeholder='Title' 
                className={`border-[1px] border-black rounded-full w-full pl-5 ${disabled.title && 'bg-gray-400'}`}/>
                 <div onClick={(e) => disableInputData ('title')}
                    className='bg-black text-white rounded-full cursor-pointer p-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                </div>
            </div>
            <div className='flex gap-5'>
                <input onChange={(e) => handleAllTextData(e)}
                type="text" name="brand" id="" value={newItem.brand} disabled={disabled.brand}
                placeholder='Brand' 
                className={`border-[1px] border-black rounded-full w-full pl-5 ${disabled.brand && 'bg-gray-400'}`}/>
                 <div onClick={(e) => disableInputData ('brand')}
                    className='bg-black text-white rounded-full cursor-pointer p-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                </div>
            </div>
            <div className='flex gap-5'>
                <input onChange={(e) => handleAllTextData(e)} disabled={disabled.descr}
                type="text" name="descr" id="" value={newItem.descr} 
                placeholder='Description' 
                className={`border-[1px] border-black rounded-full w-full pl-5 ${disabled.descr && 'bg-gray-400'}`}/>
                 <div onClick={(e) => disableInputData ('descr')}
                    className='bg-black text-white rounded-full cursor-pointer p-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                </div>
            </div>
            <div className='flex gap-5'>
                <input onChange={(e) => handleAllTextData(e)} disabled={disabled.price}
                type="text" name="price" id="" value={newItem.price} 
                placeholder='Price' 
                className={`border-[1px] border-black rounded-full w-full pl-5 ${disabled.price && 'bg-gray-400'}`}/>
                 <div onClick={(e) => disableInputData ('price')}
                    className='bg-black text-white rounded-full cursor-pointer p-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                </div>
            </div>
            <div className='flex gap-5'>
                <input onChange={(e) => handleAllTextData(e)} disabled={disabled.oldPrice}
                type="text" name="oldPrice" id="" value={newItem.oldPrice} 
                placeholder='Old Price' 
                className={`border-[1px] border-black rounded-full w-full pl-5 ${disabled.oldPrice && 'bg-gray-400'}`}/>
                 <div onClick={(e) => disableInputData ('oldPrice')}
                    className='bg-black text-white rounded-full cursor-pointer p-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                </div>
            </div>
            <div className='flex gap-5'>
                <input onChange={(e) => handleAllTextData(e)} disabled={disabled.howToUse}
                type="text" name="howToUse" id="" value={newItem.howToUse} 
                placeholder='How to use' 
                className={`border-[1px] border-black rounded-full w-full pl-5 ${disabled.howToUse && 'bg-gray-400'}`}/>
                 <div onClick={(e) => disableInputData ('howToUse')}
                    className='bg-black text-white rounded-full cursor-pointer p-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                </div>
            </div>
            <div className='flex gap-5'>
                <input onChange={(e) => handleAllTextData(e)} disabled={disabled.skinType}
                type="text" name="skinType" id="" value={newItem.skinType}  
                placeholder='Skin type' 
                className={`border-[1px] border-black rounded-full w-full pl-5 ${disabled.skinType && 'bg-gray-400'}`}/>
                 <div onClick={(e) => disableInputData ('skinType')}
                    className='bg-black text-white rounded-full cursor-pointer p-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                </div>
            </div>
            <div className='flex gap-5'>
                <input onChange={(e) => handleAllTextData(e)} disabled={disabled.ingredients}
                type="text" name="ingredients" id="" value={newItem.ingredients} 
                placeholder='Ingredients' 
                className={`border-[1px] border-black rounded-full w-full pl-5 ${disabled.ingredients && 'bg-gray-400'}`}/>
                 <div onClick={(e) => disableInputData ('ingredients')}
                    className='bg-black text-white rounded-full cursor-pointer p-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                </div>
            </div>
            <div className='flex gap-5'>
                <input onChange={(e) => handleAllTextData(e)} disabled={disabled.benefits}
                type="text" name="benefits" id="" value={newItem.benefits} 
                placeholder='Benefits' 
                className={`border-[1px] border-black rounded-full w-full pl-5 ${disabled.benefits && 'bg-gray-400'}`}/>
                 <div onClick={() => disableInputData ('benefits')}
                    className='bg-black text-white rounded-full cursor-pointer p-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                </div>
            </div>
            <div className='flex gap-5'>
                <input onChange={(e) => handleAllTextData(e)} disabled={disabled.contents}
                type="text" name="contents" id="" value={newItem.contents} 
                placeholder='Contents' 
                className={`border-[1px] border-black rounded-full w-full pl-5 ${disabled.contents && 'bg-gray-400'}`}/>
                 <div onClick={() => disableInputData ('contents')}
                    className='bg-black text-white rounded-full cursor-pointer p-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                </div>
            </div>
            <div className='flex gap-5'>
                <label htmlFor="isNewItem">New arrivals?</label>
                <input type="checkbox" name="isNewItem" id="isNewItem" checked={checkbox.isNewItem} 
                onChange={(e) => setCheckbox(prevCheckbox => ({...prevCheckbox, [e.target.name]: e.target.checked}))}/>
            </div>
            <div className='flex gap-5'>
                <label htmlFor="isSale">On sale?</label>
                <input type="checkbox" name="isSale" id="isSale" checked={checkbox.isSale} 
                onChange={(e) => setCheckbox(prevCheckbox => ({...prevCheckbox, [e.target.name]: e.target.checked}))}/>
            </div>
            <div className='flex gap-10'>
                <select name="" id="category" className='w-fit bg-gray-200' onChange ={(e) => setCategory(e.target.value)} >
                    <option value="" >Hair Care</option>
                    <option value="SHAMPOO & CONDITIONER">SHAMPOO & CONDITIONER</option>
                    <option value="TREATMENT & ESSENCE">TREATMENT & ESSENCE</option>
                    <option value="HAIR COLOR">HAIR COLOR</option>
                </select>
            </div>
            </div>  
            <div className='flex'>
                <div className='flex flex-col gap-5'>
                <div className='flex gap-5'>
                    <input onChange={(e) => handleAllTextData(e)} disabled={disabled.mainImg}
                        type="text" name="mainImg" id="" value={newItem.mainImg} 
                        placeholder='Main Image' 
                        className={`border-[1px] border-black rounded-full w-full pl-5 ${disabled.mainImg && 'bg-gray-400'}`}/>
                        <div onClick={(e) => disableInputData ('mainImg')}
                            className='bg-black text-white rounded-full cursor-pointer p-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                            </svg>
                        </div>
                </div> 
                {newItem.mainImg && disabled.mainImg && <img className='h-40 w-40 mt-10' src={newItem.mainImg} />} 
                </div>
                </div>
                <div>
                    <div className='flex gap-10'>
                        <input type="text" disabled={disabled.additionalImages} name="additionalImages" 
                        value={
                            disabled.additionalImages && newItem?.additionalImages?.length 
                            ? newItem.additionalImages[newItem.additionalImages.length - 1] 
                            : imagesTemp.additionalImages
                        } 
                        id="" placeholder='Additional images' onChange={(e) => handleAddAdditionalImages(e)}
                        className='border-[1px] border-black w-full pl-5 rounded-full'/>
                        <div onClick={() => handleAddAdditionalImagesButton ('additionalImages')}
                        className='bg-black text-white rounded-full cursor-pointer p-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                            </svg>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        {newItem.additionalImages.length && newItem.additionalImages[0] !== '' ? 
                        newItem.additionalImages.map((el, idx) => <img src={el} key={idx} className='w-40 h-40 mt-10'/>) : null}
                    </div>
                    {disabled.additionalImages && <p className='cursor-pointer underline hover:text-new-pink'
                    onClick={() => handleAddOneMoreImg('additionalImages')}>Add new image?</p>}
                </div>
                <div>
                    <div className='flex gap-10'>
                        <input type="text" disabled={disabled.descrImages} name="descrImages" 
                        value={
                            disabled.descrImages && newItem?.descrImages?.length 
                            ? newItem.descrImages[newItem.descrImages.length - 1] 
                            : imagesTemp.descrImages
                        }
                        id="" placeholder='Descriptional images' onChange={(e) => handleAddAdditionalImages(e)}
                        className='border-[1px] border-black w-full pl-5 rounded-full'/>
                        <div onClick={() => handleAddAdditionalImagesButton ('descrImages')}
                        className='bg-black text-white rounded-full cursor-pointer p-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                            </svg>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        {newItem.descrImages.length && newItem.descrImages[0] !== '' ? 
                        newItem.descrImages.map((el, idx) => <img src={el} key={idx} className='w-60 h-60 mt-10'/>) : null}
                    </div>
                    {disabled.descrImages && <p className='cursor-pointer underline hover:text-new-pink'
                    onClick={() => handleAddOneMoreImg('descrImages')}>Add new image?</p>}
                </div>
                <button className='bg-red-500 h-10'>Submit new item</button>
        </form>
    </div>
  )
}

export default DashboardAddItem