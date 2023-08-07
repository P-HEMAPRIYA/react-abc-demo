import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Movie } from "./Movie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export function Addmovie() {
  const navigate = useNavigate();
  const formValidationSchema = Yup.object().shape({
    Name: Yup.string().min(10),
    Poster: Yup.string().min(20),
    Summary: Yup.string().min(10),
    Rating: Yup.number().min(1).max(10),
    Trailer: Yup.string().min(20),
  });

  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        name: "",
        poster: "",
        summary: "",
        rating: "",
        trailer: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: (values) => {
        fetch("https://64cc7dce2eafdcdc8519e155.mockapi.io/movies/", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        }).then(() => navigate("/movies"));
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        type="text"
        placeholder="Movie name"
        required
      />
      {touched.name && errors.name ? errors.name : null}
      <TextField
        name="poster"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.poster}
        type="text"
        placeholder="Poster URL"
        required
      />
      {touched.poster && errors.poster ? errors.poster : null}
      <TextField
        name="summary"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.summary}
        type="text"
        placeholder="Movie summary"
        required
      />
      {touched.summary && errors.summary ? errors.summary : null}
      <TextField
        name="rating"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.rating}
        type="text"
        placeholder="Movie rating"
        required
      />
      {touched.rating && errors.rating ? errors.rating : null}
      <TextField
        name="trailer"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.trailer}
        type="text"
        placeholder="Movie trailer"
        required
      />
      {touched.trailer && errors.trailer ? errors.trailer : null}
      <button type="submit">Add Movie</button>
    </form>
  );
}
