import React, { useState } from 'react';

const Heart = () => {
    const [color, setColor] = useState("black")
    const [count, setcount] = useState(0)
    const settingcolor = () => {
        if (count == 0) {
            setColor("red");
            setcount(1);

        }
        else {
            setColor("black");
            setcount(0);
        }
    }
    const settinghover=()=>
    {
        setColor("red")
    }
    const settinghoverleave=()=>
     {
         if(count==0)
       setColor("black")
     }
    return (
        <div><div className="heart" onClick={settingcolor} onMouseOver={settinghover}
        onMouseLeave={settinghoverleave}>
            <span>
                <i class="fas fa-heart" style={{ color }}> </i>
            </span>
        </div> </div>
    )



}
export default Heart;
