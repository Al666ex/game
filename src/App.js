
import './styles/App.css';
import { useFetch } from './hooks/useFetch';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from './context';
import Listfruits from './components/Listfruits';
import { observer } from 'mobx-react-lite';
import StartEnd from './components/StartEnd';

const App = observer(() => {
  
  const {fruits} = useContext(AppContext);
  const [start, setStart] = useState(false);
  const [fetching, loading, error] = useFetch(async () => {
    await fruits.rebootGame();
  })

  const startEnd = (msg) => <StartEnd msg={msg} onClick={setStart} start={start} />;  

  useEffect(() => {
    window.addEventListener("contextmenu", e => e.preventDefault());
    return function(){
      window.removeEventListener("contextmenu", e => e.preventDefault());
    }
  },[])

  useEffect(() => {
    fetching();
  },[fruits]);  
  

  return (
    <div className="App">
      { !error ?
        !start ? startEnd('Start')  :        
          !loading && fruits.fruitsDisplay !== null ?             
            <Listfruits  /> : 
              startEnd('End') : <h1>Sorry something wrong </h1>
      }

    </div>
  );
});

export default App;
