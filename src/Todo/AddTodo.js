import React, {useState} from 'react'

const styles = {
	form: {
		marginBottom: '1rem',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '.5rem 1rem',
		border: '1px solid #ccc',
		borderRadius: '4px'
	},

	input:{
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '.2rem 1rem',
		border: '1px solid #ccc',
		borderRadius: '4px',
		width:'400px'
	},

	button:{
		backgroundColor: '#44c767',
		borderRadius: '28px',
		border:'1px solid #18ab29',
		display:'inline-block',
		cursor:'pointer',
		color:'#ffffff',
		fontFamily:'Arial',
		fontSize:'15px',
		padding: '.5rem 1rem',
		textDecoration:'none',
		textShadow:'0px 1px 0px #2f6627'      
	}
};

function AddTodo({onCreate}) {
	const [value,setValue] = useState('')

	function submitFunc(event) {
		event.preventDefault()

		if(value.trim()){
			onCreate(value);
			setValue('');
		}
	}

	return(
		<form style={styles.form} onSubmit={submitFunc}>
			<input style={styles.input} value={value} onChange={event => setValue(event.target.value)}/>
			<button className="addButton" type="submit">Add Todo</button>
		</form>
		)
}

export default AddTodo