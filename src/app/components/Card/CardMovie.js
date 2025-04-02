'use client';
import React from 'react';
import { Card, CardContent, CardMedia, Button, Typography, Box } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import './CardMovie.css';

const CardMovie = ({ movie }) => {
    return (
        <Card className='card-movie-main'>
            <Button 
                className='card-movie-button'
                variant="outlined" 
                sx={{
                    position: 'relative',
                    backgroundImage: `url(${movie.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '50px',
                    color: 'white',
                    textTransform: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '&:hover': {
                        backgroundImage: `url(${movie.image})`,
                        opacity: 0.8,
                    },
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.3)', 
                        zIndex: 1,
                    }
                }}
                href={movie.trailer} 
                target="_blank"
            >
                <Box sx={{ zIndex: 2 }} className="trailer-button"> Trailer <PlayArrowIcon/></Box> 
            </Button>
            <CardMedia
                component="img"
                height="84%"
                image={movie.image}
                alt={movie.title}
                sx={{ borderRadius: '10px' }} // Added border radius
            />
        </Card>
    );
};

export default CardMovie;
