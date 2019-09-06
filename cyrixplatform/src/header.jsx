import React from "react";
import "./header.css";

function Header() {
	return (
		<div className='header'>
			<p>
				In-store Customer Experience Mapping <sub>d. 12 August 2019</sub>
			</p>
			<div className='header-right'>
				<p>Sales Manager</p>
				<p>Henrik Larsen</p>
			</div>
		</div>
	);
}

export default Header;
