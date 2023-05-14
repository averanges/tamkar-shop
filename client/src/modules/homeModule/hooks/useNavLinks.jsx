import NavLinkText from '../subComponents/NavLinkText'

export const useNavLinks = () => {
const navArr = [{name: 'Hair Care', link: '/shop/hair-care'}, {name: 'Sales', link: '/shop/sales'}, {name: 'New', link: '/shop/new'}]
.map((el,idx) => <NavLinkText key={idx} link={el.link} name={el.name}/>)
return navArr
}