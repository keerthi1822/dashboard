import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
/* import "./age.css"; */

function Age() {
	const options = {
		chart: {
			width: 600,
			height: 300
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
			series: {
				groupPadding: 0
			},
			column: {
				pointPadding: 0.2,
				borderWidth: 0
			}
		},
		series: [
			{
				name: "age",
				data: [4, 7, 1, 7, 3, 8, 1, 5, 2, 1, 9, 5, 1, 2, 0],
				type: "column"
			}
		],
		responsive: {
			rules: {
				condition: {
					maxWidth: 500,
					callback() {
						return true;
					}
				},
				chartOptions: {
					legend: { enabled: false },
					yAxis: { title: { text: "" } }
				}
			}
		}
	};

	return (
		<div className='age'>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	);
}

export default Age;
