import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} href={`/comment/${movie.Title}`} alt={movie.Title} onClick={() => console.log('PIC CLICK WORKS')}></img>
					<Link to={`/comment/${movie.Title}`}>Comment</Link>
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<FavouriteComponent />
					</div>

				</div>
			))}
		</>
	);
};

export default MovieList;
