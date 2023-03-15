import { observer } from 'mobx-react-lite'
import picture from '../static/images/picture.png'
import { AppContext } from '../context'
import { useContext } from 'react'
import winner from '../static/mp3/winner.mp3'

const StartEnd = observer(({msg, onClick, start}) => {
    const {fruits} = useContext(AppContext)

    if(msg === 'End'){new Audio(winner).play()}

    const update = () => {
        onClick(!start)

        if(msg === 'End'){
            fruits.rebootGame()
        }
    }

    return(
        <div className='ani' onClick={update}>
            <img src={picture} />        
            <h1 ><span>{msg}</span></h1>
        </div>
    )
})

export default StartEnd;