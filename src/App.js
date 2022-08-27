
import './App.css';
import Login from './components/Login';
import {useEffect} from'react'
import {useStateProvider} from './utilis/StateProvider'
import {reducercases} from './utilis/constants'
import Spotify from './components/Spotify';

function App() {
  const [{token}, dispatch] = useStateProvider();

  useEffect(()=>{
    const hash = window.location.hash
   
    if(hash){
      const token = hash.substring(1).split("&")[0].split("=")[1]
      
      dispatch({type:reducercases.SET_TOKEN, token})

    }
  },[token,dispatch])
  return (
    <div className="App">
    {
      token ? <Spotify/> : <Login/>
    }
    </div>
  );
}

export default App;
