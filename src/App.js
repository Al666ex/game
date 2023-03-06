
import './styles/App.css';
import { useFetch } from './hooks/useFetch';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from './context';
import { displayFruits, fruitRandom } from './utils';
import Listfruits from './components/Listfruits';
import { observer } from 'mobx-react-lite';
import StartEnd from './components/StartEnd';


const App = observer(() => {
  const {fruits} = useContext(AppContext)
  const [start, setStart] = useState(false)
  const [fetching, loading, error] = useFetch(() => {
    fruits.rebootGame()
    // fruits.setFruitsStatusFalse(fruits.fruits)
    // fruits.setFruitsDisplay(displayFruits(fruits.fruitsStatusFalse))
    // let index = fruitRandom(fruits.fruitsDisplay.length)
    // fruits.setCurrentFruit(null)    
  })

  useEffect(() => {
    fetching()
  },[fruits])  

  return (
    <div className="App">
      {!start ? <StartEnd msg='Start' onClick={setStart} start={start} /> :        
        !loading && fruits.fruitsDisplay !== null ?             
              <Listfruits  /> :            
                <StartEnd msg='End' onClick={setStart} start={start} />
      }

    </div>
  );
})

export default App;
