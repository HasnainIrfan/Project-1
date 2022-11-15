import {  Grid } from '@mui/material'
import React from 'react'
// import SideBar from '../components/SideBar';
const CompletedProject = () => {
  return (
    <>
      <Grid style={{backgroundColor:"lightgray", display:"flex", flex:1, width:"100%",height:"100vh"}} >
        {/* <SideBar activeScreen="/projects/completed"/> */}
        <h1 style={{color:"white"}}>It's an Completed Project Screen</h1>
      </Grid>
    </>
  )
}

export default CompletedProject

