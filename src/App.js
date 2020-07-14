import React from 'react';
import './App.css'
import SlotM from './SlotMachine'


const App = () => {
  
  return(
    <div>

       <h1 className="heading_style"> 🎰 Welcome TO{" "} <span style={{ fontWeight: 'bold' }}> Slot Machine Game </span> 🎰</h1>
   
<div className="">
<SlotM x ="😃" y= "😃" z= "😃" />
  <hr/>
  <SlotM x ="😺" y= "😏" z= " 🤷‍♂" />
  <hr/>
  <SlotM x =" 👍 " y= " 🍌 " z= " 🍓" />
  <hr/>
  <SlotM x ="💯" y= "💯" z= "💯" />
  <hr/>
</div>

       </div>
  )
}
export default App;