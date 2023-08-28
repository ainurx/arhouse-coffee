import { Button, Container, Typography } from '@mui/material'
import React from 'react'

const MenuSection = () =>{
  return (
    <div>
      <Container maxWidth='xl'>
        <div style={{ display: 'flex' }}>
          <img src={require('../assets/banner2.png')} 
            style={{ aspectRatio: 1, width: '400px' }} />
          <div className='d-flex align-center'>
            <div>
              <div className='d-flex align-center'>
                <span className='line border-green'></span>
                <Typography 
                  variant='body1' 
                  className='mx-4 font-primary font-bold c-green'
                >UNTUK ANDA</Typography>
                <span className='line border-green'></span>
              </div>
              <Typography 
                variant='h3' 
                className='font-primary font-bold'
              >Sedikit Informasi untuk pelanggan kami</Typography>
              <Typography 
                variant='body1' 
                className='font-secondary'
              >Disini kamu menyediakan ruangan yang bisa digunakan oleh pelanggan kami untuk mendapatkan pengalaman yang lebih baik.</Typography>
              <div style={{ display: 'flex', width: '50%', justifyContent: 'space-between'}}>
                <div>
                  <Typography 
                    variant='h4'
                    className='font-secondary font-bold'
                  >23</Typography>
                  <Typography 
                    variant='body1'
                    className='font-secondary c-gray'
                  >Ruangan Meeting</Typography>
                </div>
                <div>
                  <Typography
                    variant='h4'
                    className='font-secondary font-bold'
                  >23</Typography>
                  <Typography 
                    variant='body1'
                    className='font-secondary c-gray'
                  >Berbagai Menu</Typography>
                </div>
                <div>
                  <Typography 
                    variant='h4'
                    className='font-secondary font-bold'
                  >23</Typography>
                  <Typography 
                    variant='body1'
                    className='font-secondary c-gray'
                  >Event Space</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <div className='d-flex align-center'>
            <div>
              <div className='d-flex align-center'>
                <span className='line border-green'></span>
                <Typography 
                  variant='body1'
                  className='font-primary font-bold mx-4 c-green' 
                >APA YANG KAMI SEDIAKAN?</Typography>
                <span className='line border-green'></span>
              </div>
              <Typography 
                variant='h3'
                className='font-primary font-bold'
              >Jelajahi menu yang kami sediakan</Typography>
              <Typography 
                variant='body1'
                className='font-secondary'  
              >Arhouse Coffee adalah rumah bagi siapa saja yang memiliki antusiasme pada minuman kopi, tempat di mana mereka dapat mengeksplorasi, belajar, dan merasakan keindahan dan keunikan kopi.</Typography>
              <Button 
                variant='contained'
                className='br-none bgc-primary font-primary font-bold mt-8'
              >Selengkapnya</Button>
            </div>
          </div>
          <div className='d-flex gap-14'>
            <div className='pos-relative'>
              <Typography 
                variant='body2'
                className='pos-absolute bgc-white font-primary font-bold c-primary pd-4-12' 
              >Latte</Typography>
              <img src={require('../assets/menu1.png')} 
                style={{
                  width: '200px'
                }}/>
            </div>
            <div className='pos-relative'>
              <Typography 
                variant='body2'
                className='pos-absolute bgc-white font-primary font-bold c-primary pd-4-12' 
              >Americano</Typography>
              <img src={require('../assets/menu2.png')} 
                style={{
                  width: '200px'
                }}/>
            </div>
            <div className='pos-relative'>
              <Typography 
                variant='body2'
                className='pos-absolute bgc-white font-primary font-bold c-primary pd-4-12' 
              >Cappucino</Typography>
              <img src={require('../assets/menu3.png')} 
                style={{
                  width: '200px'
                }}/>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default MenuSection