import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import styles from './About.module.css';

const About = () => {
  const features = [
    {
      icon: '/assets/images/Icon 1.svg',
      title: 'Enjoy movie on the every devices',
      description: 'Watch your favorite movies on Mobile, Tablet, TV with Chromecast*, Airplay support*.'
    },
    {
      icon: '/assets/images/icon 2.svg',
      title: 'Manage Device',
      description: 'You can add or remove device anytime from your Video app manage device tab. If you need more devices, please updrade your plan.'
    },
    {
      icon: '/assets/images/icon 3.svg',
      title: 'Easy Payment',
      description: 'Pay with your VISA, Mastercard, Esewa, Khalti and Apple In app purchase.'
    },
    {
      icon: '/assets/images/icon 4.svg',
      title: 'Watch from Everywhere',
      description: 'It is available for global customer but charges and fees may different due to the taxation system of each country.'
    }
  ];

  return (
    <Box className={styles.container}>
      <Box className={styles.centerDiv}>
        <Typography variant="h2" sx={{fontWeight:"bold"}} className={styles.heading}>
          Why Choose Film Ghar?
        </Typography>

        <Grid container spacing={4} justifyContent="center" className={styles.gridContainer}>
          {features.map((feature, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card className={styles.card}>
                <CardContent>
                  <img 
                    src={feature.icon} 
                    alt={feature.title}
                    className={`${styles.icon} ${index === 0 ? styles.firstIcon : ''}`}
                  />
                  <Typography variant="h5" component="h3" className={styles.title}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" className={styles.description}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default About;