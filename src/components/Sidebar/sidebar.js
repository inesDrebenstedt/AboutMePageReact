import './sidebar.scss'
import { Link, NavLink } from 'react-router-dom'
import SidebarLogoCircle from '../../assets/images/SidebarLogoCircle.png'
import LogoSubtitle from '../../assets/images/LogoSubtitle.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component }  from 'react';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => {
   
    return (
    <div className='my-side-bar'>
        <Link className='logo' to ='https://inesdrebenstedt.github.io/AboutMePageReact/'>        
            <span>
                <img className='logoimage' src={SidebarLogoCircle} alt="logo"/>
            </span>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>                
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/idrebenstedt/'>
                    <span>
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                    </span>
                </a>
            </li>
            <li>               
                <a target="_blank" rel='noreferrer' href='https://github.com/inesDrebenstedt'>
                    <span>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                    </span>                    
                </a>               
            </li>
        </ul>
    </div>
    )
   
}

export default Sidebar
