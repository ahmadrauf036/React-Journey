import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const generate_password = () => {
    let chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let tempPassword=""
    for (let index = 1; index <= length; index++) {
      if(num) chars+="0123456789"
      if(spec) chars+="!@#$%^&*()_+-=[]{}|;:,.<>?"  
      tempPassword+=chars[Math.floor(Math.random()*chars.length+1)]
    }
    setPassword(tempPassword)
  }
  const copyPassword = () => {
    navigator.clipboard.writeText(password)
  }
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState("")
  const [num, setNum] = useState(false)
  const [spec, setSpec] = useState(false)

  useEffect(() => {
    generate_password()
    console.log(length)
    console.log(num)
    console.log(spec)
  }, [length,num,spec])
  

  return (
    <>
      <h1>Password Generator</h1>
      <div id="show-pass"> 
        <input type="text" id='password' value={password} readOnly/>
        <button onClick={copyPassword}>Copy</button>
      </div>
      <div id="pass-inputs">
        <input type="range" min="8" max="32" value={length} onChange={(e)=>{
          setLength(e.target.value)
        }} />
        <p>Length: {length} </p>
        <div id="sp-char">
          <input type="checkbox" id='special-ch' onChange={(e)=>{setSpec(e.target.checked)}}/>
          <label htmlFor="special-ch">Special Characters</label>
        </div>
        <div id="nums">
          <input type="checkbox" id='numbers' onChange={(e)=>{setNum(e.target.checked)}}/>
          <label htmlFor="numbers">Numbers</label>
        </div> 
      </div>
    </>
  )
}

export default App
