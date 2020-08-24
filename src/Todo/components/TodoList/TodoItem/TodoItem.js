import React, {useContext, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import Context from '../../../../context'
import styles from './TodoItem.module.css'


function TodoItem({todo, onChange}) {


    let [editMode, setEditMode] = useState(false);
    let [text, setText] = useState(todo.title);

    useEffect(() => { //Hook to update status when props change
        setText(todo.title);
    }, [todo.title]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        if(text !== ""){
            editTodo(todo.id,text);
        }
        setEditMode(false);
    }

    const onStatusChange = (e) => {
        setText(e.currentTarget.value);
    }

    const enterPress = (e) => {
        if(e.keyCode === 13){
            deactivateEditMode();
        }
    }

    const {removeTodo} = useContext(Context);
    const {editTodo} = useContext(Context);
    const classes = [];
    if (todo.completed) {
        classes.push('done');
    }

    return <div className={styles.item}>
        <li>
            <label className={styles.container}>
                <input className={styles.checkboxContainer} type="checkbox" onChange={() => onChange(todo.id)}
                       checked={todo.completed}/>
                <span className={styles.checkmark}> </span>
                {!editMode && <label className={styles.todoText + ' ' + classes.join(' ')}
                                     onDoubleClick={activateEditMode}>{todo.title}</label>}
                {editMode && <input className={styles.editInput} autoFocus={true}  value={text}
                                    onKeyDown={enterPress} onBlur={deactivateEditMode} onChange={onStatusChange}/>}
            </label>
            <span className={styles.close} onClick={() => removeTodo(todo.id)}>x</span>
        </li>
    </div>
}

TodoItem.protoTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
}

export default TodoItem