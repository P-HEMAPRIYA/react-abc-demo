import React from "react";
import "./App.css";

// import { MovieCard } from "./MovieCard";

import { Routes, Route, Link, useParams } from "react-router-dom";
import "./App.css";
import MovieList from "./MovieCard";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>

      <ol>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/movies">MovieList</Link>
        </li>
        <li>
          <Link to="*">not found</Link>
        </li>
        {/* <li>
          <Link to="/movies/id">details</Link>
        </li> */}
      </ol>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/movies/:id" element={<MovieDetails />} />

        <Route path="*" element={<PageNotFound />} />
        {/* <Route path="/movies:id" element={<MovieList />} /> */}
      </Routes>
    </div>
  );
}

function PageNotFound() {
  return <h1>404 error Page not found</h1>;
}

function MovieDetails() {
  const { id } = useParams();
  return <h1>Movie details -{id}</h1>;
}

function Home() {
  return (
    <div>
      <h1>hello hema</h1>
    </div>
  );
}

export function ColorBox({ clr }) {
  const styles = {
    height: "25px",
    width: "250px",
    background: clr,
    marginTop: "5px",
  };
  return <div style={styles}></div>;
}
