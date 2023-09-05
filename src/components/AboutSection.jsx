import { Button, Container, Typography } from '@mui/material'
import React from 'react'

const AboutSection = () => {
  return(
    <div className='py-24 pos-relative d-flex'
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
      <img src={require('../assets/logo01.png')} 
        style={{ width: '160px', aspectRatio: '1' }}/>
      <img src={require('../assets/logo02.png')} 
        style={{ width: '160px', aspectRatio: '1', marginLeft: '-50px' }}/>
      <img src={require('../assets/logo03.png')} 
        style={{ width: '160px', aspectRatio: '1', marginLeft: '-50px' }}/>
    </div>
  )
} 

export default AboutSection