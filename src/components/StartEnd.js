import picture from '../static/images/picture.png'

const StartEnd = ({msg}) => 
<div className='ani'>
    <img src={picture} />        
    <h1 ><span>{msg}</span></h1>

</div>

export default StartEnd;