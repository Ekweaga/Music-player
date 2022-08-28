import React from 'react'
import styled from "styled-components"
import {useStateProvider} from '../utilis/StateProvider'
import {FaSearch} from "react-icons/fa"
import {CgProfile} from "react-icons/cg"


function Navbar({navBackground}) {
  
  const [{userInfo}] = useStateProvider()

  return (
    <Container navBackground={navBackground}>
      <div className="search_bar">
        <FaSearch style={{color:'black'}}/>
        <input type="text" placeholder="Artists, songs, podcasts"/>
      </div>
      <div className="avatar">
        <CgProfile style={{fontSize:'30px'}}/>
        <span>{userInfo?.name}</span>
      </div>
      
    </Container>
  )
}

const Container = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding:2rem;
height:15vh;
position:sticky;

top:0;
left:0;
background:${({navBackground})=>navBackground ? "rgba(0,0,0,0.7)":"none"};
transition:0.5s ease-in-out all;
.search_bar{
  background-color:white;
  padding:0.4rem 1rem;
  border-radius:2rem;
  width:30%;
display:flex;
align-items:center;
gap:0.5rem;
input{
  border:none;
  height:2rem;
  width:100%;
  &:focus{
    border:none;
    outline:none;
  }
}
 
}
`

export default Navbar