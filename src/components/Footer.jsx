import React from 'react'
import styled from "styled-components"

function Footer() {
  return (
    <Container>Footer</Container>
  )
}
const Container = styled.div`
background-color:black;
height:100%;
width:100%;
border-top:1px solid black;
display:grid;
grid-template-columns:1fr 2fr 1fr;
align-items:center;
justify-content:center;
padding:0 1rem;

`
export default Footer