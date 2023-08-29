import { Container, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-36'>
      <div style={{ position: 'relative'}}>
        <img src={require('../assets/banner3.png')} 
          style={{ width: '100%' }}/>
        <div
          className='pd-24'
          style={{
            position: 'absolute',
            right: '24px',
            bottom: -15,
            backgroundColor: '#013020'
          }}
        >
          <Typography variant='body2' 
            sx={{ color: 'white'}}>Jl. Pelita Raya 23, Balla Parang, Kec. Rappocini, Kota Makassar, Sulawesi Selatan 90231</Typography>
          <Typography variant='body2' 
            sx={{ color: 'white' }}>Buka setiap hari 10.00 - 22.00</Typography>
          <hr className='my-8'/>
          <Typography variant='body2'
            sx={{ color: 'white' }}>Kontak Kami : +6287237287121</Typography>
        </div>
      </div>

      <div className='main-footer'>
        <Container maxWidth='xl'>
          <div className='pd-48-40 d-flex justify-spc-between'>
            <div>
              <img src={require('../assets/arhouse-colored-logo.png')} />
              <Typography 
                variant='h6' 
                className='font-primary font-bold'
              >Arhouse Coffee, join us</Typography>
              <Typography
                variant='body2'
                className='font-secondary'
              >Copyright ⓒ 2020 - 2021 First Boulevard, all rights reserved.</Typography>
            </div>

            <div className='d-flex justify-spc-around'>
              <div>
                <Typography 
                  variant='h6'
                  className='font-primary font-bold'
                >TENTANG KAMI</Typography>
              </div>
              <div>
                <Typography 
                  variant='h6'
                  className='font-primary font-bold'
                >MENU</Typography>
              </div>
              <div>
                <Typography 
                  variant='h6'
                  className='font-primary font-bold'
                >MEDIA</Typography>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Footer