// React dependencies
import React, { useEffect, useState } from 'react'

// External dependencies
import PropTypes from 'prop-types'

function ProgressiveImage({image, classes, style, width, height}){
  const [imgSource, setImgSource] = useState('')
  const [imgLoading, setImgLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      const img = new Image()
      img.src = image
      img.onload = () => {
        setImgSource(image)
        setImgLoading(false)
      } 
    }, 1000)
  }, [image])

  return (
    <>
      {
        imgLoading ? 
          <div className={classes} 
            style={{ 
              backgroundColor: '#DDE6ED', 
              width, 
              height, 
              ...style }}
          >
          </div>
          :
          <img className={classes} 
            src={imgSource} 
            alt={imgSource} 
            style={{ width, height, ...style }}
          />
      }
    </>
  )
}

ProgressiveImage.propTypes = {
  classes: PropTypes.string,
  style: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  image: PropTypes.string.isRequired,
}

ProgressiveImage.defaultProps = {
  classes: '',
  style: {},
  width: '100%',
  height: 'auto'
}

export default ProgressiveImage