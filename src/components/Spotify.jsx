import React ,{useEffect,useState}from 'react'
import styled from "styled-components"
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Home from './Home'
import {Switch,Route,BrowserRouter} from "react-router-dom"
import Body from './Body'
import {useStateProvider} from '../utilis/StateProvider'
import { reducercases } from '../utilis/constants'
import axios from 'axios'

function Spotify() {
    const [{token},dispatch] = useStateProvider()
    const [userprofile,setuserprofile] = useState({})
    useEffect(()=>{
        const userProfile = async ()=>{
          const {data} = axios.get("https://api.spotify.com/v1/me",{
            headers:{
              Authorization:"Bearer " + token,
              "Content-type":"application/json"
          }
         
          },
          console.log({data}));
         
         
          
         
    
          const user = {
            name:"bbb",
            id:"1"
          }
         
          dispatch({type:reducercases.SET_USER,user})
        }
        userProfile();
     
    },[token,dispatch])
  return (
    <Container>
        <BrowserRouter>
        <div className="spotify_body">
            <Sidebar/>
            <div className="body">
                <Navbar/>
               
                <div className="body_contents">
                    <Switch>
                        <Route path ="/" exact>
                            <Home/>
                        </Route>
                        <Route path ="/body" exact>
                            <Body/>
                        </Route>
                    </Switch>

                </div>
            </div>
        </div>
        <div className="spotify_footer">
            <Footer/>
        </div>
        </BrowserRouter>
       
    </Container>
  )
}

const Container = styled.div`
color:white;
max-width:100%;
max-height:100vh;
overflow:hidden;
display:grid;
grid-template-rows:85vh 15vh;
.spotify_body{
    display:grid;
    grid-template-columns:15vw 85vw;
    height:100%;
    width:100%;
    background:linear-gradient(transparent,rgba(0,0,0,1));
    background-color:crimson;


    .body{
        height:100%;
        width:100%;
        overflow:auto;
    }

}

`

export default Spotify