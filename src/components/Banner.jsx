import React from 'react'

import { Container, Typography } from '@mui/material'

const Banner = () => {
  return(
    <div style={{
      backgroundColor: '#121212',
      height: 'max-content',
    }}>
      <Container maxWidth='xl' 
        style={{ position: 'relative', paddingTop: '24px', paddingBottom: '24px' }}>
        <div style={{ display: 'flex'}}>
          <div style={{ display: 'block', padding: '12px', width: '60%'}}>
            <div className='d-flex' style={{ alignItems: 'center'}}>
              <span className='line'></span>
              <Typography variant='body1'   
                className='font-primary mx-4' sx={{ color: 'white'}} >Since 2023</Typography>
              <span className='line'></span>
            </div>
            <Typography variant='h4' 
              sx={{ color: '#F8F8F8', fontFamily: 'Cinzel', fontWeight: 'bold !important'}}>memberikan pengalaman kopi yang mendalam, unik, dan membangkitkan emosi kepada para pecinta kopi.</Typography>
            <Typography variant='body2' 
              className='font-secondary' sx={{ color: '#F8F8F8'}}>
              menyediakan kopi berkualitas tinggi, kami ingin memenuhi keinginan para pencinta kopi untuk menikmati secangkir kopi yang luar biasa. Kami ingin menciptakan momen-momen yang menginspirasi, di mana orang-orang dapat menghargai kebijaksanaan dan keindahan yang terkandung dalam setiap cangkir kopi.
            </Typography>
          </div>
          <img src={require('../assets/banner1.png')}
            style={{
              position: 'absolute',
              right: 36,
              bottom: -150,
              width: '400px',
              aspectRatio: '1'
            }}
          />
        </div>
      </Container>
    </div>
  )
}

export default Banner