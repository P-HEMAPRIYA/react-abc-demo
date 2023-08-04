import { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Movie } from "./Movie";

export default function MovieList() {
  const [movielist, setmovielist] = useState([]);
  function getmovies() {
    fetch("https://64c3962467cfdca3b65fef89.mockapi.io/Movie/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setmovielist(data));
  }

  useEffect(() => getmovies(), []);

  const deletemovie = (id) => {
    console.log("deleting...", id);
    fetch("https://64c3962467cfdca3b65fef89.mockapi.io/Movie/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())

      .then(() => getmovies());
  };

  // const Addmovie=()=>{
  //   const jsonData={name,poster,rating,summary},
  //   fetch('https://64c3962467cfdca3b65fef89.mockapi.io/Movie', {

  //   method: 'POST'},

  //   body: JSON.stringify(jsonData)

  //   )
  // }

  useEffect(() => {
    fetch("https://64c3962467cfdca3b65fef89.mockapi.io/Movie")
      .then((res) => res.json())
      .then((data) => setmovielist(data));
  }, []);

  return (
    <div className="Movies">
      {movielist.map((movie, index) => (
        <Movie
          key={index}
          id={movie.id}
          name={movie.name}
          poster={movie.poster}
          summary={movie.summary}
          rating={movie.rating}
          deleteButton={
            <button onClick={() => deletemovie(movie.id)}>Hema delete</button>
          }
        />
      ))}
    </div>
  );
}
