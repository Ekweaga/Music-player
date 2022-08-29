import React,{useEffect} from 'react'
import styled from "styled-components"
import axios from 'axios'
import {useStateProvider} from '../utilis/StateProvider'
import { reducercases } from '../utilis/constants'

function CurrentTrack() {
    const [{token,currentlyPlaying},dispatch] = useStateProvider()

    useEffect(()=>{
        const getcurrentTrackData = async ()=>{
            const response = await axios.get(' https://api.spotify.com/v1/me/player/currently-playing',{
                headers:{
                    Authorization:"Bearer " + token,
                    "Content-type":"application/json"
                }
            })
          const {item} = response.data
          console.log(response)
          if(response.data !== ""){
            const currentlyPlaying = {
              name:item.name,
              artist:item.artists.map((artist)=>artist.name),
              id:item.id,
              image:item.album.images[2].url
            }
            dispatch({type:reducercases.SET_CURRENTPLAYING, currentlyPlaying})
          }
         
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