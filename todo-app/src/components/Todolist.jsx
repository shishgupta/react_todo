import React from 'react'

function Todolist(props) {
  return (
    <>
    <div className='w-[80%] ml-auto'>
    <li class="list-none flex justify-between w-[75%] font-serif font-semibold text-md border-2 my-2 py-2 pl-2">
        {props.items}
    <span class='pr-2 hover:cursor-pointer hover:text-red-700'><i class="fa-solid fa-trash" onClick={
      ()=>{
        props.deleteitem(props.index)
      }
    }></i></span>
    </li>
    </div>
    
    </>
  )
}

export default Todolist
