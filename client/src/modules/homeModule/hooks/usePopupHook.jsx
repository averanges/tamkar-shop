import { useEffect, useState } from "react"


const usePopupOpen = (open) => {
    const [move, setMove] = useState(null)
    const [openLayer, setOpenLayer] = useState(null)
    useEffect(() => {
        if(open === true) {
            setTimeout(() => {
                setMove(open)
            }, 100)
          }
          else {
            setMove(open)
          }
    },[open])
    useEffect(() => {
        if(open === false) {
          setTimeout(() => {
            setOpenLayer(open)
          }, 200)
        }
        else {
          setOpenLayer(open)
        }
      },[open])
      return {move, openLayer}
}

export default usePopupOpen