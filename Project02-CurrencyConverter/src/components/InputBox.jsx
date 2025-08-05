import React, { useEffect, useId, useRef, useState } from 'react'


const InputBox = ({
        label,
        disabled,
        amount,
        setAmount,
        options={},
        selectedCurrency = "USD",
        setSelectedCurrency = "USD"
    }) => {
    const inputRef = useRef(null);
    const labelRef = useRef(null);
    const inputId = useId();  
    const handleFocus = () => {
        inputRef.current.focus()
    }
        
    return (
        <>
            <label tabIndex={0} onClick={handleFocus} ref = {labelRef} htmlFor={inputId} className='bg-white cursor-text h-15 w-4/5 rounded-xl text-gray-500 p-2 pl-4 flex flex-row justify-between '>
                <div className='flex items-baseline flex-col'>
                    {label}
                    <input id={inputId} value={amount} onChange={(e)=>{setAmount && setAmount(e.target.value)}} ref={inputRef} disabled={disabled} type="text" className='focus:outline-none' /> 
                </div>
                <div className='flex items-end flex-col'>
                    Currency
                    <select value={selectedCurrency} onChange={(e)=>{setSelectedCurrency(e.target.value)}} name="curr_opt" id="curr_opt" onClick={(e)=>{e.stopPropagation()}}>
                        {
                            Object.keys(options).map((curr)=>{
                                return <option key={curr} value={curr}>{curr}</option>
                            })
                        }
                    </select>
                </div>
            </label>
            
        </>
    )
}

export default InputBox