import TodoCard from "./components/TodoCard"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { useState , useEffect } from "react"

function App() {
  const  [todos , setTodos] = useState([])
  const [todoValue , setTodoValue] = useState("")

// need to learn about this
// some more things are to ben learnt
  function  persistData(newList){
    localStorage.setItem("todos", JSON.stringify({todos : newList }))
  }

  function handleAddTodos(newTodo){
    const newTodoList = [...todos , newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo , todoIndex)=> {
      return todoIndex !== index;
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index){
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  // need to learn about this
  // some more
  useEffect(()=>{
    if(!localStorage){
      return
    }
    let localtodos = localStorage.getItem('todos')
    if(!localtodos){
      return
    }
    localtodos = JSON.parse(localtodos).todos
    setTodos(localtodos)
  }, [])


  return (
  <>
    <TodoInput todoValue={todoValue}  setTodoValue = {setTodoValue} handleAddTodos= {handleAddTodos} />
    <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo = {handleDeleteTodo} todos ={todos} />
  </>
  )
}

export default App
