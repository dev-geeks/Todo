import React from "react";
import "./Todo.css";
const Todo = () => {

    return(<div>
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <img src="" alt="fd" />
                    <figcaption>Add your List here</figcaption>
                </figure>
                <div className="addItems">
                    <input type="text" placeholder="📃 Add Items..." className="form-control"/>
                </div>
            </div>
        </div>
    </div>)
}

export default Todo;