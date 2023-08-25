import { Button, Container, Typography } from '@mui/material'
import React from 'react'

const AboutSection = () => {
  return(
    <div style={{ display: 'flex' }}>
      <Container maxWidth='xl'>
        <Typography variant='h5'>The Sage (Sang Maha Bijaksana)</Typography>
        <Typography variant='body1'>Arhouse Coffee memiliki tujuan untuk memberikan pengetahuan yang berharga kepada para pecinta kopi, baik mengenai biji kopi, metode penyeduhan, atau aspek lainnya yang terkait dengan kopi. Mereka ingin menjadi sumber kebijaksanaan dalam dunia kopi dan menginspirasi orang-orang untuk menjelajahi dan memahami keunikan kopi.</Typography>
        <Button variant='contained'
          sx={{ backgroundColor: '#573313'}}>Selengkapnya</Button>
      </Container>
      <img src={require('../assets/logo01.png')} 
        style={{ width: '112px' }}/>
      <img src={require('../assets/logo02.png')} 
        style={{ width: '112px' }}/>
      <img src={require('../assets/logo03.png')} 
        style={{ width: '112px' }}/>
    </div>
  )
} 

export default AboutSection