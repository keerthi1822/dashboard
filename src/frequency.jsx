import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
/* import "./frequency.css"; */

/* const ReactHighcharts = require("react-highcharts"); */

function Frequency() {
	/* 	const componentStyle = {
		margin: "4px",
		position: "absolute",
		minWidth: "50%"
	}; */

	const options = {
		chart: {
			type: "pie",
			margin: [0, 0, 0, 15],
			spacingTop: 0,
			spacingBottom: 0,
			spacingLeft: 0,
			spacingRight: 0,

			// Explicitly tell the width and height of a chart
			width: 300,
			height: 200
		},
		title: {
			text: "Frequency Distribution"
		},
		credits: {
			enabled: false
		},
		plotOptions: {
			pie: {
				size: "50%",
				innerSize: "80%",
				depth: "90%"
			}
		},
		series: [
			{
				data: [["Already visited", 11], ["First visit", 49]]
			}
		]
	};
	return (
		<div className='frequency'>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	);
}

export default Frequency;
