import React from "react";
import { Link } from "react-router-dom";
import Comment from "../../pages/Comment";
import auth from '../../utils/auth';


const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  const isLoggedIn = auth.loggedIn()
  console.log(isLoggedIn)

  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container d-flex flex-column justify-content-start m-3">
          <img
            src={movie.Poster}
            href={`/comment/${movie.Title}`}
            alt={movie.Title}
            onClick={() => console.log("PIC CLICK WORKS")}
          ></img>

          <div
            
            className="overlay d-flex align-items-center justify-content-center"
          >
            <div onClick={() => props.handleFavouritesClick(movie)}>
            <FavouriteComponent />
            </div>
            {isLoggedIn ? <Comment movie={movie} /> : <div /> }
          </div>
                      


        </div>
      ))}
    </>
  );
};

export default MovieList;
