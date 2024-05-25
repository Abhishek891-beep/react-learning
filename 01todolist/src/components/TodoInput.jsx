import { useState } from "react"

export default function TodoInput(props){
    const {handleAddTodos , todoValue ,setTodoValue} = props
    
    return (
        <header>
            <input placeholder="enter todo"  value={todoValue} onChange={(e)=>{setTodoValue(e.target.value)}} />
            <button onClick={()=>{
                handleAddTodos(todoValue)
                setTodoValue("")
            }}>add</button>
        </header>
    )
}