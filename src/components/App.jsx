import React, { useState, useEffect } from "react";
import "../../src/App.css";
import Header from "./Header";
import Picture from "./Picture";
import axios from "axios";

function App() {
  const [picture, setPicture] = useState([]);

  const api_key = "b5zTGWrGAYLv64Pw6us1E07Gn5XDIRbiykVhGHQl";

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`)
      .then(res => setPicture(res.data));
  }, []);

  return (
    <div className="App">
      <Header />
      <Picture data={picture} />
    </div>
  );
}

export default App;

// b5zTGWrGAYLv64Pw6us1E07Gn5XDIRbiykVhGHQl
