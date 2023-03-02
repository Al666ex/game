import picture from '../static/images/picture.png'

const StartEnd = ({msg, onClick, start}) => 
<div className='ani' onClick={() => onClick(!start)}>
    <img src={picture} />        
    <h1 ><span>{msg}</span></h1>

</div>

export default StartEnd;