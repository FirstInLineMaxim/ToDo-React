import React from 'react'
import './main.css';
import {SearchBar} from "./SearchBar";

export default function main() {
  const names = ["wassup","not Much","how u doing"]
  const what = names.map(e => <li>{e}</li>)

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
                 <ol>
                  {what}
                 </ol>

              </div>
            </div>
              
              
              

            {/* INPUT */}
            <div></div>
            {/* UL-TASKS */}
            <div></div>
            {/* PROGRESSBAR */}
            <div></div>

          <div><SearchBar/></div>
          </div>
        <div class="col-2"><p>test1</p></div>
      
      
      </div>
    </div>
  )
}
