import React,{useEffect,useState} from 'react'
import { AiFillClockCircle} from "react-icons/ai"
import {useStateProvider} from '../utilis/StateProvider'
import axios from 'axios'
import { reducercases } from '../utilis/constants'
import styled from "styled-components"

function Home() {
  const [{token,PlayLists},dispatch] = useStateProvider();
  const [playItems,setplayItems] = useState({})

  useEffect(()=>{
const getInitialPlayLists = async ()=>{
  const response = await axios.get(" https://api.spotify.com/v1/playlists/3aaxRMdaApqr1YqGXUiB0x",{
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
  console.log(selectedPlayList)
  console.log(response.data)
  setplayItems(selectedPlayList)
  dispatch({type:reducercases.SET_SELECTEDPLAYLISTS, selectedPlayList})
}
getInitialPlayLists();
  },[token,dispatch,PlayLists])
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
                  <span>TITLE</span>
                </div>
                <div className="col">
                  <span>ALBUM</span>
                </div>
                <div className="col">
                  <span><AiFillClockCircle/></span>
                </div>
              </div>
            </div>
            <div className="tracks">
              {
                playItems.tracks?.map(({id,name,artists,image,duration,album,context,trackNO},index)=>{
                      return (
                      <>  <div className="row" key={id}>
                          <span>{index + 1}</span>
                        </div>
                        <div className="col detail">
                          <img src={image}/>
                        </div>

                        </>
                      )
                })
              }
              
            </div>
            </>
          )
      }

    </Container>
  )
}

const Container = styled.div`
`

export default Home