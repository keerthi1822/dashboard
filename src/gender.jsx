import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
/* import "./gender.css"; */

/* const ReactHighcharts = require("react-highcharts"); */

function Gender() {
	const componentStyle = {
		margin: "4px",
		minWidth: "30%"
	};
	const options = {
		chart: {
			type: "pie",
			margin: 0,
			/* spacingTop: 0,
			spacingBottom: 0,
			spacingLeft: 0,
			spacingRight: 0, */

			// Explicitly tell the width and height of a chart
			width: 300,
			height: 200
		},
		title: {
			text: "Gender Distribution"
		},
		credits: {
			enabled: false
		},
		plotOptions: {
			pie: {
				size: "50%",
				innerSize: "80%",
				depth:
					"90%" /* ,
				dataLabels: {
					enabled: false,
					distance: -14,
					color: "white",
					style: {
						fontweight: "bold",
						fontsize: 50
					}
				} */
			}
		},
		series: [
			{
				data: [["Male", 38], ["Female", 22]]
			}
		]
	};
	return (
		<div className='gender' style={componentStyle}>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	);
}
export default Gender;
