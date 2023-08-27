import React from 'react'

import { AppBar, Box, Button, Container } from '@mui/material'

const Navbar = () =>{
  return (
    <AppBar
      position='relative'
      color='transparent' 
      className='shadow-none bgc-black'>
      <Container>
        <div className='d-flex pd-18-0'>
          <img 
            src={require('../assets/arhouse-white-logo.png')} 
            alt="arhouse-coffee" />
          <Box sx={{ flexGrow: 1, display: { xs: 'block', md: 'none'}, position : 'relative'}}
            justifyContent='end'>
            <div style={{ border: '2px solid white', position: 'absolute', width: '35px', top: 0 , right: 0}}></div>
            <div style={{ border: '2px solid white', position: 'absolute', width: '25px', top: '50%', right: 0}}></div>
            <div style={{ border: '2px solid white', position: 'absolute', width: '10px', bottom: 0, right: 0}}></div>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }} 
            justifyContent='center'>
            <Button className='c-tersier font-primary'>Beranda</Button>
            <Button className='c-white font-primary'>Fasilitas</Button>
            <Button className='c-white font-primary'>Menu</Button>
            <Button className='c-white font-primary'>Lokasi</Button>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button 
              variant='contained'
              className='bgc-primary br-none font-primary'
            >Hubungi Kami</Button>
          </Box>
        </div>
      </Container>
    </AppBar>
  )
}

export default Navbar