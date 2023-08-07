import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export function Movie({
  name,
  poster,
  summary,
  rating,
  id,
  deleteButton,
  editbutton,
}) {
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
      {deleteButton}
      {editbutton}
      {hide == false ? <p>{summary}</p> : " "}
    </div>
  );
}
