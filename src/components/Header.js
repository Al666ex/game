import { observer } from "mobx-react-lite"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context"

const Header = observer(() => {
    const {fruits} = useContext(AppContext)
    const {fruit, mp3} = fruits.currentFruit      
    const [chack, setCheck] = useState(fruits.currentFruit )        
    //const [play, setPlay] = useState( typeof Audio !== "undefined" && new Audio(mp3)); 

    useEffect(() => {
        autoPlayFunc()
    },[fruit])

    const autoPlayFunc = (e) => {            
            new Audio(mp3).play()   
    }    

    return (
        <div className="header">
            <div 
                className="h1_text" 
                style={{position : 'relative'}}            
            >
                vegetable fruits berries
            </div>            
            
            <div className="fruit" >            
                <div className="fruit_word" onClick={autoPlayFunc}> {fruit} </div>
            </div>
        </div>
    )
})

export default Header