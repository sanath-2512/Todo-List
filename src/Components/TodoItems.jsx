import React from 'react'
import './CSS/TodoItems.css'
import tick from "./Assets/tick.png"
import cross from "./Assets/cross.png"
import not_tick from "./Assets/not_tick.png"

const TodoItems = ({no,text,display,settodo}) => {

  function dele(){
    let data = JSON.parse(localStorage.getItem("todo"))
    data = data.filter((hello) => hello.no!= no)
    settodo(data)
  }

  function toggle(no){
    let data = JSON.parse(localStorage.getItem("todo"))
    for(let i=0;i<data.length;i++){
      if(data[i].no=== no){
        if(data[i].display == ""){
          data[i].display = "line-through"
        }else{
          data[i].display = ""
        }
        break;
      }
    }
    settodo(data)
  }
  return (
    <div className='todoitem'>
      <div className={`todo-items-container ${display}`} onClick={() => toggle(no)}>
        {display==="" ? <img src={not_tick} alt="" /> : <img src={tick} alt="" />}
        <div className="todoitemtext">
          {text}
        </div>
      </div>
      <img className='todoitemcrossicon' onClick={() => dele()} src={cross} alt="" />
    </div>
  )
}

export default TodoItems
