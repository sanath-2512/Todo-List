import React, { useEffect, useRef, useState } from 'react'
import './CSS/Todo.css'
import TodoItems from './TodoItems'
let count = 0 
const Todo = () => {
    
    const [todo,settodo] = useState([])
    const inputref = useRef(null)
    function add() {
        settodo([...todo,{no : count++,text : inputref.current.value ,display : ""}])
        inputref.current.value = "" ;
        localStorage.setItem("todo_count",count)
    }
    useEffect (() => {
        settodo(JSON.parse(localStorage.getItem("todo")))
        count = localStorage.getItem("todo_count")
    },[])
    useEffect (() => {
        setTimeout(() => {
            console.log(todo)
            localStorage.setItem("todo",JSON.stringify(todo))
        }, 100);
    },[todo])
  return (
    <div className='todo'>
        <div className='todo-header'>To-Do List</div>
      <div className='todoadd'>
        <input ref={inputref} type="text" placeholder='Add Your Task' className='todoinput'/>
        <div onClick={add} className='todo-add-button'>Add</div>
      </div>
      <div className="todolist">
        {todo.map((hello,index) => {
            return <TodoItems key ={index} settodo={settodo} no={hello.no} text = {hello.text} display={hello.display}/>
        })}
      </div>
    </div>
  )
}

export default Todo
