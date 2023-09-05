import React from 'react'

import { Container, Typography } from '@mui/material'

const Banner = () => {
  return(
    <div className='banner-wrapper'>
      <Container 
        maxWidth='xl' 
        className='pos-relative py-24'
      >
        <div className='d-flex'>
          <div className='banner-container pd-12'>
            <div className='d-flex align-center'>
              <span className='line border-cream'></span>
              <Typography 
                variant='body1'   
                className='font-primary mx-4 c-secondary-white'  
              >Since 2023</Typography>
              <span className='line border-cream'></span>
            </div>
            <Typography variant='h4' 
              className='banner-title c-white font-primary font-bold'
            >memberikan pengalaman kopi yang mendalam, unik, dan membangkitkan emosi kepada para pecinta kopi.</Typography>
            <Typography 
              variant='body2' 
              className='font-secondary banner-desc c-white'
            >
              menyediakan kopi berkualitas tinggi, kami ingin memenuhi keinginan para pencinta kopi untuk menikmati secangkir kopi yang luar biasa. Kami ingin menciptakan momen-momen yang menginspirasi, di mana orang-orang dapat menghargai kebijaksanaan dan keindahan yang terkandung dalam setiap cangkir kopi.
            </Typography>
          </div>
          <img 
            src={require('../assets/banner1.png')}
            className='banner-image'
          />
        </div>
      </Container>
    </div>
  )
}

export default Banner