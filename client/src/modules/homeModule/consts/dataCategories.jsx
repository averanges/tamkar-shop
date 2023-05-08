import Img1 from '../../../assets/1.png'
import Img2 from '../../../assets/2.png'
import Img3 from '../../../assets/3.png'
import Img4 from '../../../assets/4.png'
import Img5 from '../../../assets/5.png'
import Img6 from '../../../assets/6.png'

class bestChoice {
    name;
    color;
    img;

    constructor(n,c,i) {
        this.name = n;
        this.color = c;
        this.img = i;
    }
}

const first = new bestChoice('Hare Care','#DCFFD2', Img1)
const seconde = new bestChoice('Skin Care','#FFEDB4', Img2)
const third = new bestChoice('Lip Makeup','#DFE4FF', Img3)
const fourth = new bestChoice('Masks','#FFEACC', Img4)
const five = new bestChoice('Face Makeup','#FFDAE0', Img5)
const six = new bestChoice('Body Care','#FFF3DA', Img6)


export const dataCategories = [first,seconde,third,fourth,five,six]