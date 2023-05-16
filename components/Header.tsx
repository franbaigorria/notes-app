import { FC } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
} from '@mui/material';

export const Header: FC = () => {
  return (
    <AppBar position="static" color='inherit'>
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{ display: 'grid', placeItems: 'center' }}>
          <Typography className='title' style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>
            Mis Notas
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}