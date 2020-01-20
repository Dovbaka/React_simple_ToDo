import React from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

const styles = {
	ul: {
		listStyle: 'none',
		margin: 0,
		padding: 0
	}
}

function TodoList(probs) {
	return (
		<ul style={styles.ul}>
			{
				probs.todos.map((todo, index) => {
					return <TodoItem todo={todo} key={todo.id} index={index} onChange={probs.onTaggle}/>
				})
			}
		</ul>
		)
}

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object).isRequired,
	onTaggle: PropTypes.func.isRequired
}

export default TodoList