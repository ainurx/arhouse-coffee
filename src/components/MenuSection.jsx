import { Button, Container, Typography } from '@mui/material'
import React from 'react'

const MenuSection = () =>{
  return (
    <div>
      <Container maxWidth='xl'>
        <div style={{ display: 'flex' }}>
          <img src={require('../assets/banner2.png')} 
            style={{ aspectRatio: 1, width: '400px' }} />
          <div>
            <Typography variant='body1'>UNTUK ANDA</Typography>
            <Typography variant='h3'>Sedikit Informasi untuk pelanggan kami</Typography>
            <Typography variant='body1'>Disini kamu menyediakan ruangan yang bisa digunakan oleh pelanggan kami untuk mendapatkan pengalaman yang lebih baik.</Typography>
            <div style={{ display: 'flex', width: '50%', justifyContent: 'space-between'}}>
              <div>
                <Typography variant='h4'>23</Typography>
                <Typography variant='body1'>Ruangan Meeting</Typography>
              </div>
              <div>
                <Typography variant='h4'>23</Typography>
                <Typography variant='body1'>Berbagai Menu</Typography>
              </div>
              <div>
                <Typography variant='h4'>23</Typography>
                <Typography variant='body1'>Event Space</Typography>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <div>
            <Typography variant='body1'>APA YANG KAMI SEDIAKAN?</Typography>
            <Typography variant='h3'>Jelajahi menu yang kami sediakan</Typography>
            <Typography variant='body1'>Arhouse Coffee adalah rumah bagi siapa saja yang memiliki antusiasme pada minuman kopi, tempat di mana mereka dapat mengeksplorasi, belajar, dan merasakan keindahan dan keunikan kopi.</Typography>
            <Button variant='contained'
              sx={{ backgroundColor: '#573313'}}>Selengkapnya</Button>
          </div>
          <div style={{ position: 'relative'}}>
            <Typography variant='body2' 
              style={{ position: 'absolute', backgroundColor: 'white', color: '#573313', padding: '4px 12px' }}>Latte</Typography>
            <img src={require('../assets/menu1.png')} 
              style={{
                width: '200px'
              }}/>
          </div>
          <div style={{ position: 'relative'}}>
            <Typography variant='body2' 
              style={{ position: 'absolute', backgroundColor: 'white', color: '#573313', padding: '4px 12px' }}>Americano</Typography>
            <img src={require('../assets/menu2.png')} 
              style={{
                width: '200px'
              }}/>
          </div>
          <div style={{ position: 'relative'}}>
            <Typography variant='body2' 
              style={{ position: 'absolute', backgroundColor: 'white', color: '#573313', padding: '4px 12px' }}>Cappucino</Typography>
            <img src={require('../assets/menu3.png')} 
              style={{
                width: '200px'
              }}/>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default MenuSection