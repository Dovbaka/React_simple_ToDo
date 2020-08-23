import React from 'react'
import TodoItem from './TodoItem/TodoItem'
import PropTypes from 'prop-types'
import styles from './TodoList.module.css'

function TodoList(props) {
	return (
		<div className={styles.list}>
			<ul>
				{
					props.todos.map((todo, index) => {
						return <TodoItem todo={todo} key={todo.id} index={index} onChange={props.toggleTodo}/>
					})
				}
			</ul>
		</div>
		)
}

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object).isRequired,
	onToggle: PropTypes.func.isRequired
}

export default TodoList