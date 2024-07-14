import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SocialFollow from './SocialFollow';
import OldCorigliano from './components';

export default function App() {
  return (
    <Container maxWidth="sl">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI Preact example
        </Typography>
        <SocialFollow />
        <OldCorigliano/>
      </Box>
    </Container>
  );
}