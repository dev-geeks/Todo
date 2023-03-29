import React, { useState, useEffect } from "react";
import "./Todo.css";

const getLocalData = () =>{
    const list = localStorage.getItem("myList");

    if(list){
        return JSON.parse(list);
    }
    else{
        return [];
    }
}
const Todo = () => {

    const [inputdata, setInputdata] = useState("");
    const [items, setItems] = useState(getLocalData());
    const [edit, setEdit] = useState("");
    const [btn, setBtn] = useState(false);
    const addItem = () => {
        if(!inputdata){
            alert("!List is Empty!");
        }
        else if(inputdata && btn){
            setItems(
                items.map((curElm)=>{
                    if(curElm.id === edit){
                        return{ ...curElm, name: inputdata }
                    }
                    return curElm;
                })
            );
            setInputdata("");
            setEdit();
            setBtn(false);
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

    useEffect(()=>{
        localStorage.setItem("myList",JSON.stringify(items))
    },[items])

    const editItem = (id) =>{
        const item_todo_edit = items.find((curElm)=>{
            return curElm.id === id;
        })
        setInputdata(item_todo_edit.name);
        setEdit(id);
        setBtn(true);
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
                    {btn ? (
                        <i className="far fa-edit add-btn" onClick={addItem}></i>
                        ) : (
                        <i className="fa fa-plus add-btn" onClick={addItem}></i>
                    )}
                </div>
                <div className="showItems">
                    {
                        items.map((curElm, index)=>{
                            return(<div className="eachItem" key={index}>
                                        <h3>{curElm.name}</h3>
                                        <div className="todo-btn">
                                        <i class="far fa-edit add-btn" onClick={()=>{editItem(curElm.id)}}></i>
                                        <i class="far fa-trash-alt add-btn" onClick={()=>{deleteItem(curElm.id)}}></i>
                                        </div>
                                    </div>)
                        })
                    }     
                </div>
                <div className="showItems">
                    <button className="btn" data-sm-link-text="Remove All" onClick={removeAll}>Remove All</button>
                </div>
            </div>
        </div>
    </div>)
}

export default Todo;