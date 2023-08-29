import React from 'react'

import { Container, Typography, List, ListItem } from '@mui/material'

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
            sx={{ color: 'white' }}>Kontak Kami : +62 852 5644 3534</Typography>
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

            <div className='d-flex justify-spc-around gap-64'>
              <div>
                <Typography 
                  variant='h6'
                  className='font-primary font-bold'
                >TENTANG KAMI</Typography>
                <List>
                  <ListItem className='pl-0'>
                    <Typography 
                      variant='body2'
                      className='font-secondary'
                    >Sejarah</Typography >
                  </ListItem>
                  <ListItem className='pl-0'>
                    <Typography 
                      variant='body2'
                      className='font-secondary'
                    >Lokasi</Typography >
                  </ListItem>
                  <ListItem className='pl-0'>
                    <Typography 
                      variant='body2'
                      className='font-secondary'
                    >Galeri</Typography >
                  </ListItem>
                  <ListItem className='pl-0'>
                    <Typography 
                      variant='body2'
                      className='font-secondary'
                    >Layanan</Typography >
                  </ListItem>
                  <ListItem className='pl-0'>
                    <Typography 
                      variant='body2'
                      className='font-secondary'
                    >Fasilitas</Typography >
                  </ListItem>
                </List>
              </div>
              <div>
                <Typography 
                  variant='h6'
                  className='font-primary font-bold'
                >MENU</Typography>
                <List>
                  <ListItem className='pl-0'>
                    <Typography 
                      variant='body2'
                      className='font-secondary'
                    >Latte</Typography >
                  </ListItem>
                  <ListItem className='pl-0'>
                    <Typography 
                      variant='body2'
                      className='font-secondary'
                    >Americano</Typography >
                  </ListItem>
                  <ListItem className='pl-0'>
                    <Typography 
                      variant='body2'
                      className='font-secondary'
                    >Cappucino</Typography >
                  </ListItem>
                  <ListItem className='pl-0'>
                    <Typography 
                      variant='body2'
                      className='font-secondary c-primary font-bold'
                    >Lainnya</Typography >
                  </ListItem>
                </List>
              </div>
              <div>
                <Typography 
                  variant='h6'
                  className='font-primary font-bold'
                >MEDIA</Typography>
                <List>
                  <ListItem className='pl-0'>
                    <Typography 
                      variant='body2'
                      className='font-secondary'
                    >Privacy Policy</Typography >
                  </ListItem>
                  <ListItem className='pl-0'>
                    <Typography 
                      variant='body2'
                      className='font-secondary'
                    >Development</Typography >
                  </ListItem>
                  <ListItem className='pl-0'>
                    <Typography 
                      variant='body2'
                      className='font-secondary'
                    >Terms & Conditions</Typography >
                  </ListItem>
                </List>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Footer