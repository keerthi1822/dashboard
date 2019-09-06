import React from "react";
import { Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./loginForm.css";

/* import { Link } from 'react-router-dom'; */

function LoginForm(props) {
	/* let click = async e => {
		e.preventDefault();
		if (email && password)
			/* console.log("email and password if");
			 
			this.props.history.push("/DashBoard");
	}; */

	return (
		<Form className='form'>
			<p className='text-muted'>Cyrix Experience Platform</p>
			<div className='inputGroup'>
				<p>Cyrix Experience Platform</p>
				<input type='email' placeholder='Login' />

				<input type='password' placeholder='password' />
				<NavLink to='/DashBoard'>
					<button className='submit'>Signin</button>
				</NavLink>
			</div>
		</Form>
	);
}

export default LoginForm;
