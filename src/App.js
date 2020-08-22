import React from 'react';
import TodoList from './Todo/TodoList/TodoList'
import Context from './context'
import TodoInputField from './Todo/TodoInputField/TodoInputField'
import styles from './App.module.css'


function App() {

    let [todos, setTodos] = React.useState([
        {id: 1, completed: false, title: "Buy something"},
        {id: 2, completed: false, title: "Do something"},
        {id: 3, completed: false, title: "Go somewhere"}]
    )


    function taggleTodo(id) {
        setTodos(
            todos = todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        )
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(title) {
        setTodos(todos.concat([{
            title,
            id: Date.now(),
            completed: false
        }]))
    }

    return (
        <Context.Provider value={{removeTodo}}>
            <div className={styles.content}>
                <h1>React ToDo </h1>
                <TodoInputField onCreate={addTodo}/>
                {todos.length ? <TodoList todos={todos} onTaggle={taggleTodo}/> : null}

            </div>
        </Context.Provider>
    );
}

export default App;
