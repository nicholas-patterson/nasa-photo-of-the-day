import React, { useState, useEffect } from "react";
import "../../src/App.css";
import Header from "./Header";
import Video from "./Video";
import axios from "axios";
import VideoDetails from "./VideoDetails";

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
      <Video data={picture} />
      <VideoDetails details={picture} />
    </div>
  );
  console.log(picture);
}

export default App;

// b5zTGWrGAYLv64Pw6us1E07Gn5XDIRbiykVhGHQl
