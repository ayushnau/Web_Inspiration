import React, { useState } from 'react';

const Plus = () => {
    const [color, setcolor] = useState("black");
    const [value, setvalue] = useState(0);
    const settingcolor = () => {
        if (value == 0) {
            setcolor("red");
            setvalue(1);

        }
        else {
            setcolor("black");
            setvalue(0);
        }
    }
    const settinghover=()=>
    {
        setcolor("red")
    }
    const settinghoverleave=()=>
     {
         if(value==0)
       setcolor("black")
     }
    return (
        <>
            <div className="plus" onClick={settingcolor} onMouseOver={settinghover}
            onMouseLeave={settinghoverleave}>
                <span><i class="fas fa-plus" style={{color}}></i></span>
            </div>
        </>
    )
}
export default Plus;