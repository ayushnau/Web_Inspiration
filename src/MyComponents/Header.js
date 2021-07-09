import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Header = () => {

    const [display, setdisplay] = useState("flex");
    const [value, setvalue] = useState(0)
   
    const settingdisplay=()=>
    {
        if(value===1)
        {
           setvalue(0);
        setdisplay("flex")
        }
        else{
            setvalue(1);
            setdisplay("none")
        }

        
        
    }
    return (
      <>
    
     <div className="header">
        <div className="firstpart">
            <ul className="listheader">
                <li className="firstinlist"><Link to={process.env.PUBLIC_URL + '/Web_Inspiration'}>WebInspiration</Link> </li>

            </ul>
        </div>
        <div className="Navbar-toggle"  onClick={settingdisplay}>
            <i className="fas fa-bars fa-lg"></i>
        </div>


        <div className="secondpart toggledata" style={{display}}>
            <ul className="thelistinsecondpart toggledata" style={{display}}>



                <li className="inspiration" style={{display}}><Link to="#"> Inspiration
                        <i className="fas fa-caret-down"></i></Link></li>
                <div className="dropdownmenu">
                    <ul>

                        <li><Link to="#"> WebsiteType</Link></li>
                        <li><Link to="#"> Industry</Link></li>
                        <li><Link to="#"> Styles</Link></li>
                        <li><Link to="#"> Colors</Link></li>

                    </ul>
                </div>

                <li className="toggledata" style={{display}}><Link to="#">WordpressThemes</Link></li>
                <li className="toggledata" style={{display}}><Link to="/blog">blog</Link></li>
                <li className="toggledata" style={{display}}><Link to="#">💖EditorPicks</Link></li>
            </ul>
            <ul className="thebuttoninsecondpart toggledata" style={{display}}>
                <li><Link to="#">
                        <button className="loginbutton">

                            <i className="icon ion-ios-person"></i>
                            login

                        </button>
                    </Link>
                </li>
            </ul>


        </div>
    </div>

    


      </>
    )
    }
export default Header;