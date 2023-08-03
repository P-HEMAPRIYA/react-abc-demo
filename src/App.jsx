import React from "react";
import "./App.css";

// import { MovieCard } from "./MovieCard";

import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import MovieList from "./MovieCard";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MovieList" element={<MovieList />} />
      </Routes>
    </div>
  );
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
