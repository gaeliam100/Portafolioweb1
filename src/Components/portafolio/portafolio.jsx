import React,{useState}  from "react";
import seconData from "./seconData";
import './portafolio.css'
import ModalComponent from "../Modal/modal";
  
const Portafolio=()=>{
    const[items,setItems]=useState(seconData);
    const filtrado=(category)=>{
        const variable= seconData.filter((elem)=>{
            return elem.category===category;
        })
        setItems(variable);
    }
    
    return(
        <section className="work container section" id="portafolio">
                <h2 className="section-title"></h2>
                <div className="work-filter">
                    <span className="work-item" onClick={()=>setItems(seconData)}>Todo</span>
                    <span className="work-item" onClick={()=>filtrado('Desarrollo web')}>Html CSS y Javascript</span>
                    <span className="work-item" onClick={()=>filtrado('MVC')} >C#</span>
                    <span className="work-item" onClick={()=>filtrado('laravel')}>PHP</span>
                    <span className="work-item" onClick={()=>filtrado('React')} >React</span>
                </div>
                <div className="work-container grid">
                {items.map((element)=>{
                    const{id,image,title,category,information,evidencia,imagenes}=element;
                    return(
                        <div className="work-card" key={id}>
                            <div className="work-thumbnail">
                                <img src={image} alt="" className="work-image" />
                            < div className="mask"></div>
                            </div>

                            <div className="work-category">{category}</div>
                            <h3 className="work-title">{title}</h3>
                            <ModalComponent estilo="work-button" informacion={information} titulo={title} evidence={evidencia} source={imagenes}>
                            </ModalComponent>
                        </div>
                    )
                })}
                </div>
        </section>
        )
}
export default Portafolio