import { Divider, Grid } from '@mui/material'
import React from 'react'
import Input from '../components/sharedComponents/input'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockIcon from '@mui/icons-material/Lock';
import Styles from "../styles/login.module.scss"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// import SideBar from '../components/SideBar';
const ProjectDb = () => {


  return (
    <>
      <Grid style={{backgroundColor:"lightgray", display:"flex", flex:1, width:"100%",height:"100vh"}} >
        {/* <SideBar activeScreen="/dashboard/projects" /> */}
        <h1 style={{color:"white"}}>It's an Project Dashboard Screen</h1>
      </Grid>
    </>
  )
}

export default ProjectDb

