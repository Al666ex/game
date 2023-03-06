import { observer } from 'mobx-react-lite'
import picture from '../static/images/picture.png'
import { AppContext } from '../context'
import { useContext } from 'react'

const StartEnd = observer(({msg, onClick, start}) => {
    const {fruits} = useContext(AppContext)

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