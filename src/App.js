import React from "react";
import BlogInformation from "./BlogInformation";
import myHOCFunction from "./myHOCFunction";


import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BlogInformation author="Adhithi" article="React Guide" />
      <myHOCFunction />
      
      
    </div>
    
    
  );
}
