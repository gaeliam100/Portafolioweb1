import React from "react";
import './resume.css'
import Data from "./data";
import Card from "./Card";
const Resume=()=>{
    return(
<section className="resume container" id="resume">
<h2 className="section-title">Experiencia</h2>
<div className="resume-container grid">
    <div className="timeline grid">
    {Data.map((item,index)=>{
        if(item.category==='education'){
            return(
                <Card key={index} icon={item.icon} title={item.title} 
                year={item.year} desc={item.desc} />
            )
        }
    })}
    </div>
</div>
</section>
    )
}
export default Resume;