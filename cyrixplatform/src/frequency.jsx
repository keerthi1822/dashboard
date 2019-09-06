import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
/* import "./frequency.css"; */

/* const ReactHighcharts = require("react-highcharts"); */

function Frequency() {
	const options = {
		chart: {
			type: "pie"
		},
		title: {
			text: "Frequency Distribution"
		},
		subtitle: {
			text: "Frequency"
		},
		credits: {
			enabled: false
		},
		plotOptions: {
			pie: {
				innerSize: 130,
				depth: 45
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
