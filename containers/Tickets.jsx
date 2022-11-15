import {  Grid } from '@mui/material'
import React from 'react'
// import SideBar from '../components/SideBar';
const Tickets = () => {
  return (
    <>
      <Grid style={{backgroundColor:"lightgray", display:"flex", flex:1, width:"100%",height:"100vh"}} >
        {/* <SideBar activeScreen="/tickets"/> */}
        <h1 style={{color:"white"}}>It's a Ticket Screen</h1>
      </Grid>
    </>
  )
}

export default Tickets

