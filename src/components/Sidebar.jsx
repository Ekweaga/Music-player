import React from 'react'
import styled from "styled-components"
import logo from '../img/MuzicLogo.png'
import {IoLibrary} from "react-icons/io5"
import {MdHomeFilled,MdSearch} from "react-icons/md"
import PlayLists from './PlayLists'
function Sidebar() {
  return (
    <Container>
        <div className="top_links">
            <div className="logo">
                <img src={logo}/>
            </div>
            <ul>
                <li><MdHomeFilled/>
                    Home</li>
                <li><MdSearch/>
                    Search</li>
                <li><IoLibrary/>
                    Library</li>
            </ul>
            <PlayLists/>
        </div>
    </Container>
  )
}


const Container = styled.div`
background-color:black;
width:100%;
display:flex;
height:100%;
flex-direction:column;
.top_links{
    display:flex;
    flex-direction:column;
    .logo{
        text-align:center;
        margin:1rem 0;
        img{
            max-inline-size:80%;
            block-size:auto;
        }
    }
}

ul{
    list-style-type:none;
    display:flex;
    flex-direction:column;
    gap:1rem;
    padding:1rem;
    li{
        display:flex;
        cursor:pointer;
        align-items:center;
        justify-content:center;
        &:hover{
            color:crimson;
        }
    }
}

@media(max-width:600px){
    .top_links{
        padding:20px;
    }
}

`
export default Sidebar