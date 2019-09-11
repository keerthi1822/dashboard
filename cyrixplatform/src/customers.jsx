import React from "react";
import map from "./customnumber.png";

const customers = {
	/* width: "100%",
	margin: "1%", */
	/* border: "1px solid black", */
	minWidth: "30%"
};

function Customers() {
	return (
		<div style={customers}>
			<img src={map} alt='customersMap' width='300px' />
		</div>
	);
}

export default Customers;
