import React,{useEffect} from 'react'
import axios from 'axios'
import {useStateProvider} from '../utilis/StateProvider'
import { reducercases } from '../utilis/constants'
import styled from "styled-components"
import {Link} from "react-router-dom"
function PlayLists() {
    const [{token,playlists},dispatch] = useStateProvider()

    useEffect(()=>{
        const getplaylistData = async ()=>{
            const response = await axios.get(' https://api.spotify.com/v1/me/playlists',{
                headers:{
                    Authorization:"Bearer " + token,
                    "Content-type":"application/json"
                }
            })
          const {items} = response.data
          const playlists = items?.map(({name,id})=>{
            return {name, id}
          });
          console.log(playlists)
           dispatch({type:reducercases.SET_PLAYLISTS, playlists})
        }
            getplaylistData();
    },[token,dispatch])
  return (
    <Container>
        <ul>
          {
            playlists?.map(({name,id})=>{
                return(
                    <li key={id}><Link to={`/body/${id}`} style={{color:"white",textDecoration:'none'}}>{name}</Link></li>
                )
            })
            
        }
        </ul>
    </Container>
  )
}
const Container = styled.div`
height:100%;
overflow:hidden;

ul{
    list-style-type:none;
    display:flex;
    flex-direction:column;
    gap:1rem;
    padding:1rem;
    height:55vh;
    max-height:100%;
    overflow-X:auto;
    &::-webkit-scrollbar{
        width:0.7rem;
       
        &-thumb{
            background:crimson;
            border-radius:20px;
        }
    }
    li{
        display:flex;
        cursor:pointer;
        align-items:center;
        justify-content:center;
        &:hover{
            color:crimson;
        }
    }

`

export default PlayLists