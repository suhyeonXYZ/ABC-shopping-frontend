import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        background: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E53 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 107, .3)'
      }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <ShoppingCartIcon sx={{ mr: 1 }} />
          <Typography variant="h6" component="div">
            Shopping Mall
          </Typography>
        </Box>
        <Box>
          <Button 
            color="inherit" 
            component={RouterLink} 
            to="/"
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transform: 'scale(1.05)',
                transition: 'all 0.2s ease-in-out'
              }
            }}
          >
            Home
          </Button>
          <Button 
            color="inherit" 
            component={RouterLink} 
            to="/products"
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transform: 'scale(1.05)',
                transition: 'all 0.2s ease-in-out'
              }
            }}
          >
            Products
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 