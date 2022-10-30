
import React, { useEffect, useState } from 'react'
import {styled, Box} from '@mui/material'
import axios from 'axios';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import Userdata from './Userdata'


const PAGECONTAINER=styled(Box)`
    display: flex;
    width: 60%;
    justify-content: center;
    margin: auto;
    padding: 7%;
    background: #e9e7e7;
`

const Home = () => {
    const [data, setData]=useState([]); 
    const [searchApiData, setSearchApiData]=useState([])
    const [filterVal, setFilterVal]=('');  

    const [show, setShow]=useState(true)

   const[todos, setTodos]=useState([]);
   const[todoPerPage]=useState(10);
   const[currentPage, setCurrentPage]=useState(1);

   const numOfTotalPage=Math.ceil(todos.length/todoPerPage);
   const pages=[...Array(numOfTotalPage + 1).keys()].slice(1);

   const indexOfLastTodo=currentPage*todoPerPage;
   const indexOfFirstTodo=indexOfLastTodo-todoPerPage;

   const visibaleTodos=todos.slice(indexOfFirstTodo, indexOfLastTodo);

   const prevPageHandler=()=>{
    if(currentPage !== 1) setCurrentPage(currentPage - 1)
   }
    
   const nextPageHandler=()=>{
    if(currentPage !== numOfTotalPage) setCurrentPage(currentPage + 1)
   }

    useEffect(()=>{
        const fetchData=async()=>{
           await axios.get("https://bikeindex.org/api/v3/search").then(res=>{
                setData(res.data.bikes);
                setSearchApiData(res.data.bikes);
                setTodos(res.data.bikes);
            }).catch((err)=>{console.log(err)})
        }
        fetchData();
    },[])

    const handleFilter=(e)=>{
        if(e.target.value===''){
            setData(searchApiData)
        }else{
           const filterResult= searchApiData.filter(item=>item.title.toLowerCase().includes(e.target.value.toLowerCase()) ||new Date(item.date_stolen).toLocaleDateString().includes(e.target.value.toLowerCase()))
        
           if(filterResult.length > 0){
            setData(filterResult)
           }else{
            setData([{"<CONTAINER>":"NO DATA FOUND"}])
           }           
        }
        setFilterVal(e.target.value)
    }  
    
  return (
    <>  
    <SearchBar filterVal={filterVal} setShow={setShow} handleFilter={handleFilter}/>

    <h2 style={{paddingBottom:10, textAlign:'right', marginRight:150}}>Total:{data.length}</h2>
    {data.length===0 ?(
        <Box style={{marginLeft:90, color:'gray'}}><h2>Loading...</h2></Box>
    ):(show ? (<Pagination visibale={visibaleTodos}/>) :(<Userdata data={data}/>)     
    )}

    {
        show ? (<PAGECONTAINER >
        <Box onClick={prevPageHandler} style={{marginRight:10, color:'green', fontWeight:'bold', cursor:'pointer'}}>Prev</Box>
            {
                pages.map((page)=><span key={page} onClick={()=>setCurrentPage(page)} style={{marginRight:10, color:'black', fontWeight:'bold', cursor:'pointer'}} >{page}</span>)
            }
        <Box onClick={nextPageHandler} style={{marginLeft:10, color:'red', fontWeight:'bold', cursor:'pointer'}}>Next</Box>
        </PAGECONTAINER>):(null)
    }
    </>
  )
}

export default Home