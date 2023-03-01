
import { useContext,useEffect, useState } from 'react'
import { AppContext } from '../context';
import { observer } from 'mobx-react-lite';

const Fruit = observer(({item}) => {
    const [disabled, setDisabled] = useState(false)
    const { fruits } = useContext(AppContext)         
    const {id, fruit, image, mp3} = item    
    //const [fru, setFru] = useState(image)    
    const [play, setPlay] = useState(new Audio(mp3))
    const rootClasses = ['ani']

    if(disabled){
        rootClasses.push('overlay')        
    }

    useEffect(() => {
        setDisabled(false)
    },[fruits.currentFruit])

    const update = () => {                
        
        fruits.setCurrentFruit(id)                
        play.play()
        console.log(fruits.currentFruit.id)        
        setDisabled(true)                
    }

    //const WrongRender = () => <h2><span>{fruit}</span></h2>

    return(
        <button disabled={disabled}            
            className={rootClasses.join(' ')}
            onClick={update}            
        >            
            <img draggable="false" src={image} /> 
            {disabled &&  <h2><span>{fruit}</span></h2>}            
            {/* {disabled && <WrongRender />}  */}
            
            
            
        </button>
    )
})

export default Fruit