"use client";
import React, { useEffect, useState } from 'react';
import { IconButton, Typography } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import './MostWatched.css';  
import CardMovie from '../Card/CardMovie'; 
import { motion } from 'framer-motion';

const MostWatched = () => {
    const [movies, setMovies] = useState([]);
    const [count, setCount] = useState(0);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        fetch('/Apis/mostWatched.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setMovies(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const moviesPerPage = 6;
    const displayedMovies = movies.slice(count, count + moviesPerPage);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.div 
            className="card-slider"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            onViewportEnter={() => setIsInView(true)}
            onViewportLeave={() => setIsInView(false)}
            viewport={{ margin: "-100px" }}
            variants={containerVariants}
        >
            <div className="card-slider-container">
                <motion.div variants={itemVariants}>
                    <Typography variant="h5" className="h1">
                        Most Watched Film Ghar
                    </Typography>
                </motion.div>
                <motion.div className="buttons-container" variants={itemVariants}>
                    <IconButton
                        className="left-button"
                        onClick={() => setCount(Math.max(0, count - 1))}
                        disabled={count <= 0}
                        component={motion.button}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ArrowLeftIcon />
                    </IconButton>
                    <IconButton
                        className="right-button"
                        onClick={() => setCount(count + 1)}
                        disabled={count + moviesPerPage >= movies.length}
                        component={motion.button}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ArrowRightIcon />
                    </IconButton>
                </motion.div>
            </div>
            
            <div className="movies-container">
                <div className="movies-wrapper">
                    {displayedMovies.map((movie, index) => (
                        <motion.div 
                            key={movie.id}
                            variants={itemVariants}
                            custom={index}
                        >
                            <CardMovie movie={movie} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default MostWatched;