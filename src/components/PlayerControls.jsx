import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import {BsFillPlayCircleFill,BsFillPauseCircleFill,BsShuffle} from "react-icons/bs"
import {CgPlayTrackNext,CgPlayTrackPrev} from "react-icons/cg"
import {FiRepeat} from "react-icons/fi"
import {useStateProvider} from '../utilis/StateProvider'
import axios from "axios"

function PlayerControls() {
    const [playerState,setplayerState] =  useState({})
    const [{token},dispatch] = useStateProvider()

    const changeTrack = async (type) =>{
         await axios.post(`https://api.spotify.com/v1/me/player/${type}`,{},{
            headers:{
                Authorization:"Bearer " + token,
                "Content-type":"application/json"
            }
        });
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
           
          }

          else{
               
          }
         
        }

    }
  return (
    <Container>
        <div className="shuffle">
            <BsShuffle/>
        </div>
        <div className="previous">
            <CgPlayTrackPrev onClick={()=>changeTrack("previous")}/>
        </div>
        <div className="state">
            {playerState ? <BsFillPauseCircleFill/> : <BsFillPlayCircleFill/>}
        </div>
        <div className="next">
            <CgPlayTrackNext onClick={()=>changeTrack("next")}/>
        </div>
        <div className="repeat">
            <FiRepeat/>
        </div>

    </Container>
  )
}


const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
gap:2rem;
svg{
    transitions:0.2s ease all;
    cursor:pointer;

    &:hover{
        color:crimson;

    }
}
.state{
    svg{
        color:white;
    }
   

}
.previous, .next, .state{
    font-size:2rem;
}
`

export default PlayerControls