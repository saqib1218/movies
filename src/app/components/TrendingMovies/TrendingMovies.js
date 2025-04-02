'use client';
import React, { useEffect, useState, useMemo } from 'react';
import { IconButton } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import './TrendingMovies.css';
import CardMovie from '../Card/CardMovie'; 

const TrendingMovies = () => {
    const [movies, setMovies] = useState([]);
    const [count, setCount] = useState(0);

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
        setCount(count > 0 ? count - 1 : count); 
    };

    // Handle Right Button Click
    const handleNextClick = () => {
        setCount(count + 1);
    };

    if (movies.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="card-slider">
            <div className="card-slider-container">
                <h1>Trending Movies</h1>
                <div className="buttons-container">
                    <IconButton
                        className="left-button"
                        onClick={handlePrevClick}
                        disabled={count <= 0} 
                        aria-label="Previous Movie"
                    >
                        <ArrowLeftIcon />
                    </IconButton>
                    <IconButton
                        className="right-button"
                        onClick={handleNextClick}
                        disabled={count + moviesPerPage >= movies.length} 
                        aria-label="Next Movie"
                    >
                        <ArrowRightIcon />
                    </IconButton>
                </div>
            </div>
            <div className="movies-container">
                <div className="movies-wrapper">
                    {displayedMovies.map((movie) => (
                        <CardMovie key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrendingMovies;
