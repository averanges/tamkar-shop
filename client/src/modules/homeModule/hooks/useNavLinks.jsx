import NavLinkText from '../subComponents/NavLinkText'

export const useNavLinks = () => {
const navArr = [{name: 'Hair Care', link: '/shop/hair-care'}, {name: 'Makeup', link: '/shop/makeup'}, {name: 'Skin Care', link: '/shop/skin-care'}, 
{name: 'Body Care', link: '/shop/body-care'}, {name: 'Sales', link: '/shop/sales'}, {name: 'New', link: '/dashboard-add-items'}]
.map((el,idx) => <NavLinkText key={idx} link={el.link} name={el.name}/>)
return navArr
}