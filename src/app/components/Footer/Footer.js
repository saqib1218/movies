"use client";
import React from 'react';
import { Box, Container, Grid, Typography, Link, Stack, useMediaQuery,
  ThemeProvider,
  createTheme } from '@mui/material';
import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
} from '@mui/icons-material';
const theme = createTheme();
const Footer = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Now using theme directly
  return (
    <Box sx={{display:"flex",justifyContent:"center",marginBottom:"20px",  padding: isMobile ? '10px' : '0'}}>

  
      <Box   sx={{
        maxWidth:"1280px",
        width:"100%",color:"white"
      }}>
        {/* App Store Badges - Centered Top */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
          <Stack direction="row" spacing={2}>
            <Box
              component="img"
              src="/assets/images/p-store-logo.svg"
              alt="Get it on Google Play"
              sx={{ height: 40 }}
            />
            {/* <Box
              component="img"
              src="/assets/images/apple.jpg"
              alt="Download on the App Store"
              sx={{ height: 40 }}
            /> */}
          </Stack>
        </Box>

        {/* Main Content */}
        <Grid container>
          <Grid item xs={12} sx={{ width: "100%" }}>
            <Stack spacing={3}>
              {/* Contact */}
              <Typography variant="body1" sx={{ fontSize: '16px' }}>
                Questions? Contact us
              </Typography>
              
              {/* Links Row */}
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 2
              }}>
                {/* First Group - FAQ Links */}
                <Stack spacing={1} sx={{ minWidth: 210 }}>
                  <Link href="#" color="inherit" underline="hover" sx={{ fontSize: '16px' }}>FAQ</Link>
                  <Link href="#" color="inherit" underline="hover" sx={{ fontSize: '16px' }}>Help Center</Link>
                  <Link href="#" color="inherit" underline="hover" sx={{ fontSize: '16px' }}>Account</Link>
                  <Link href="#" color="inherit" underline="hover" sx={{ fontSize: '16px' }}>About Us</Link>
                </Stack>
                
                {/* Second Group - Policy Links */}
                <Stack spacing={1} sx={{ minWidth: 210 }}>
                  <Link href="#" color="inherit" underline="hover" sx={{ fontSize: '16px' }}>Terms of Use</Link>
                  <Link href="#" color="inherit" underline="hover" sx={{ fontSize: '16px' }}>Privacy</Link>
                  <Link href="#" color="inherit" underline="hover" sx={{ fontSize: '16px' }}>Data Policy</Link>
                </Stack>
                
                {/* Third Group - Social Media */}
                <Stack spacing={1} sx={{ minWidth: 210 }}>
                  <Typography variant="body1" sx={{ fontSize: '16px' }}>
                    Follow Us
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <Link href="#" color="inherit">
                      <Instagram fontSize="medium" />
                    </Link>
                    <Link href="#" color="inherit">
                      <Facebook fontSize="medium" />
                    </Link>
                    <Link href="#" color="inherit">
                      <YouTube fontSize="medium" />
                    </Link>
                    <Link href="#" color="inherit">
                      <Twitter fontSize="medium" />
                    </Link>
                  </Stack>
                </Stack>
                
                {/* Fourth Group - Logo and Copyright (aligned to right) */}
                <Stack 
                  spacing={1} 
                  sx={{ 
                    minWidth: 120,
                    marginLeft: 'auto',
                    alignItems: 'flex-end'
                  }}
                >
                  <Box
                    component="img"
                    src="/assets/images/logo-down.svg"
                    alt="Website Logo"
                    sx={{ height: 50 }}
                  />
                  <Typography variant="body2" sx={{ fontSize: '16px' }}>
                    © copyright Film Ghar, All rights reserved.
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      </Box>
  );
};

export default Footer;