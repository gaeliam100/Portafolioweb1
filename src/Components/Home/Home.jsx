import React from "react";
import './Home.css'
import NavSocial from "./navSocials";
import Profile from '../../assets/avatar-2.svg'
import ScrollDown from "./scrollDown";
const Home=()=>{
 return(
    <section className="home container" id="home">
      <div className="intro">
         <img src={Profile} alt="" className="home-img" />
         <h1 className="home-name">Gael Iván</h1>
         <div className="flex"> 
         <span className="home-education">Soy un programador</span>
         <a href="#contact" className="btnn">Contáctame</a>
         </div>

         <ScrollDown/>

      </div>
    </section>
 )   
}

export default Home