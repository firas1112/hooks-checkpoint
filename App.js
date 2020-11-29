import { cleanup } from "@testing-library/react";
import React, {useState,useEffect} from "react";
import "./App.css";
import{movieData} from "./constants/data"
function App() {
  const [movies,setMovies]=useState(movieData)
  return<div>
    
  </div>
}

export default App;

