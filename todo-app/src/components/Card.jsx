import React, { useEffect, useState } from "react";
import "./card.css"
import Todoinp from "./Todoinp";
import Todolist from "./Todolist";
function Card(){
    const [listtodo, setlisttodo]=useState([]);
    let addlist=(inputtext)=>{
        if(inputtext!=='')
            setlisttodo([...listtodo, inputtext]);
    }
    const deletelistitem = (key)=>{
        let newlist = [...listtodo]
        newlist.splice(key, 1)
        setlisttodo([...newlist])    }
    return(
        <div class="bg-teal-600 h-[100vh]">
<div class="main-container  flex flex-col ">
                <Todoinp addlist={addlist} />
                <div className="flex flex-col items-center">
                <h1 class="font-bold font-serif text-4xl text-white mt-10">Todos</h1>
                <hr class="w-[50%] border-[1.5px] mt-1"></hr>
                </div>
                <div class="mt-10">
                <div className="flex flex-col ml-auto justify-center items-center">
                {listtodo.map((listitem,i)=>{
                    return(
                        <Todolist key={i} index={i} items={listitem} deleteitem={deletelistitem} />
                    )
                })}

                </div>
                </div> 
                
            </div>
        </div>
            
    )
}
export default Card

