import React, { useState } from "react";
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

export default function Order() {

  const [inputo, setinputo] = useState(" ")
  const d = document.querySelector("#inputlist")
  const ul = document.querySelector("#ul")

  function olli() {
    const inputValue =document.querySelector("#inputlist").value
    console.log(inputValue)
    const input = inputValue
    setinputo(input)
  }
  function handleClick(e) {
    if(inputo === ""){
      alert("You need a Task")
    }else{
      const li = document.createElement("li")
      const task = document.createElement("input")
      const checkbox = document.createElement('input')
      const edit = document.createElement("button")
      const del = document.createElement("button")
      const div = document.createElement("div") 

      
      checkbox.setAttribute('type', 'checkbox')
      task.value = inputo
      task.disabled = true
      task.className = "textarea"
      ul.className = "list-unstyled"

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
      <button 
      onClick={handleClick} 
      type="submit" >Click me</button>
    </div>
    <ul id="ul">
    </ul>
  </div>
}}}