import React from "react";
import './about.css'
import Profile from '../../assets/avatar-2.svg'
import { CCarousel } from '@coreui/react'
import { CCarouselItem } from '@coreui/react'
import { CImage } from "@coreui/react";
import CV from '../../assets/Curriculum.pdf'
const About=()=>{
    const handleDescargarCV = () => {
        const link = document.createElement('a');
        link.href = CV;
        link.download = 'CLGvitae.pdf';
        link.click();
      };
    return(
<section id="about" className="section container section">
<h2 className="section-title">Sobre mí</h2>
<div className="about-container grid">
    <img className="about-img" src={Profile} alt="" />
    <div className="about-data grid">
        <div className="about-info">
            <p className="about-description">
            Soy Gael Iván, un desarrollador jr de Ciudad de México. tengo algo de  experiencia en  Desarrollo web, y tambien soy bueno con .Net, pero aprendo fácil otras tecnologias.
            </p>
            <a href="" className="btnn" onClick={handleDescargarCV} >Descargar CV</a>
        </div>
        <CCarousel interval={1800}>
  <CCarouselItem>
  <div className="about-skills grid">
            <h4>Habilidades front-end</h4>
            <div className="skills-data">
    <div className="skills-titles">
        <h3 className="skills-name">HTML</h3>
        <span className="skills-number " >45%</span>
    </div>
    <div className="skills-bar">
        <span className="skills-percentage development "></span>
    </div>
            </div>
            <div className="skills-data">
    <div className="skills-titles">
        <h3 className="skills-name">CSS</h3>
        <span className="skills-number">30%</span>
    </div>
    <div className="skills-bar">
        <span className="skills-percentage net"></span>
    </div>
            </div>
            <div className="skills-data">
    <div className="skills-titles">
        <h3 className="skills-name">Javascript</h3>
        <span className="skills-number">60%</span>
    </div>
    <div className="skills-bar">
        <span className="skills-percentage scriptjs"></span>
    </div>
            </div>
        </div>
  </CCarouselItem>
  <CCarouselItem>
    <div className="about-skills grid">
            <h4>Habilidades Backend-end</h4>
            <div className="skills-data">
    <div className="skills-titles">
        <h3 className="skills-name">C#</h3>
        <span className="skills-number " >50%</span>
    </div>
    <div className="skills-bar">
        <span className="skills-percentage sharp "></span>
    </div>
            </div>
            <div className="skills-data">
    <div className="skills-titles">
        <h3 className="skills-name">SQL Server</h3>
        <span className="skills-number">40%</span>
    </div>
    <div className="skills-bar">
        <span className="skills-percentage sqls"></span>
    </div>
            </div>
            <div className="skills-data">
    <div className="skills-titles">
        <h3 className="skills-name">PHP Laravel </h3>
        <span className="skills-number">20%</span>
    </div>
    <div className="skills-bar">
        <span className="skills-percentage laravel"></span>
    </div>
            </div>
        </div>
  </CCarouselItem>
</CCarousel>

    </div>

</div>
</section>
    )
}
export default About