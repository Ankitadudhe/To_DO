import React from 'react';
import './Todo.css'


function TodolistItem(props) {
       return(
       <>
       <div className='todo_style'>
           {/* <i class="fa fa-times" aria-hidden="true"/> */}
      <button id="button" className="alert alert-danger"
      onClick={
          ()=>{props.onSelect(props.id);
        }
      }
      >x</button>
       <li> {props.text}</li>
        </div>
       </>
       )
}
export default TodolistItem;