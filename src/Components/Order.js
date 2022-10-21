import React, {createElement, useState} from "react";
import './order.css';






export default function Order() { 
  const [inputo, setinputo] = useState("")
let d = document.querySelector("#inputlist")
let ul = document.querySelector("#ul")

  function olli() {
setinputo(d.value)
console.log(inputo)
  }

  function handleClick(e) {
    
let li = document.createElement("li")
li.innerText = inputo
ul.appendChild(li)
setinputo("")
d.value = ""
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