'use client';
import React, { useEffect, useState, useMemo } from 'react';
import { IconButton } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import './CardSlider.css';  
import CardMovie from '../Card/CardMovie'; 

const CardSlider = () => {
    const [movies, setMovies] = useState([]);
    const [count, setCount] = useState(0);

    // Fetch data from JSON file
    useEffect(() => {
        fetch('/Apis/movies.json')
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

    // Movies per page limit
    const moviesPerPage = 6;

    // Memoized value for displayed movies
    const displayedMovies = useMemo(() => {
        return movies.slice(count, count + moviesPerPage);
    }, [movies, count]);

    // Handle Left Button Click
    const handlePrevClick = () => {
        setCount(count > 0 ? count - 1 : count); // Prevent going negative
    };

    // Handle Right Button Click
    const handleNextClick = () => {
        setCount(count + 1);
    };

    // Edge case for empty movies data
    if (movies.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="card-slider">
            <div className="card-slider-container">
                <h1>Film Ghar Collection</h1>
                <div className="buttons-container">
                    <IconButton
                        className="left-button"
                        onClick={handlePrevClick}
                        disabled={count <= 0} // Disable left button at the beginning
                        aria-label="Previous Movie"
                    >
                        <ArrowLeftIcon />
                    </IconButton>
                    <IconButton
                        className="right-button"
                        onClick={handleNextClick}
                        disabled={count + moviesPerPage >= movies.length} // Disable right button at the end
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

export default CardSlider;
