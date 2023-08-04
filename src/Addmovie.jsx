import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Movie } from "./Movie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Addmovie() {
  const [name, setname] = useState("name");
  const [poster, setposter] = useState("poster");
  const [summary, setsummary] = useState("summary");
  const [rating, setrating] = useState("rating");

  const [movielist, setmovielist] = useState([]);
  const navigate = useNavigate();

  const addmovie = () => {
    const jsonData = {
      name,
      poster,
      summary,
      rating,
    };
    fetch("https://64cc7dce2eafdcdc8519e155.mockapi.io/movies/", {
      method: "POST",
      body: JSON.stringify(jsonData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/movies"));
  };

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
      <Button variant="contained" onClick={() => addmovie()}>
        Add Movie
      </Button>
    </div>
  );
}
