import { AppBar,Toolbar,styled, Box, Typography} from '@mui/material'
import React from 'react'

const STYLEHEADER=styled(AppBar)`
background: #23395d;
height: 85px;
`
const COMPONENT=styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 65%;
`

const NavBar = () => {
    const logo='../logo.png'
  return (
    <STYLEHEADER>
        <Toolbar style={{minHight:55}} >
            <COMPONENT>
                <img src={logo} alt="logo" style={{width:75 ,marginTop:10}}/>  
                <Box>
                <h1 style={{fontSize:30}}>Police Department of Berlin</h1>
                <Typography>Stolen bykes</Typography> 
                </Box>                            
            </COMPONENT>            
        </Toolbar>
    </STYLEHEADER>
  )
}

export default NavBar