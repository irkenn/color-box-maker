import React from "react";

function Box({height, width, color, id, deleteBox}){

    return(
        <div className="box-wrapper">
            <div 
            key={id} 
            className="box"
            style={{
                backgroundColor:color,
                height:`${height}px`,
                width:`${width}px`
                }}
            />
            <button 
                className="delete-box-button"
                onClick={(e) => deleteBox(e, id)}
                >X</button>
        </div>
    );
}

export default Box;