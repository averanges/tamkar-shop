import { Link } from 'react-router-dom'

export const HairCare = () => {
    const arrayPopup = [{name: 'ALL HAIR CARE', link: 'hair-care'},{name: 'SHAMPOO & CONDITIONER', link: 'shampoo-&-conditioner'},
    {name: 'TREATMENT & ESSENCE', link: 'treatment-&-essence'}]
    .map((el, idx) => <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'
    key={idx} to={`/shop/${el.link}`}>{el.name}</Link>)
    return (
        <>
            {arrayPopup}
        </>
    )
}