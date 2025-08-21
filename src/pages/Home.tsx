import React from 'react';
import { Container, Typography, Box, Button, Card, CardMedia, CardContent, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <ShoppingCartIcon sx={{ fontSize: 40, color: '#FF6B6B' }} />,
      title: 'Easy Shopping',
      description: 'Simple and convenient shopping experience'
    },
    {
      icon: <LocalShippingIcon sx={{ fontSize: 40, color: '#4ECDC4' }} />,
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping service'
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: '#45B7D1' }} />,
      title: 'Secure Payment',
      description: 'Safe and secure payment methods'
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 40, color: '#96CEB4' }} />,
      title: '24/7 Support',
      description: 'Always here to help you'
    }
  ];

  const categories = [
    {
      title: 'Electronics',
      image: 'https://shop-image-sample-bucket.s3.ap-northeast-2.amazonaws.com/products/IT/electrics.png',
      description: 'Latest gadgets and devices'
    },
    {
      title: 'Fashion',
      image: 'https://shop-image-sample-bucket.s3.ap-northeast-2.amazonaws.com/products/fashion/fashion.png',
      description: 'Trendy clothing and accessories'
    },
    {
      title: 'Home & Living',
      image: 'https://shop-image-sample-bucket.s3.ap-northeast-2.amazonaws.com/products/living/living.png',
      description: 'Everything for your home'
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: 'url(https://shop-image-sample-bucket.s3.ap-northeast-2.amazonaws.com/products/living/living.png)',
          height: '60vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            background: 'linear-gradient(45deg, rgba(255, 107, 107, 0.9) 30%, rgba(255, 142, 83, 0.9) 90%)',
            backdropFilter: 'brightness(0.7) saturate(0.8)',
          }}
        />
        <Container maxWidth="md" sx={{ position: 'relative', textAlign: 'center' }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Welcome to Our Shopping Mall
          </Typography>
          <Typography variant="h5" paragraph sx={{ mb: 4 }}>
            Discover amazing products at great prices
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/products')}
            sx={{
              mt: 2,
              background: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E53 90%)',
              color: 'white',
              padding: '12px 36px',
              fontSize: '1.1rem',
              '&:hover': {
                background: 'linear-gradient(45deg, #FF8E53 30%, #FF6B6B 90%)',
                transform: 'scale(1.05)',
                transition: 'all 0.2s ease-in-out'
              }
            }}
          >
            Shop Now
          </Button>
        </Container>
      </Paper>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)'
          },
          gap: 4
        }}>
          {features.map((feature, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                p: 3,
                borderRadius: 2,
                backgroundColor: 'white',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  transition: 'all 0.3s ease-in-out',
                  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)'
                }
              }}
            >
              <Box sx={{ mb: 2 }}>
                {feature.icon}
              </Box>
              <Typography variant="h6" gutterBottom sx={{ color: '#2C3E50', fontWeight: 'bold' }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {feature.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Categories Section */}
      <Box sx={{ bgcolor: '#F8F9FA', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4, color: '#2C3E50', fontWeight: 'bold' }}>
            Shop by Category
          </Typography>
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)'
            },
            gap: 4
          }}>
            {categories.map((category, index) => (
              <Card
                key={index}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  borderRadius: 2,
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    transition: 'all 0.3s ease-in-out',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
                  }
                }}
                onClick={() => navigate('/products')}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={category.image}
                  alt={category.title}
                />
                <CardContent sx={{ bgcolor: 'white' }}>
                  <Typography gutterBottom variant="h5" component="h3" sx={{ color: '#2C3E50', fontWeight: 'bold' }}>
                    {category.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {category.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Newsletter Section */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Paper 
          sx={{ 
            p: 4, 
            textAlign: 'center',
            background: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E53 90%)',
            color: 'white',
            borderRadius: 2
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
            Subscribe to Our Newsletter
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            Get the latest updates on new products and special promotions
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 2 }}>
            <Button 
              variant="contained" 
              sx={{ 
                bgcolor: 'white',
                color: '#FF6B6B',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                  transform: 'scale(1.05)',
                  transition: 'all 0.2s ease-in-out'
                }
              }}
            >
              Subscribe Now
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Home; 