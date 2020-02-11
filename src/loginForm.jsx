import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Loader from "react-loader-spinner";

import "./loginForm.css";

class LoginForm extends Component {
	state = {
		loading: true
	};
	componentDidMount() {
		this.setState({ loading: false });
	}
	render() {
		return (
			<div>
				{this.state.loading ? (
					<Loader
						type='Puff'
						color='#00BFFF'
						height={100}
						width={100}
						timeout={3000} //3 secs
					/>
				) : (
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
				)}
			</div>
		);
	}
}

export default LoginForm;
