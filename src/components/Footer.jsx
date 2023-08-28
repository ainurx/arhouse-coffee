import { Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-36'>
      <div style={{ position: 'relative'}}>
        <img src={require('../assets/banner3.png')} 
          style={{ width: '100%' }}/>
        <div
          style={{
            position: 'absolute',
            right: '24px',
            bottom: -15,
            padding: '18px',
            backgroundColor: '#013020'
          }}
        >
          <Typography variant='body2' 
            sx={{ color: 'white'}}>Jl. Pelita Raya 23, Balla Parang, Kec. Rappocini, Kota Makassar, Sulawesi Selatan 90231</Typography>
          <Typography variant='body2' 
            sx={{ color: 'white' }}>Buka setiap hari 10.00 - 22.00</Typography>
          <hr/>
          <Typography variant='body2'
            sx={{ color: 'white' }}>Kontak Kami : +6287237287121</Typography>
        </div>
      </div>

    </div>
  )
}

export default Footer