"use client";
import React, { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import './MostWatched.css';  
import CardMovie from '../Card/CardMovie'; 

const MostWatched = () => {
    const [movies, setMovies] = useState([]);

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

    const [count, setCount] = useState(0);

    const moviesPerPage = 6;
    const displayedMovies = movies.slice(count, count + moviesPerPage);

    return (
        <div className="card-slider">
            <div className="card-slider-container">
                <h1>Most Watched Film Ghar</h1>
                <div className="buttons-container">
                    <IconButton
                        className="left-button"
                        onClick={() => setCount(count - 1)}
                        disabled={count <= 0} // Disable left button at the beginning
                    >
                        <ArrowLeftIcon />
                    </IconButton>
                    <IconButton
                        className="right-button"
                        onClick={() => setCount(count + 1)}
                        disabled={count + moviesPerPage >= movies.length} // Disable right button at the end
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

export default MostWatched;
