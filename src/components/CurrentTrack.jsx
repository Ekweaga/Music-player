import React,{useEffect,useState} from 'react'
import styled from "styled-components"
import axios from 'axios'
import {useStateProvider} from '../utilis/StateProvider'
import { reducercases } from '../utilis/constants'

function CurrentTrack() {
    const [{token,currentlyPlaying},dispatch] = useStateProvider()
    const [currentTrack,setcurrentTrack] = useState({})
    const [noCurrentTrack,setnoCurrentTrack]= useState('')

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
            setcurrentTrack(currentlyPlaying)
            dispatch({type:reducercases.SET_CURRENTPLAYING, currentlyPlaying})
          }

          else{
                setnoCurrentTrack("No track song is selected")
          }
         
        }
        getcurrentTrackData();
    },[token,dispatch])
  return (
    <Container>
      <div className="track">
        <div className="track_image">
          <img src={currentTrack?.image} alt="images"/>
        </div>
        <div className="track_info">
          <span>{currentTrack.name}</span>
          <span>{currentTrack.artist}</span>
        </div>

      </div>
    </Container>
  )
}

const Container = styled.div`
.track{
  display:flex;
  gap:20px;
  align-items:center;
  justify-content:center;
  .track_info{
    display:flex;
    flex-direction:column;
  }
}
`

export default CurrentTrack