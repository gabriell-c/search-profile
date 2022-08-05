import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './style.css'

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' }} style={{overflow: 'hidden'}}>
        <div className='circle'>
            <CircularProgress />
        </div>
    </Box>
  );
}
