import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [first, setfirst] = useState(false)
  useEffect(() => {
    console.log(first)
    return () => {
      <h1>Hii</h1>
    }
  })
  return (
    <>
      <input type="checkbox" onChange={(e)=>{setfirst(!first)}} />
    </>
  )
}

export default App
