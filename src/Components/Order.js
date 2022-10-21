import React, { createElement, useState } from "react";
import './order.css';






export default function Order() {
  let l = localStorage.getItem("todo")
  console.log(l)

  if (0 === 1) {
    for (let i = 0; i < l.length; i++) {


    }
  }
  const [inputo, setinputo] = useState(" ")
  let d = document.querySelector("#inputlist")
  let ul = document.querySelector("#ul")

  function olli() {
    setinputo(d.value)
    console.log(inputo)
  }
const storedTasks = []
  function handleClick(e) {
    if(inputo === ""){
      alert("You need a Task")
    }else{
      let li = document.createElement("li")
      const task = document.createElement("input")
      const checkbox = document.createElement('input')
      const edit = document.createElement("button")
      const del = document.createElement("button")
      const div = document.createElement("div") 

      
      checkbox.setAttribute('type', 'checkbox')
      task.value = inputo
      task.disabled = true
      task.className = "textarea"

      // creates the edit button 
      edit.className = "edit"
      del.className = "del"
      div.className = "buttons"
      
      ul.appendChild(li).appendChild(checkbox)
      li.appendChild(task)
      li.appendChild(edit)
      li.appendChild(del)

      setinputo("")
      d.value = ""
      setinputo("")
    }
  }

  return <div id="todolist">
    <div className="taskBar">
      <input onChange={olli} id="inputlist" placeholder="todo" />
      <button onClick={handleClick} type="submit" >Click me</button>
    </div>
    <ul id="ul">
      <li>testliste1</li>
      <li>testliste2</li>
      <li>testliste3</li>
      <li>testliste4</li>

    </ul>
  </div>
}