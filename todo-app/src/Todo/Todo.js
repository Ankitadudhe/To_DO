import React, { Component } from 'react';
import './Todo.css'
let getId = ""
class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: "",
            todoItems: []
        }
    }

    onChangeHandler = (event) => {
        var inputVal = event.target.value;
        this.setState({
            item: inputVal
        })
    }

    addData = () => {
        var inputVal = this.state.item;
        var itemInstance = this.state.todoItems;
        itemInstance.push(inputVal);
        this.setState({
            todoItems: itemInstance,
            item: ''

        })
        console.log((this.state.todoItems));

    }
    delete = (event) => {
        var id = event.target.id;
        var itemInstance = this.state.todoItems;
        itemInstance.splice(id, 1);
        this.setState({
            todoItems: itemInstance
        })
    }
    edit = (event) => {
        getId = event.target.id;
        this.setState({
            item: this.state.todoItems[event.target.id],

        });
        document.getElementById("additem").style.display = "none"
        document.getElementById("update").style.display = "block"
        event.target.parentNode.style.borderBottom = "2px solid red";
        event.target.style.display = "none"
    }
    update = () => {
        // this.state.item
        var y = this.state.todoItems;
        y[getId] = this.state.item;
        this.setState({
            todoItems: y,
            item :''
        });
        document.getElementById("additem").style.display = "block"
        document.getElementById("update").style.display = "none"
        // document.getElementsByClassName("edit").style.display
        var a=document.getElementsByClassName("edit")
        console.log(a);
        
        for(var i=0;i<a.length;i++){
          a[i].style.display='block'
          a[i].parentNode.style.borderBottom='none'

        }
     
    }
    render() {
        var itemList = this.state.todoItems.map((e, index) =>
            <li key={index}>{e}
                <span onClick={this.delete} id={index} className=" btn btn-danger">X</span>
                <span onClick={this.edit} id={index} className=" edit btn btn-success">Edit</span>
            </li>
        )
        return (
            <div>
                <div className="header">React js Todo-App</div>
                <div className="body">
                    <ul>{itemList}</ul>
                </div>
                <div className="footer">
                    <input type="text" value={this.state.item} onChange={this.onChangeHandler} />
                    <button onClick={this.addData} id="additem">+</button>
                    <button onClick={this.update} id="update">update</button>

                </div>

            </div>

        )
    }
}
export default Todo