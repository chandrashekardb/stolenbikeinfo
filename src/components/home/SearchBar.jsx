import { TextField,Box,styled, Button } from '@mui/material'
import React from 'react'

const SEARCHCOMPONET=styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f6f4f4;
`;

const SearchBar=({filterVal, setShow, handleFilter})=>{
  return (
    <>     
    <SEARCHCOMPONET >
        <TextField name='name' type="search" variant='outlined' placeholder='Serach bike' sx={{margin:5}} value={filterVal} onInput={(e)=>handleFilter(e)} onChange={()=>setShow(false)}/>
        
        <h2>From</h2>
        <TextField name='name' type="date" variant='outlined' placeholder='From' sx={{margin:5}} value={filterVal} onInput={(e)=>handleFilter(e)} onChange={()=>setShow(false)}/>

        <h2>To</h2>
        <TextField name='name' type="date" variant='outlined' placeholder='From' sx={{margin:5}} value={filterVal} onInput={(e)=>handleFilter(e)} onChange={()=>setShow(false)}/>
        
        <Button variant="contained">Find Cases</Button>
    </SEARCHCOMPONET>
    </>
  )
}

export default SearchBar