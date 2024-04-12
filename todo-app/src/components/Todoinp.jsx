import React, { useState } from 'react'

function Todoinp(props) {
  const [inputtext, setinputtext]=useState('');
  return (
    <>
    <div class="flex m-auto justify-center w-[80%] space-x-3 mt-24">
      <input type="text" class="task-input h-12 border-1 w-[50%] border-white border-hidden p-4 rounded-2xl" placeholder='Enter your todo' value={inputtext} onChange={
        e=>{setinputtext(e.target.value)}
      } />
      <button class="bg-gray-700 border-1 border-hidden rounded-full h-12 w-12 text-4xl m-auto text-white" onClick={
        ()=>{props.addlist(inputtext)
        setinputtext('')}
      }>+</button>
    </div>
    </>
  )
}

export default Todoinp
