import NavLinkText from '../subComponents/NavLinkText'

export const useNavLinks = () => {
const navArr = [{name: 'Shop', link: '/shop'}, {name: 'Sales', link: '/shop/sales'}, {name: 'New', link: '/shop/new'}]
.map((el,idx) => <NavLinkText key={idx} link={el.link} name={el.name}/>)
return navArr
}