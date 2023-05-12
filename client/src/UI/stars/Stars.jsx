import React, { useState } from 'react'
import Star from './Star'

const Stars = () => {
    const star1 = {num: 1, isHovering: false, isClicked: true}
    const star2 = {num: 2, isHovering: false, isClicked: true}
    const star3 = {num: 3, isHovering: false, isClicked: true}
    const star4 = {num: 4, isHovering: false, isClicked: true}
    const star5 = {num: 5, isHovering: false, isClicked: false}

    let stars = [star1,star2,star3,star4,star5]

    const initialStars = stars.map((el, idx) =>  <Star isHovering={el.isHovering} handleStarClicking={handleStarClicking}
    key={idx} num={el.num}  isClicked={el.isClicked}/> )
    
    const [allStars, setAllStars] = useState(initialStars);
    function handleStarHovering (num) {
       const hoveredStars = stars.map((el) => ({
                ...el,
                isHovering: el.num <= num, 
              })
        )
    const newStars = hoveredStars.map((el, idx) => <Star isHovering={el.isHovering} handleStarClicking={handleStarClicking}
    key={idx} num={el.num} handleStarHovering={handleStarHovering} isClicked={el.isClicked}/> )
    setAllStars(newStars)
    }
    function handleStarClicking (num) {
        const clickedStars = stars.map((el) => ({
                 ...el,
                 isClicked: el.num <= num, 
               })
         )
     const newStars = clickedStars.map((el, idx) => <Star isHovering={el.isHovering} handleStarClicking={handleStarClicking}
     key={idx} num={el.num} handleStarHovering={handleStarHovering} isClicked={el.isClicked}/> )
     setAllStars(newStars)
     }
  return (
    <div className='flex cursor-pointer'>
        {allStars}
    </div>
  )
}

export default Stars