import { useEffect, useState } from "react";

export const useMainImg = (mainImg) => {
    const [chosenImg, setChosenImg] = useState(null)
    useEffect(() => {
        if (mainImg) {
          setChosenImg(mainImg);
        }
      }, [mainImg]);
      return {chosenImg, setChosenImg}
}