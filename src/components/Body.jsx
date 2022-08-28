import React, {useEffect,useState}from 'react'
import styled from "styled-components"
import {useParams} from "react-router-dom"
import { AiFillClockCircle} from "react-icons/ai"
import {useStateProvider} from '../utilis/StateProvider'
import axios from 'axios'


function Body() {
  const {id}= useParams();
  const [{token},dispatch] = useStateProvider();
  const [playItems,setplayItems] = useState({})

  useEffect(()=>{
const getInitialPlayLists = async ()=>{
  const response = await axios.get(`https://api.spotify.com/v1/playlists/${id}`,{
    headers:{
      Authorization:"Bearer " + token,
      "Content-type":"application/json"
  }
  });
  const selectedPlayList = {
    id:response.data.id,
    name:response.data.name,
    description:response.data.description,
    images:response.data.images[0].url,
    tracks:response.data.tracks.items.map(({track})=>({
      id:track.id,
      artists:track.artists.map((artist)=>{
        return artist.name
      }),
      image:track.album.images[2].url,
      duration:track.duration_ms,
      album:track.album.name,
       context:track.album.uri,
      trackNo:track.track_number
    }))
  }
  setplayItems(selectedPlayList)
  console.log(response.data)
}
getInitialPlayLists();
  },[id,token,dispatch])

  return (
    <Container>
    {
        (
          <>
          <div className="playlist">
            <div className="image">
              <img src={playItems?.images} alt="img"/>
            </div>
            <div className="details">
              <span className="type">PLAYLIST</span>
              <h1 className="title">{playItems?.name}</h1>
              <p className="description">{playItems.description}</p>
            </div>
          </div>
          <div>
            <div className="header_row">
              <div className="col">
                <span>#</span>
              </div>
              <div className="col">
                <span>#</span>
              </div>
              <div className="col">
                <span>#</span>
              </div>
              <div className="col">
                <span>#</span>
              </div>
            </div>
          </div>
          </>
        )
    }

  </Container>
  )
}
const Container = styled.div`
`

export default Body