import { Container } from "react-bootstrap";
import React, { useState } from 'react'
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import MovieDetails from './components/MovieDetails'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="font color-body ">
      <NavBar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList />} />

            <Route path="/movie/:id" element={<MovieDetails />} />

          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
