import React, { useState } from 'react';

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
                <li className="firstinlist"><a href="#">WebInspiration</a> </li>

            </ul>
        </div>
        <div className="Navbar-toggle"  onClick={settingdisplay}>
            <i className="fas fa-bars fa-lg"></i>
        </div>


        <div className="secondpart toggledata" style={{display}}>
            <ul className="thelistinsecondpart toggledata" style={{display}}>



                <li className="inspiration" style={{display}}><a href="#"> Inspiration
                        <i className="fas fa-caret-down"></i></a></li>
                <div className="dropdownmenu">
                    <ul>

                        <li><a href="#"> WebsiteType</a></li>
                        <li><a href="#"> Industry</a></li>
                        <li><a href="#"> Styles</a></li>
                        <li><a href="#"> Colors</a></li>

                    </ul>
                </div>

                <li className="toggledata" style={{display}}><a href="#">WordpressThemes</a></li>
                <li className="toggledata" style={{display}}><a href="#">blog</a></li>
                <li className="toggledata" style={{display}}><a href="#">💖EditorPicks</a></li>
            </ul>
            <ul className="thebuttoninsecondpart toggledata" style={{display}}>
                <li><a href="/Login">
                        <button className="loginbutton">

                            <i className="icon ion-ios-person"></i>
                            login

                        </button>
                    </a>
                </li>
            </ul>


        </div>
    </div>

    


      </>
    )
    }
export default Header;