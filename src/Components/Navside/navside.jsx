import React,{useState} from "react";
import "./sidebar.css";
import Profile from '../../assets/avatar-2.svg'

const Nabvar=()=>{
    const [toggle,showMenu]=useState(false);
    return(
        <>
            <aside className={toggle ? "aside show-menu":"aside"}>
            <a href="#home" className="nav-logo">
            <img src={Profile} alt="" className="img"/>
            </a>

            <nav className="navv">
            <div className="navv-menu">
                    <ul className="navv-list">
                        <li className="navv-item">
                            <a href="#home" className="navv-link">
                                <i className="icon-home"></i>
                            </a>
                        </li>

                        <li className="navv-item">
                            <a href="#about" className="navv-link">
                            <i className="icon-puzzle"></i>
                            </a>
                        </li>
                        <li className="navv-item">
                            <a href="#resume" className="navv-link">
                            <i className="icon-book-open"></i>
                            </a>
                        </li>
                        <li className="navv-item">
                            <a href="#portafolio" className="navv-link">
                            <i className="icon-folder"></i>
                            </a>
                        </li>
                        <li className="navv-item">
                            <a href="#contact" className="navv-link">
                            <i className="icon-call-in"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="nav-footer">
                <span className="copyright">
                    &copy;2023-2024
                </span>
            </div>
        </aside>

        <div className={toggle?"nav-toggle nav-toggle-open":"nav-toggle"} onClick={()=>showMenu(!toggle)}>
            <i className="icon-menu"></i>
        </div>
        </>
    )
}
export default Nabvar