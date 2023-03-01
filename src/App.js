
import './styles/App.css';
import { useFetch } from './hooks/useFetch';
import { useContext, useEffect } from 'react';
import { AppContext } from './context';
import { displayFruits, fruitRandom } from './utils';
import Listfruits from './components/Listfruits';
import { observer } from 'mobx-react-lite';
import StartEnd from './components/StartEnd';


const App = observer(() => {
  const {fruits} = useContext(AppContext)
  const [fetching, loading, error] = useFetch(() => {
    fruits.setFruitsStatusFalse(fruits.fruits)
    fruits.setFruitsDisplay(displayFruits(fruits.fruitsStatusFalse))
    let index = fruitRandom(fruits.fruitsDisplay.length)
    fruits.setCurrentFruit(null)    
  })

  useEffect(() => {
    fetching()
  },[fruits])  

  return (
    <div className="App">
      {
        !loading && fruits.fruitsDisplay !== null ? 
            //<Listfruits fruits={fruits.fruitsDisplay} /> :
              <Listfruits  /> :
                // <h1>The End</h1>
                <StartEnd msg='End' />

      }

    </div>
  );
})

export default App;
