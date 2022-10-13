import "./App.css";
import React from "react";
import Home from "./components/Home";
import logo from "./images/logo.png";
import HomeIcon from "./images/home-icon.svg";
import MovieIcon from "./images/movie-icon.svg";
import originalIcon from "./images/original-icon.svg";
import searchIcon from "./images/search-icon.svg";
import seriesIcon from "./images/series-icon.svg";
import watchlistIcon from "./images/watchlist-icon.svg";

function App() {
  

  return (
    <div className="App">
      <div className="Header">
        <img alt="logo" height="50px" src={logo} />

        <div className="showNav">
            <div className="showNavItem">
              <img alt="nav" src={HomeIcon} />
              <span>Home</span>
            </div>
            <div className="showNavItem">
              <img alt="nav" src={searchIcon} />
              <span>SEARCH</span>
            </div>
            <div className="showNavItem">
              <img alt="nav" src={watchlistIcon} />
              <span>WATCHLIST</span>
            </div>
            <div className="showNavItem">
              <img alt="nav" src={originalIcon} />
              <span>ORIGINALS</span>
            </div>
            <div className="showNavItem">
              <img alt="nav" src={MovieIcon} />
              <span>MOVIES</span>
            </div>
            <div className="showNavItem">
              <img alt="nav" src={seriesIcon} />
              <span>MOVIES</span>
            </div>
          </div>
      </div>
      <Home />
    </div>
  );
}

export default App;
