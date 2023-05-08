import React from 'react'
import Pr1 from '../../assets/pr1.png'
// import Pr2 from '../../assets/pr2.png'
import Pr3 from '../../assets/pr3.png'
import Pr4 from '../../assets/pr4.png'
import Pr5 from '../../assets/pr5.png'
import Pr6 from '../../assets/pr6.png'
import Stars from '../stars/Stars'
import ProductCard from './ProductCard'

const Pr2 = 'https://thumbnail6.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/1401796047751571-46c22a3f-6049-4b4e-b68b-a81387aad166.jpg'

class bestProduct {
    color;
    img;
    isNew;

    constructor(c,i,isNew) {
        this.color = c;
        this.img = i;
        this.isNew = isNew;
    }
}

const pr1 = new bestProduct('#DCFFD2', Pr1, true)
const pr2 = new bestProduct('#FFEDB4', Pr2, true)
const pr3 = new bestProduct('#DFE4FF', Pr3, false)
const pr4 = new bestProduct('#FFEACC', Pr4, false)
const pr5 = new bestProduct('#FFDAE0', Pr5, false)
const pr6 = new bestProduct('#FFF3DA', Pr6, false)
const pr7 = new bestProduct('#FFEACC', Pr1, false)
const pr8 = new bestProduct('#FFDAE0', Pr4, false)
const pr9 = new bestProduct('#FFF3DA', Pr2, false)


const arrOfProducts = [pr1,pr2,pr3,pr4,].map((el,idx)=> 
   <ProductCard key={idx} img={el.img} color={el.color} isNew={el.isNew}/>
    )

const Cards = () => {

  return (
    <>{arrOfProducts}</>
  )
}

export default Cards