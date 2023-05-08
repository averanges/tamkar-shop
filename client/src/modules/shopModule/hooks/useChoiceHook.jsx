import { useEffect, useState } from "react"

export const useChoiceFilter = (data) => {
    const [firstChoice, setFirstChoice] = useState('')
    const [chosenCategories, setChosenCategories] = useState(null)
    const [chosenBrands, setChosenBrands] = useState(null)
    const [chosenPrice, setChosenPrice] = useState(null)

    let allData

    if (!chosenCategories?.length && !chosenBrands?.length && !chosenPrice){
        allData = data
    }
    else if (chosenPrice && firstChoice === 'PRICE') {
        allData = data?.filter(el => el.price >= chosenPrice[0] && el.price <= chosenPrice[1])
    }
    else if (chosenBrands && firstChoice === 'BRAND') {
        allData = data?.filter(el => chosenBrands.length ? chosenBrands?.includes(el.brand) : el.brand)
    }
    else if (chosenCategories && firstChoice === 'CATEGORY') {
        allData = data?.filter(el => chosenCategories.length ? chosenCategories?.includes(el.category) : el.category)
    }
    
    if(chosenPrice && (firstChoice === 'BRAND' || firstChoice === 'CATEGORY')){
        allData = allData?.filter(el => el.price >= chosenPrice[0] && el.price <= chosenPrice[1])
    }
    if(chosenBrands && (firstChoice === 'PRICE' || firstChoice === 'CATEGORY')) {
        allData = allData?.filter(el => chosenBrands.length ? chosenBrands?.includes(el.brand) : el.brand)
    }
    if(chosenCategories && (firstChoice === 'PRICE' || firstChoice === 'BRAND')) {
        allData = allData?.filter(el => chosenCategories.length ? chosenCategories?.includes(el.category) : el.category)
    }
    useEffect(() => {
        if(chosenPrice && !chosenCategories && !chosenBrands) {
            setFirstChoice('PRICE')
        }
    },[chosenPrice])
    useEffect(() => {
        if(chosenBrands && !chosenCategories && !chosenPrice) {
            setFirstChoice('BRAND')
        }
        if(chosenBrands?.length === 0 && chosenCategories){
            setFirstChoice('CATEGORY')
        }
    },[chosenBrands])
    useEffect(() => {
        if(chosenCategories && !chosenBrands && !chosenPrice) {
            setFirstChoice('CATEGORY')
        }
        // if(chosenCategories?.length === 0 && !chosenBrands){
        //     setFirstChoice(null)
        // }
        if(chosenCategories?.length === 0 && chosenBrands){
            setFirstChoice('BRAND')
        }
    },[chosenCategories])
    return {allData, setChosenCategories, setChosenBrands, chosenPrice,
        setChosenPrice, firstChoice, chosenCategories, chosenBrands}
}