import React,{useEffect} from 'react'
import styled from "styled-components"
import axios from 'axios'
import {useStateProvider} from '../utilis/StateProvider'
import { reducercases } from '../utilis/constants'

function CurrentTrack() {
    const [{token,playlists},dispatch] = useStateProvider()

    useEffect(()=>{
        const getcurrentTrackData = async ()=>{
            const response = await axios.get(' https://api.spotify.com/v1/me/player/currently-playing',{
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
        getcurrentTrackData();
    },[token,dispatch])
  return (
    <Container>CurrentTrack</Container>
  )
}

const Container = styled.div`
`

export default CurrentTrack