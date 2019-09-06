import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
/* import "./gender.css"; */

/* const ReactHighcharts = require("react-highcharts"); */

function Gender() {
	const options = {
		chart: {
			type: "pie"
		},
		title: {
			text: "Gender Distribution"
		},
		subtitle: {
			text: "Gender"
		},
		credits: {
			enabled: false
		},
		plotOptions: {
			pie: {
				innerSize: 150,
				depth: 45
			}
		},
		series: [
			{
				data: [["Male", 38], ["Female", 22]]
			}
		]
	};
	return (
		<div className='gender'>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	);
}
export default Gender;
