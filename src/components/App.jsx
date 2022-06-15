import React, { useState } from "react";
import Todoitem from "./Todoitem";
import Inputarea from "./Inputarea";

function App() {

    const [items, setItems] = useState([]);



    function handleClick(inputText) {
        setItems((prev) => {
            return [...prev, inputText];
        });

    }
    function deleteItem(id) {
        setItems((prev) => {
            return prev.filter((items, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div className="container">
            <div className="heading">
                <h1 className="heading">To-Do-List</h1>
            </div>
            <Inputarea
                onAdd={handleClick}
            />

            <div>
                <ul>
                    {items.map((listItem, index) => (
                        <Todoitem
                            key={index}
                            text={listItem}
                            id={index}
                            onChecked={deleteItem}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
