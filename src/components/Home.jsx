import React,{useEffect,useState} from 'react'
import { AiFillClockCircle} from "react-icons/ai"
import {useStateProvider} from '../utilis/StateProvider'
import axios from 'axios'
import { reducercases } from '../utilis/constants'
import styled from "styled-components"

function Home({headerBackground}) {
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
                        <div className="col">
                        <span>{index + 1}</span>
                        </div>
                         
                          <div className="cols detail">
                            <div className="image"> <img src={image} alt="img"/></div>
                         
                          <div className="info" style={{display:'flex',flexDirection:'column'}}>
                            <span>{name}</span>
                          <span>{artists}</span>
                          </div>

                          <div className="col"><span>{album}</span></div>
                            <div className="col"><span>{duration}</span></div>
                        </div>
                        
                           


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
.playlist{
  margin:0 2rem;
  display:flex;
  align-items:center;
  gap:2rem;
  .image{
    img{
      height:15rem;
      box-shadow:rgba(0,0,0,0.25) 0px 25px 50px -12px;
    }
  }
  .details{
    display:flex;
    flex-direction:column;
    gap:1rem;
    color:white-smoke;
    .title{
      color:white;
      font-size:4rem;
    }
  }
}

  .header_row{
    display:grid;
    grid-template-columns:0.3fr 3fr 2fr 0.1fr;
    margin:1rem 0 0 0;
    position:sticky;
    top:15vh;
    padding:1rem 3rem;
    transitions:0.3s ease all;
  }
  .tracks{
    margin:0 2rem;
    display:flex;
    flex-direction:column;
    margin-bottom:5rem;
    .row{
      padding:0.5rem 1rem;
      display:grid;
      grid-template-columns:0.3fr 3.1fr 1.8fr 0.1fr;
      cursor:pointer;
      &:hover{
        background:rgba(0,0,0,0.7);
      }
      .col{
        display:flex;
        align-items:center;
      }
      .cols{
        display:flex;
        align-items:center;

        color:white-smoke;
        img{
          height:40px;
        }
      }
      .detail{
        display:flex;
        gap:1rem;
      
      }

    }
  }
 

`

export default Home