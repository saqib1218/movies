'use client';
import React, { useEffect, useState, useMemo } from 'react';
import { IconButton } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import './TrendingMovies.css';
import CardMovie from '../Card/CardMovie';
import { motion } from 'framer-motion';

const TrendingMovies = () => {
    const [movies, setMovies] = useState([]);
    const [count, setCount] = useState(0);
    const [isInView, setIsInView] = useState(false);

    // Fetch data from JSON file
    useEffect(() => {
        fetch('/Apis/trendingMovies.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                if (Array.isArray(data)) {
                    setMovies(data);
                } else {
                    console.error('Invalid data format');
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const moviesPerPage = 6;

    const displayedMovies = useMemo(() => {
        return movies.slice(count, count + moviesPerPage);
    }, [movies, count]);

    const handlePrevClick = () => {
        setCount(prev => Math.max(0, prev - 1));
    };

    const handleNextClick = () => {
        setCount(prev => prev + 1);
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
                staggerChildren: 0.1
            }
        }
    };

    const slideVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    if (movies.length === 0) {
        return <div>Loading...</div>;
    }

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
                <motion.h1 variants={slideVariants}>Trending Movies</motion.h1>
                <motion.div className="buttons-container" variants={slideVariants}>
                    <IconButton
                        className="left-button"
                        onClick={handlePrevClick}
                        disabled={count <= 0}
                        aria-label="Previous Movie"
                        component={motion.button}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ArrowLeftIcon />
                    </IconButton>
                    <IconButton
                        className="right-button"
                        onClick={handleNextClick}
                        disabled={count + moviesPerPage >= movies.length}
                        aria-label="Next Movie"
                        component={motion.button}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ArrowRightIcon />
                    </IconButton>
                </motion.div>
            </div>
            
            <motion.div 
                className="movies-container"
                key={count}
                initial="hidden"
                animate="visible"
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.1
                        }
                    }
                }}
            >
                <div className="movies-wrapper">
                    {displayedMovies.map((movie) => (
                        <motion.div 
                            key={movie.id}
                            variants={slideVariants}
                        >
                            <CardMovie movie={movie} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default TrendingMovies;