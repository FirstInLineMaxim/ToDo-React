import React, { createElement, useState } from "react";
import './order.css';






export default function Order() {
  let l = localStorage.getItem("todo")
  console.log(l)

  if (0 === 1) {
    for (let i = 0; i < l.length; i++) {


    }
  }
  const [inputo, setinputo] = useState("")
  let d = document.querySelector("#inputlist")
  let ul = document.querySelector("#ul")

  function olli() {
    console.log(d.value)
    console.log(inputo)
  }

  function handleClick(e) {
    if(d.value === ""){
      alert("You need a Task")
    }else{
      let li = document.createElement("li")
      li.innerText = inputo
      ul.appendChild(li)
      let k = JSON.stringify(inputo)
      localStorage.setItem("todo", k)
      setinputo("")
      d.value = ""
      setinputo("")
    }
  }

  return <div id="todolist">
    <input onChange={olli} id="inputlist" placeholder="todo" /><button onClick={handleClick} type="submit" >Click me</button>
    <ul id="ul">
      <li>testliste1</li>
      <li>testliste2</li>
      <li>testliste3</li>
      <li>testliste4</li>

    </ul>
  </div>
}