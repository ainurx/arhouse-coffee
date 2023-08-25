import React from 'react'

import { AppBar, Box, Button, Container } from '@mui/material'

const Navbar = () =>{
  return (
    <AppBar
      position='relative'
      color='transparent' 
      sx={{ backgroundColor: '#121212', boxShadow: 'none' }}>
      <Container>
        <div style={{ display: 'flex', padding: '18px 0'}}>
          <img src={require('../assets/arhouse-white-logo.png')} 
            alt="arhouse-coffee" />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }} 
            justifyContent='center'>
            <Button sx={{ color: '#FFB26E'}}>Beranda</Button>
            <Button sx={{ color: 'white'}}>Fasilitas</Button>
            <Button sx={{ color: 'white'}}>Menu</Button>
            <Button sx={{ color: 'white'}}>Lokasi</Button>
          </Box>
          <Box>
            <Button variant='contained'
              sx={{ backgroundColor: '#573313'}}>Hubungi Kami</Button>
          </Box>
        </div>
      </Container>
    </AppBar>
  )
}

export default Navbar