import React from 'react'
import './main.css';
import Order from "./Order.js"

export default function main() {
  return (
    <div>
      <div class="container">
        <div class="col-2"><p>test1</p></div>
          <div id="todocol" class="col-8">
            {/* TODOS LIST */}
            {/* TITLE */}
            <h1>JUST DO IT</h1>
            {/* INPUT */}
            <div></div>
            {/* UL-TASKS */}
            <div>
              <Order />
            </div>
            {/* PROGRESSBAR */}
            <div></div>
          </div>
        <div class="col-2"><p>test1</p></div>
      
      
      </div>
    </div>
  )
}