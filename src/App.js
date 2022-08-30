
import './App.css';
import Login from './components/Login';
import {useEffect,useState} from'react'
import {useStateProvider} from './utilis/StateProvider'
import {reducercases} from './utilis/constants'
import Spotify from './components/Spotify';

function App() {
  const [{token}, dispatch] = useStateProvider();
  const [desktopview, setdesktop] = useState(false)

  const checkScreen= ()=>{
    const windowWith= window.innerWidth
    if(windowWith <= 750){
      setdesktop(true)
     
        return;

    }
    else{
      setdesktop(false)
    }
  }

  useEffect(()=>{
    const hash = window.location.hash
    if(hash){
      const token = hash.substring(1).split("&")[0].split("=")[1]
      
      dispatch({type:reducercases.SET_TOKEN, token})

    }
  },[token,dispatch])

  useEffect(()=>{
      checkScreen();
      window.addEventListener("resize",checkScreen)
  },[])
  return (
    <div className="App">

    {
      desktopview ? (<div style={{color:'white',height:'100vh',display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center'}}><p style={{color:'white'}}>You cannot access on mobile device</p><p>Switch to a desktop or larger screen</p></div>) : (
        
          token ? <Spotify/> : <Login/>
        
      )
    }
  
    </div>
  );
}

export default App;
