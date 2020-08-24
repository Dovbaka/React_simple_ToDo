import React, {useState} from 'react'
import styles from './TodoInputField.module.css'

function TodoInputField(props) {
    const [value, setValue] = useState('')

    function submitFunc(event) {
        event.preventDefault()

        if (value.trim()) {
            props.addTodo(value);
            setValue('');
        }
    }

    return (
        <div className={styles.listForm}>
            <form onSubmit={submitFunc}>
                <input value={value} placeholder={"What needs to be done?"}
                       onChange={event => setValue(event.target.value)}/>
            </form>
        </div>
    )
}

export default TodoInputField