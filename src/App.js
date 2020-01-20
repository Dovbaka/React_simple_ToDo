import React from 'react';
import TodoList from './Todo/TodoList'
import Context from './context'
import AddTodo from './Todo/AddTodo'


function App() {

  let [todos, setTodos] = React.useState([
  {id: 1, completed: false, title: "Buy something"},
  {id: 2, completed: false, title: "Do something"},
  {id: 3, completed: false, title: "Go somewhere"}]
  )


 function taggleTodo(id) {
  setTodos(
    todos = todos.map(todo => {
     if(todo.id === id){
       todo.completed = !todo.completed;
     }
     return todo;
   })
    )
 }

 function removeTodo(id){
   setTodos(todos.filter(todo => todo.id !== id))
 }

 function addTodo(title) {
   setTodos(todos.concat([{
     title,
     id:Date.now(),
     completed:false
   }]))
 }

  return (
    <Context.Provider value={{ removeTodo }}>
    <div className='wrapper'>
    <h1>React ToDo<a className="youTubeSource" href="https://www.youtube.com/watch?v=xJZa2_aldDs"
    target="_blank"><i class="fa fa-youtube-play"></i> YouTube</a></h1>
    <AddTodo onCreate={addTodo}/>
    {todos.length ? <TodoList todos={todos} onTaggle={taggleTodo}/> : <p>No ToDo's left</p>}
    
    </div>
    </Context.Provider>
  );
}

export default App;
