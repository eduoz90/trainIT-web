import React from 'react';
import '../css/Nav.css';
import train  from '../images/train.png'
import chevron from '../svg/chevron-down.svg'
import hamburger from '../svg/hamburger-menu.svg'



export const Navbar = () =>{


  
    return(
  
     
     

        <>
       
         
        <header  className='header'>
            
        <div className="title">
          
          <div className="container-img">
          <img  src={train} className='imagen'/>
            <h3>trainIT Systems</h3>
          </div>
          
          </div>
            
            <input type="checkbox" id="toggle"/>
            <label for="toggle"><img  className="hamburger-m" src={hamburger} alt="menu"/></label>
        
          <nav className="menu">
                   <div className="list-container">
                   <ul className="menu__ul">
                        <li className='menu__item'><a href="#" className='menu__link'>INICIO</a></li>
                        <li className='menu__item container-menu'><a href="#" className='menu__link'>EQUIPO
                        <img  className="chevron" src={chevron}/>
                        </a>
                        <ul className='submenu'>
                            <li className='menu__item'><a href="#" className='menu__link'>Sistemas</a></li>
                            <li className='menu__item'><a href="#" class="menu__link">Marketing</a></li>
                            <li className='menu__item'><a href="#" class="menu__link">Ventas</a></li>
                            <li className='menu__item'><a href="#" class="menu__link">Contabilidad</a></li>
                            <li className='menu__item'><a href="#" class="menu__link">Administracción</a></li>
                        </ul>
                        </li>
                        <li className='menu__item container-menu'><a href="#" className='menu__link'>INFO
                        <img  className="chevron" src={chevron}/>
                        </a>
                        <ul className="submenu">
                        <li className='menu__item'><a href="#" className='menu__link'>¿Quienes somos?</a></li>
                        <li className='menu__item'><a href="#" className='menu__link'>¿Qué hacemos?</a></li>
                        </ul>
                       
                        </li>
                       <li className='menu__item container-menu'><a href="#" className='menu__link'>COMUNIDAD
                       <img  className="chevron" src={chevron}/>
                       </a>
                       <ul className="submenu">
                        <li className='menu__item'><a href="#" className='menu__link'>Novedades</a></li>
                        <li className='menu__item'><a href="#" className='menu__link'>Actualizaciones</a></li>
                        <li className='menu__item'><a href="#" className='menu__link'>Proyectos</a></li>
                        </ul>
                       </li>
                       <li className='menu__item container-menu'><a href="#" className='menu__link'>¿QUIERES UNIRTE?
                       <img  className="chevron" src={chevron}/>
                       </a>
                       <ul className="submenu">
                       <li className='menu__item'><a href="#" className='menu__link'>Formulario Jr</a></li>
                       <li className='menu__item'><a href='#' className='menu__link'>Formulario Senior</a></li>
                       <li className='menu__item'><a href="#" className='menu__link'>Formulario Capacitadores</a></li>
                       <li className='menu__item'><a href='#' className='menu__link'>Formulario Coordinadores</a></li>
                       <li className='menu__item'><a href="#" className='menu__link'>Formulario Patrocinantes</a></li>
                       <li className='menu__item'><a href='#' className='menu__link'>Formulario Alianzas</a></li>
                       </ul>
                      
                       </li>
                        <li className='menu__item  container-menu'><a href="#" className='menu__link'>PROGRAMAS
                        <img  className="chevron" src={chevron}/>
                        </a>
                        <ul className="submenu">
                        <li className='menu__item'><a href="#" className='menu__link'>Actuales</a></li>
                        <li className='menu__item'><a href="#" class="menu__link">Por abrir</a></li>
                        </ul>
                        
                        </li>
                        <li className='menu__item container-menu'><a href="#" className='menu__link'>ACTIVIDADES
                        <img  className="chevron" src={chevron}/>
                        </a>
                        <ul className='submenu'>
                        <li className='menu__item'><a href="#" class="menu__link">Canjes</a></li>
                        </ul>
                        
                        </li>
                        <li className='menu__item container-menu'><a href="#" className='menu__link'>PORTAFOLIOS
                        <img  className="chevron" src={chevron}/>
                        </a>
                        <ul className="submenu">
                        <li className='menu__item'><a href="#" className='menu__link'>Proyectos realizados</a></li>
                        </ul>
                        </li>
                        <li className='menu__item'><a href="#" className='menu__link'>CONTACTO</a></li>
                        
                    </ul>

                    
                    
                   </div>
                   
                </nav>
           
          
           
                
         
        </header>
         
        </>
    )
}