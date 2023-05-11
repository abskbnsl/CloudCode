import React from "react";
import image from "./images/guide-img.jpg";
import background from "./images/guide_bg.jpg";
import "./Guide.css";
export const Guide = () => {
  return (
    
    <div class="head">
    <section class="hero-area overlay" style={{backgroundImage: `url(${background})`}}>
     <div class="block">
    
        <img src={image} />
       <a href="https://www.w3schools.com/html/" class="btn btn-transparent smooth-scroll">Click me to learn HTML</a>
       <a href="https://www.w3schools.com/css/" class="btn btn-transparent smooth-scroll">Click me to learn CSS</a>
       <a href="https://www.w3schools.com/js/" class="btn btn-transparent smooth-scroll">Click me to learn JavaScript</a>
     </div>
   </section>
    </div>
 
  );
};