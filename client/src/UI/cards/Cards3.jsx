import React from 'react'
import Pr1 from '../../assets/pr1.png'
import Pr2 from '../../assets/pr2.png'
import Pr3 from '../../assets/pr3.png'
import Pr4 from '../../assets/pr4.png'
import Pr5 from '../../assets/pr5.png'
import Pr6 from '../../assets/pr6.png'
import Stars from '../stars/Stars'
import ProductCard from './ProductCard'


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


const arrOfProducts = [pr1,pr2,pr3,pr4,pr5,pr6,pr7,pr8,pr9].map((el,idx)=> 
   <ProductCard key={idx} id={idx} img={el.img} color={el.color} isNew={el.isNew}/>
    )

const Cards3 = () => {

  return (
    <>{arrOfProducts}</>
  )
}

export default Cards3