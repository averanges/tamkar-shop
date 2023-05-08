import InfoBlock from "../subComponents/InfoBlock"

export const useInfoBlocksData = (openProductData) => {
    const infoBlocksData = [
    {title:'HOW TO USE', open: false, 
    data: openProductData?.howToUse
    },
    {
    title:'SKIN TYPE', open: false, 
    data: openProductData?.skinType
    },
    {
    title:'INGREDIENTS', open: false, 
    data: openProductData?.ingredients
    },
    {
    title:'BENEFITS', open: false, 
    data: openProductData?.benefits
    },
    {
    title:'CONTENTS', open: false, 
    data: openProductData?.contents
    },
    {
    title:'HOW TO USE', open: false, 
    data: ''}]
    const infoTypes = infoBlocksData.map((el, idx) => <InfoBlock key={idx} open={el.open} title={el.title} data={el.data}/>)
    
    return infoTypes
}