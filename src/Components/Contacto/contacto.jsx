import React from "react";
import './contacto.css'
const Contact =()=>{
    return(
        <section className="contact container section" id="contact">
            <h2 className="section-title">Ponerse en contacto</h2>
    <div className="contact-container grid">
        <div className="contact-info">
            <h3 className="contact-title">Hablemos!</h3>
            <p className="contact-details">Envía un correo 🚀</p>
         </div>
         <form action="" className="contact-form">
            <div className="contact-form-group">
            <div className="contact-form-div">
                <input type="text" name="" id="" className="contact-form-input" 
                placeholder="Ingresa tú nombre" />
            </div>
            <div className="contact-form-div">
                <input type="text" name="" id="" className="contact-form-input correo" 
                placeholder="Ingresa tú Correo" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" />
            </div>
            </div>
            <div className="contact-form-div">
                <input type="text" name="" id="" className="contact-form-input" 
                placeholder="Ingresa el Asunto" />
            </div>
            <div className="contact-form-div contact-form-area">
                  <textarea name="" id="" cols="30" rows="10" className="contact-form-input contact-form-area" 
                   placeholder="Escribe tu mensaje"></textarea>
            </div>
            <button className="btnn">Enviar mensaje</button>
        </form>
        </div>
        </section>
    )
}

export default Contact