import Fruit from "./Fruit";
import { observer } from "mobx-react-lite";
import { useContext} from "react";
import { AppContext } from "../context";
import Header from "./Header";

const Listfruits = observer(() => {    
    const {fruits} = useContext(AppContext)  
     
    return(
    <>
       <Header />       
       <div className="container">
            {fruits.fruitsDisplay.map(item => 
                <Fruit key={item.id} item={item}  />
            )}
      </div>
    </>
    )
})

export default Listfruits;


