import React from 'react'
import TodoItem from './TodoItem/TodoItem'
import PropTypes from 'prop-types'
import styles from './TodoList.module.css'

function TodoList(probs) {
	return (
		<div className={styles.list}>
			<ul>
				{
					probs.todos.map((todo, index) => {
						return <TodoItem todo={todo} key={todo.id} index={index} onChange={probs.onTaggle}/>
					})
				}
			</ul>
		</div>
		)
}

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object).isRequired,
	onTaggle: PropTypes.func.isRequired
}

export default TodoList