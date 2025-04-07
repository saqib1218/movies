"use client";
import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  useMediaQuery,
  ThemeProvider,
  createTheme 
} from '@mui/material';
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';

// Create a default theme
const theme = createTheme();

const FAQ = () => {
  const [expanded, setExpanded] = useState(null);
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Now using theme directly

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : null);
  };

  const faqItems = [
    {
      id: 'disclaimer',
      title: 'Disclaimer',
      content: 'Film Ghar provides content for entertainment purposes only. We do not guarantee the accuracy, completeness, or usefulness of any content.'
    },
    {
      id: 'subscription',
      title: 'Start Subscription',
      content: 'You can start your subscription by visiting our Plans page and selecting your preferred package. Payment will be required immediately.'
    },
    {
      id: 'payment',
      title: 'Payment Method',
      content: 'We accept all major credit cards, PayPal, and UPI payments. All transactions are secured with 256-bit SSL encryption.'
    },
    {
      id: 'refund',
      title: 'Refund Policy',
      content: 'We offer a 7-day money-back guarantee for new subscriptions. Refunds will be processed within 5-7 business days.'
    },
    {
      id: 'devices',
      title: 'Multiple Devices Simultaneously',
      content: 'You can stream on up to 4 devices simultaneously with our Premium plan. Basic plan allows only 1 device at a time.'
    }
  ];

  return (
    <Box sx={{
      marginBottom:"40px",
      display:"flex",
      justifyContent:"center",
    
      background: 'transparent'
    }}>
        <Box
         sx={{
            maxWidth:"1280px",
            width:"100%",
            padding: isMobile ? '10px' : '0' // Added responsive padding
          }}
        >

       
      <Typography 
        variant="h2" 
        sx={{
          color: 'orange',
          fontWeight: 'bold',
      
          marginBottom: '2rem',
          fontSize:"18px"
        }}
      >
        Frequently Asked Questions
      </Typography>

      <Box sx={{ 
        
        margin: '0 auto',
        background: 'transparent'
      }}>
        {faqItems.map((item) => (
          <Accordion 
            key={item.id}
            expanded={expanded === item.id}
            onChange={handleChange(item.id)}
            sx={{
              marginBottom: '1rem',
              borderRadius: '16px 16px',
              border: '1px solid grey',
              boxShadow: 'none',
              background: 'transparent',
              borderTopLeftRadius: '16px !important',
                borderTopRightRadius: '16px !important',
                borderBottomLeftRadius:"16px !important",
                borderBottomRightRadius:"16px !important",
              '&:before': {
                display: 'none',
                borderRadius: '16px !important',
               
              },
              '&.Mui-expanded': {
                margin: '16px 0px',
                borderRadius: '16px !important',
               
                 

              },
            }}
          >
            <AccordionSummary
              expandIcon={expanded === item.id ? 
                <RemoveIcon sx={{ color: 'grey' }} /> : 
                <AddIcon sx={{ color: 'grey' }} />
              }
              sx={{
                background: 'transparent',
                '& .MuiAccordionSummary-content': {
                  margin: '12px 0'
                }
              }}
            >
              <Typography sx={{ 
                fontWeight: '500', 
                color:'white',
                fontSize: '22px'
              }}>
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ 
              background: 'transparent',
              padding: '0 16px '
            }}>
              <Typography sx={{ 
                color: 'white', 
                fontSize:"18px",
                lineHeight: '1.6',
                marginBottom:"20px"
              }}>
                {item.content}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      </Box>
    </Box>
  );
};

export default FAQ;