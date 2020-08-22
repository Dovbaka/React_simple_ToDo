import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../../../context'
import styles from './TodoItem.module.css'


function TodoItem({todo, index, onChange}) {
    const {removeTodo} = useContext(Context);
    const classes = [];
    if (todo.completed) {
        classes.push('done')
    }

    return <div className={styles.item}>
        <li>
			<label className={styles.container}>
                <input type="checkbox" onChange={() => onChange(todo.id)}
                       checked={todo.completed}/>
			    <span className={styles.checkmark}> </span>
                <label className={styles.todoText + ' ' + classes.join(' ')}>{todo.title}</label>
            </label>
            <span className={styles.close} onClick={() => removeTodo(todo.id)}>x</span>
        </li>
    </div>
}

TodoItem.protoTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChande: PropTypes.func.isRequired
}

export default TodoItem