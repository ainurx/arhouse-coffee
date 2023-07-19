import React from 'react'

import _ from 'lodash'
import PropTypes from 'prop-types'
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';

const useStyles = makeStyles({
  mr6: {marginRight: '6px'}
})

const useTheme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
  },
});

function HSF({items, activeItem, onItemSelected, style}){
  const theme = useTheme()
  const classes = useStyles()

  return (
    <div style={{display: 'flex'}}>
      {
        _.map(items, item=>(
          <Button
            classes={classes.mr6}
            sx={{ marginRight: '12px',...style }}
            color={theme.palette.primary}
            variant={activeItem === item ? 'contained' : 'outlined'}
            onClick={()=>onItemSelected(item)}
          >
            {item}
          </Button>
        ))
      }
    </div>
  )
}

HSF.propTypes = {
  style: PropTypes.object,

  items: PropTypes.string.isRequired,
  activeItem: PropTypes.string.isRequired,

  onItemSelected: PropTypes.func.isRequired
}

HSF.defaultProps = {
  style: {},
}

export default HSF