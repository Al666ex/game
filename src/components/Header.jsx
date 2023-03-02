import { observer } from "mobx-react-lite"
import { useContext, useEffect, useRef, useState } from "react"
import { AppContext } from "../context"
import ReactAudioPlayer from 'react-audio-player';

const Header = observer(() => {
    const {fruits} = useContext(AppContext)
    const {fruit, mp3} = fruits.currentFruit      
    const ref = useRef(null)
    const [chack, setCheck] = useState(fruits.currentFruit )        
    //const [play, setPlay] = useState( typeof Audio !== "undefined" && new Audio(mp3)); //this will prevent rendering errors on NextJS since NodeJs doesn't recognise HTML tags neither its libs.

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
                <ReactAudioPlayer
                    src={chack.mp3}
                    autoPlay                    
                />
            </div>
        </div>
    )
})

export default Header