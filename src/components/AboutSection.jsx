import { Button, Container, Typography } from '@mui/material'
import React from 'react'

const AboutSection = () => {
  return(
    <div className='about-wrapper py-24 pos-relative d-flex'
      style={{
        zIndex: 1, 
        width: '72%'
      }}>
      <Container maxWidth='xl'>
        <Typography 
          variant='h5' 
          className='font-primary font-bold'
        >The Sage (Sang Maha Bijaksana)</Typography>
        <Typography 
          variant='body1' 
          className='font-secondary mt-8'
        >Arhouse Coffee memiliki tujuan untuk memberikan pengetahuan yang berharga kepada para pecinta kopi, baik mengenai biji kopi, metode penyeduhan, atau aspek lainnya yang terkait dengan kopi. Mereka ingin menjadi sumber kebijaksanaan dalam dunia kopi dan menginspirasi orang-orang untuk menjelajahi dan memahami keunikan kopi.</Typography>
        <Button 
          variant='contained'
          className='bgc-primary br-none font-primary font-bold mt-8'>Selengkapnya</Button>
      </Container>
      <img 
        src={require('../assets/logo01.png')} 
        className='about-img'/>
      <img 
        src={require('../assets/logo02.png')} 
        className='about-img ml-min50'/>
      <img 
        src={require('../assets/logo03.png')} 
        className='about-img ml-min50'/>
    </div>
  )
} 

export default AboutSection