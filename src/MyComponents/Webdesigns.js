import React, { useState } from 'react';
import Heart from './Heart'
import Plus from './Plus'
import Data from './Data'


const Cardtemplate = (props) => {
    return (
        <>

            <div className="designs  ">
                <div className="barclass">
                    <div><a href="#">{props.name}</a> </div>
                    <div className="middlediv">
                        <Heart></Heart>
                        <Plus></Plus>

                    </div>
                    <div className="rightdiv">
                        {props.date}
                    </div>
                </div>
                <div className="imgclass">
                    <a href={props.visitlink}>
                        <span className="hover">
                            VISIT WEBSITE
                                    <i class="fas fa-sign-out-alt"></i>
                        </span>
                        <img src={props.imagesource} alt="image" />
                    </a>
                </div>
            </div>

        </>)


}
const mapfunc = (value) => {
    return (<>
        <Cardtemplate name={value.name} date={value.date} visitlink={value.visitlink} imagesource={value.source} />
    </>)


}

const Webdesigns = () => {
    return (
        <>
            <div className="mastercontainer">
                <div className="latestwebdesigns">

                    <h1> Latest Web Designs:</h1>
                    
                    
                </div>


                <div className="masterfordesigns">

                    {Data.map(mapfunc)}


                </div>
            </div>


            <div className="showmore">
                <button className="thisisshowmore">
                    SHOW MORE
                </button>
            </div>
            <hr />



        </>
    )
}
export default Webdesigns