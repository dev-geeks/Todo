import React, { useState } from "react";
import "./Todo.css";
const Todo = () => {

    const [inputdata, setInputdata] = useState("");
    const [items, setItems] = useState([]);

    const addItem = () => {
        if(!inputdata){
            alert("sdfs");
        }
        else{
            const newItemData ={
                id: new Date().getTime().toString(),
                name: inputdata
            }
            setItems([... items, newItemData]);
            setInputdata("");
        }
    }
    const deleteItem = (id) =>{
        const updatedItem = items.filter((curElm)=>{
            return curElm.id !== id;
        })
        setItems(updatedItem);
    }
    const removeAll = () =>{
        setItems([]);
    }
    return(<div>
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <img src="/todo.png" alt="fd" />
                    <figcaption>Add your List here</figcaption>
                </figure>
                <div className="addItems">
                    <input type="text" placeholder="📃 Add Items..." className="form-control" value={inputdata} onChange={e=>setInputdata(e.target.value)}/>
                    <i className="fa-solid fa-plus add-btn" onClick={addItem}></i>
                </div>
                <div className="showItems">
                    {
                        items.map((curElm, index)=>{
                            return(<div className="eachItem" key={index}>
                                        <h3>{curElm.name}</h3>
                                        <div className="todo-btn">
                                        <i class="fa-regular fa-pen-to-square add-btn"></i>
                                        <i class="fa-solid fa-trash add-btn" onClick={()=>{deleteItem(curElm.id)}}></i>
                                        </div>
                                    </div>)
                        })
                    }
                    
                </div>
                <div className="showItems">
                    <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>Check list</button>
                </div>
            </div>
        </div>
    </div>)
}

export default Todo;