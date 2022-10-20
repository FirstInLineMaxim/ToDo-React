import React from 'react'
import './main.css';
import Order from "./Order.js"


export default function main() {
  return (
    <div>
      <div class="container">
        <div class="col-2"><p>test1</p></div>
          <div class="col-8">
            {/* TODOS LIST */}
            {/* TITLE */}
            <div id="title" class="text-center">
              <div class="text">
                <h1>JUST DO IT</h1>
              </div>
            </div>
            
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
