import React, { useState } from 'react';
import './Todo.css'
import TodolistItem from './TodolistItem'
function Todo(props) {

    const[inputList,setInputList]=useState("");
    const[items,setItems]=useState([]);

    const itemEvent=(event)=>{
    setInputList(event.target.value);
    }
    const listOfItem=()=>{
     setItems((oldItems)=>{
      return [...oldItems,inputList];
  });
  
   setInputList(" ")
}
    const deleteItems =(id)=>{
    setItems((oldItems)=>{
        return oldItems.filter((arrElen,index)=>{
        return index !==id;

        })
    })
        }
    return (
         <div className="center_div">
        <br/>  
        <h1>TODO List</h1>
        <br/>
        <input 
        type="text"
        placeholder="Add a items"
        value={inputList}
        onChange={itemEvent}/>
      <button onClick={listOfItem}>+</button>
      <ol>
    {/* <li>{inputList}</li> */}
    {items.map((itemvalue,index)=>{
        // return<li>{itemvalue}</li>
        return <TodolistItem 
        key={index}
        id={index}
        text={itemvalue}
        onSelect={deleteItems}
        />
       })}
         </ol>
        </div>
    );
}

export default Todo;