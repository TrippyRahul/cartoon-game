import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import Game from "./pages/game/Game";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Blog from "./pages/blog/Blog";
import Games from "./pages/games/Games";

const App = () => {
  return (
    <main className="main">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:gameId" element={<Game />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/:gameId" element={<Blog />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
