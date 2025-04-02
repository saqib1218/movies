import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import styles from './About.module.css';

const About = () => {
  const features = [
    {
      icon: '/assets/images/Icon 1.svg',
      title: 'Wide Selection',
      description: 'Enjoy movie on the every devices Watch your favorite movies on mobiles, Tablets and TV.'
    },
    {
      icon: '/assets/images/icon 2.svg',
      title: 'High Quality',
      description: '4K Ultra HD streaming with Dolby Atmos sound'
    },
    {
      icon: '/assets/images/icon 3.svg',
      title: 'Watch Anywhere',
      description: 'Stream on all your devices anytime, anywhere'
    },
    {
      icon: '/assets/images/icon 4.svg',
      title: '24/7 Support',
      description: 'Our team is always ready to help you'
    }
  ];

  return (
    <Box className={styles.container}>
      <Box className={styles.centerDiv}>
        <Typography variant="h2" component="h1" className={styles.heading}>
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
                    className={styles.icon}
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