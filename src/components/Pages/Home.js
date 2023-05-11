import React from "react";
import "./Home.css";
import background from "./images/hero-area.jpg";
import logo from "./images/home-img.jpg";
export const Home = () => {
  return (
    <div class="head">
  <section class="hero-area overlay" style={{backgroundImage: `url(${background})`}}>
 	<div class="block">
   <div class="content">
    
 		<h1> The best place to learn, test and develop front-end code. </h1>
 		<h1>Experience the new reality !!</h1>
 		<p>CloudCode provides coding platform for frontend designers and developers. Build and test a website, show off your work, build test cases to learn and debug and find inspiration.</p>
       </div>
      <img src={logo} />
 		<a href="" class="btn btn-transparent smooth-scroll">Sign up for free</a>
 	</div>
 </section>
    </div>
  );
};
