import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useTimer } from './component.jsx/useTimer'
function App() {
  let [minute,second,start,stop,reset]=useTimer()
  return (
    <>
      <h1>{`${minute}`}<span style={{fontSize:"20px"}}>min</span>:{`${second}`}<span style={{fontSize:"20px"}}>sec</span></h1>
      <button onClick={()=>{start()}}>Start</button>
      <button onClick={()=>{stop()}}>Stop</button>
      <button onClick={()=>{reset()}}>Reset</button>
    </>
  )
}

export default App
