import React from 'react'
import {styled, Box, Typography} from '@mui/material'

const COMPONENT=styled(Box)`
    display: flex;    
    align-items: center;
    width: 100%;
    margin-bottom:10px;
    background: #f6f4f4;
`;

const CONTAINER=styled(Box)`
    display: flex;
    width: 60%;
    border: 2px solid gray;
    margin: auto;
    background: #e9e7e7;
    border-radius: 5px;
`

const Userdata = ({data}) => {
  return (
    <>
    {
       data.map((item, index)=>(
        <COMPONENT key={index}>
            <CONTAINER>
                <Box style={{marginRight:20, display:'flex', alignItems:'center'}}>
                    <img src={item.thumb ? item.thumb :"./noimg.png"} alt="logo" width={150} style={{alignItems:'center'}}/>
                </Box>
            <Box style={{marginTop:20}}>
                <h2>{item.title}</h2>
                <Typography style={{fontSize:16}}>{item.description ? item.description :"No information avilable"}</Typography>
                <Box style={{display:'flex'}}>
                    <h4 style={{marginRight:10}}>{new Date(item.date_stolen).toLocaleDateString()}</h4>
                    <h4 style={{marginRight:10}}>{item.year}</h4>
                    <h4>{item.stolen_location}</h4>
                </Box>
            </Box>
            </CONTAINER>
        </COMPONENT>
        )) 
    }
    </>
  )
}

export default Userdata