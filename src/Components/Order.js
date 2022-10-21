import React, {useState, useEffect} from "react";
import './order.css';






export default function Order() { 

 
  
 let ul = document.querySelector("#ul")
 const [inputo, setinputo] = useState("")
  function olli() {
   let newinput = document.querySelector("#inputlist")
    setinputo(newinput.value)
          }
 
          useEffect(() => {
          function appstore() {
            let l = []
            let k = JSON.parse(localStorage.getItem("todo")) || []
            console.log(k)
            let ul = document.querySelector("#ul")
            let k = JSON.parse(localStorage.getItem("todo"))
            for (let i = 0; i<k.length;i++) {
            let list = document.createElement("li")
            list.innerHTML = k[i]
            ul.appendChild(list)
            }}
   
 
 }, 500)


  
  function handleClick(e) {
    
let li = document.createElement("li")
li.innerHTML = inputo
ul.appendChild(li)
console.log(inputo)
console.log("this" + l)
l.push(...k)
l.push(inputo) 
l = JSON.stringify(l)
localStorage.setItem("todo" ,l )
setinputo("")


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