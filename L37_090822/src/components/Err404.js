import React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Err404() {
  return (
    <div className='not-found'>
      <Typography variant='h2'>Page not found</Typography>
      <Link href='/'>
        <Typography variant='h4'>HOME</Typography>
      </Link>
    </div>
  );
}
