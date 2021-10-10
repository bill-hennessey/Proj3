import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Avatar from '@mui/material/Avatar';
import { Icon } from '@iconify/react';
import {pink} from '@mui/material/colors'

import MovieList from '../components/Movie/MovieList';
import MovieListHeading from '../components/Movie/MovieListHeading';
import SearchBox from '../components/Movie/SearchBox';
import { addFavourites } from '../components/Movie/AddFavourites';
import RemoveFavourites from '../components/Movie/RemoveFavourites';

const styles = {
	bottomMovies: {
		marginBottom: '5%'
	},
	buttonholder:{
		position: 'absolute'
	}
}

export const Movie = () => {
	const [movies, setMovies] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
		const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=95c5c4f`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	return (
		<>
		<Avatar  sx={{ m: 1, bgcolor: pink[500] }}>
            <Icon icon="mdi:cow" />
        </Avatar>

		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading={'Movies'} />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
	
			<div className='row'>
				<MovieList
					movies={movies}
					handleFavouritesClick={addFavouriteMovie}
					favouriteComponent={addFavourites}
				/>
			</div>
			<div style={styles.buttonholder}>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Favourites' />
			</div>
			<div className='row' style={styles.bottomMovies}>
				<MovieList
					movies={favourites}
					handleFavouritesClick={removeFavouriteMovie}
					favouriteComponent={RemoveFavourites}
				/>
			</div>
		</div>
		</div>
	</>
	);
};
