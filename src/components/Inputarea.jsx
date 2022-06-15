import React, { useState } from "react";

function Inputarea(props) {
    const [inputText, setInputText] = useState("");

    function handleChange(event) {
        const input = event.target.value;
        setInputText(input);
    }

    return (
        <div className="form">
            <input type="text" value={inputText} onChange={handleChange}></input>
            <button onClick={() => {
                props.onAdd(inputText)
                setInputText("");

            }}>
                <span>Add</span>
            </button>
        </div>
    );
}

export default Inputarea