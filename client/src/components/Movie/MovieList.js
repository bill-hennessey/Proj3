import React from "react";
import { Link } from "react-router-dom";
import Comment from "../../pages/Comment";

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start m-6">
          <img
            src={movie.Poster}
            href={`/comment/${movie.Title}`}
            alt={movie.Title}
            onClick={() => console.log("PIC CLICK WORKS")}
          ></img>
          <div>
            <Comment movie={movie} />
          </div>
          <div
            onClick={() => props.handleFavouritesClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
