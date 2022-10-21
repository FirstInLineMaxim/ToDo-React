import React from 'react'
import './main.css';
import Order from "./Order.js"


export default function main() {
  return (
    <div>
      <div className="container">
        <div className="col-2"><p>test1</p></div>
          <div id="todocol" className="col-8">
            {/* TODOS LIST */}
            {/* TITLE */}
            <div id="title" className="text-center">
              <div className="text">
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
        <div className="col-2"><p>test1</p></div>
      
      
      </div>
    </div>
  )
}
