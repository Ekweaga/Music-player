import React from 'react'
import styled from "styled-components"
import logo from '../img/MuzicLogo.png'

function Login() {
    const handleclick = ()=>{
        const clientid = 'cacb39694577472d9bace15d91a02452'
        const redirect = 'http://localhost:3000/'
        const apiurl = 'https://accounts.spotify.com/authorize'
        const scopes = ['user-read-email','user-read-private','user-modify-playback-state',
        'user-read-playback-state',
        'user-read-currently-playing','user-read-recently-played',
        'user-read-playback-position',
        'user-top-read']

        window.location.href = ` ${apiurl}?client_id=${clientid}&redirect_uri=${redirect}&scope=${scopes.join(" ")}&response_type=token&show_dialogue=true`
    }
  return (
   <Container>
    <div>
    <h1>Viral Muzic</h1>
    <img src={logo}/>
    <button onClick={handleclick}>Login With Us</button>
    </div>
   
   </Container>
  )
}

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;

height:100vh;
width:100%;
background-color:black;
gap:5em;

img{
height:20vh;
}
button{
    padding:20px;
    border-radius:5rem;
    background:crimson;
    color:white;
    border:1px solid crimson;
    cursor:pointer;
    width:200px;
}
h1{
    color:white;
    margin-bottom:0;
}
div{
    display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:80vh;
gap:30px;
}
`

export default Login