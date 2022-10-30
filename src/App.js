import { Box } from '@mui/material'
import NavBar from './components/header/NavBar'
import Home from './components/home/Home'

function App() {
  return (
    <>
      <NavBar />
      <Box style={{marginTop:95}}>
        <Home />
      </Box>
    </>
  )
}

export default App