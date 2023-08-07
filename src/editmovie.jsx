import React from "react";
import { useParams } from "react-router-dom";

const EditMovie = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found.</div>;
  }

  // You can now display the movie details in an editable form.
  // For example:
  return (
    <div>
      <h1>Edit Movie: {movie.title}</h1>
      {/* Your form inputs go here */}
    </div>
  );
};

export default EditMovie;
