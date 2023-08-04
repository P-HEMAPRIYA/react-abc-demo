import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import { useParams } from "react-router-dom";

export function MovieDetails() {
  const [abc, setmovielist] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();
  // const abc = movielist[id];
  useEffect(() => {
    fetch("https://64c3962467cfdca3b65fef89.mockapi.io/Movie/" + id)
      .then((res) => res.json())
      .then((data) => setmovielist(data));
  }, []);

  return (
    <div className="Movie">
      <iframe
        width="1311"
        height="649"
        src={abc.trailer}
        title="VIKRAM - Official Trailer | Kamal Haasan | VijaySethupathi, FahadhFaasil | LokeshKanagaraj | Anirudh"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="spec">
        <h2>{abc.name}</h2>
        <p> ⭐ {abc.rating}</p>
      </div>

      <p>{abc.summary}</p>

      <IconButton
        aria-label="Go back"
        onClick={() => navigate(-1)}
        sx={{ color: "blue" }} // Custom style to set the color to blue
      >
        <ArrowBackIcon />
      </IconButton>
    </div>
  );
}
