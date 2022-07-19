import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Container } from "@mui/system";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";

import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";


import "./App.css";



function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Container>
          <Routes>
            <Route exact path="/" element={<Trending />} />
            <Route  path="/movies" element={<Movies />} />
            <Route  path="/series" element={<Series />} />
            <Route path="/search" element={<Search />} />
          </Routes>
          
        </Container>

          <SimpleBottomNavigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
