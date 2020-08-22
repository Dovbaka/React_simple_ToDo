import React, {useState} from 'react'
import styles from './TodoInputField.module.css'

function TodoInputField({onCreate}) {
	const [value,setValue] = useState('')

	function submitFunc(event) {
		event.preventDefault()

		if(value.trim()){
			onCreate(value);
			setValue('');
		}
	}

	return(
		<div className={styles.listForm}>
			<form onSubmit={submitFunc}>
				<input value={value} placeholder={"What needs to be done?"} onChange={event => setValue(event.target.value)}/>

			</form>
		</div>
		)
}

//<button className="addButton" type="submit">Add Todo</button>

export default TodoInputField