import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
/* import "./age.css"; */

function Age() {
	const options = {
		chart: {
			type: "column"
		},
		title: {
			text: "Age distribution"
		},
		subtitle: {
			text: "Age"
		},
		credits: {
			enabled: false
		},
		xAxis: {
			categories: [
				"18",
				"24",
				"28",
				"32",
				"38",
				"45",
				"50",
				"55",
				"58",
				"63",
				"70"
			],
			crosshair: true
		},
		yAxis: {
			min: 0,
			title: {
				text: "No of customers"
			}
		},
		tooltip: {
			headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
			pointFormat:
				'<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				'<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
			footerFormat: "</table>",
			shared: true,
			useHTML: true
		},
		plotOptions: {
			column: {
				pointPadding: 0.2,
				borderWidth: 0
			}
		},
		series: [
			{
				name: "Male",
				data: [4, 7, 1, 7, 3, 8, 1, 5, 2, 1, 9, 5, 1, 2, 0]
			} /* ,
			{
				name: "Female",
				data: [8, 7, 9, 9, 1, 8, 1, 1, 9, 8, 1, 9, 2, 1, 1]
			} */
		]
	};

	return (
		<div className='age'>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	);
}

export default Age;
