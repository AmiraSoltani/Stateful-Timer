import React from "react" 
export default function Buttons(props){
    return(
        <div className="buttons">
            <button onClick={props.handleClick}>
                Start
            </button >
        </div>
    )
}