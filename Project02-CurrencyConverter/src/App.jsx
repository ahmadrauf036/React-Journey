import { use, useEffect, useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrency from './hook/Currency'

function App() {
  const [userInput, setUserInput] = useState()
  const [convertedAmount, setConvertedAmount] = useState()  
  const [fromCurrency, setFromCurrency] = useState("usd")
  const currencyInfo=useCurrency(fromCurrency)
  const [toCurrency, setToCurrency] = useState("pkr")
  const calc =() => {
    setConvertedAmount(Number(currencyInfo[toCurrency]) * Number(userInput))
  }
  return (
    <>
    <div className='h-screen w-screen flex items-center justify-center bg-gray-950'>
      <div className='h-2/5 w-2/5 bg-gray-500 rounded-xl flex flex-col items-center justify-around'>
        <InputBox label='From' disabled={false} amount={userInput} setAmount={(e)=>setUserInput(e)} options={currencyInfo} selectedCurrency={fromCurrency} setSelectedCurrency={setFromCurrency}/>
        <button className='bg-green-800 p-1 rounded' onClick={
          ()=>{
            setUserInput(convertedAmount)
            setConvertedAmount(userInput)
            setFromCurrency(toCurrency)
            setToCurrency(fromCurrency)
          }
          }>Swap</button>
        <InputBox label='To' disabled={true} amount={convertedAmount} setAmount={(e)=>calc()} options={currencyInfo} selectedCurrency={toCurrency} setSelectedCurrency={setToCurrency}/>
        <button onClick={calc} className='bg-green-800 w-4/5 p-1 rounded'>Convert</button>
      </div>
    </div>
    </>
  )
}

export default App
