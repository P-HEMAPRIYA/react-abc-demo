import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function MovieList() {
  const [name, setname] = useState("name");
  const [poster, setposter] = useState("poster");
  const [summary, setsummary] = useState("summary");
  const [rating, setrating] = useState("rating");

  const [movielist, setmovielist] = useState([]);
  useEffect(() => {
    fetch("https://64c3962467cfdca3b65fef89.mockapi.io/Movie")
      .then((res) => res.json())
      .then((data) => setmovielist(data));
  }, []);

  return (
    <div>
      <TextField
        ///property binding
        onChange={(event) => setname(event.target.value)}
        type="text"
        label="name"
        value={name}
      />

      <TextField
        ///property binding
        onChange={(event) => setposter(event.target.value)}
        type="text"
        label="poster"
      />

      <TextField
        ///property binding
        onChange={(event) => setrating(event.target.value)}
        type="text"
        label="rating"
      />

      <TextField
        ///property binding

        onChange={(event) => setsummary(event.target.value)}
        type="boolean"
        label="summary"
      />

      <Button
        variant="contained"
        onClick={(event) =>
          setmovielist([
            ...movielist,
            {
              name: name,

              poster: poster,

              rating: rating,

              summary: summary,
            },
          ])
        }
      >
        Add Movie
      </Button>

      <div className="Movies">
        {movielist.map((movie, index) => (
          <Movie
            key={index}
            id={movie.id}
            name={movie.name}
            poster={movie.poster}
            summary={movie.summary}
            rating={movie.rating}
          />
        ))}
      </div>
    </div>
  );
}

function Movie({ name, poster, summary, rating, id }) {
  const [hide, sethide] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="Movie">
      <img src={poster} alt={name} />
      <div className="spec">
        <h2>
          {name}- {id}
        </h2>
        <p> ⭐ {rating}</p>
      </div>
      <button
        onClick={() => {
          sethide(hide == true ? false : true);
        }}
      >
        toggle Summary {hide ? <ExpandMoreIcon /> : <ExpandLessIcon />}
      </button>
      <IconButton
        aria-label="details"
        onClick={() => navigate("/movies/" + id)}
      >
        <InfoIcon />
      </IconButton>

      {hide == false ? <p>{summary}</p> : " "}
    </div>
  );
}
