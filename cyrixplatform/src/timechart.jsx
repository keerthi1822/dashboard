import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
/* import "./timechart.css"; */

/* const ReactHighcharts = require("react-highcharts"); */

function TimeChart() {
	const options = [
		{
			chart: {
				type: "column"
			},
			title: {
				text: "Time Distibution"
			},
			subtitle: {
				text: "A-entence"
			},
			xAxis: {
				categories: ["9", "10", "11", "12", "13", "14", "15", "16", "17", "18"],
				crosshair: true
			},
			yAxis: {
				min: 0,
				title: {
					text: "Custumers"
				}
			},
			credits: {
				enabled: false
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
					data: [4, 7, 1, 1, 1, 1, 1, 1, 2, 1, 9, 5]
				},
				{
					name: "Female",
					data: [8, 7, 9, 9, 1, 8, 1, 1, 9, 8, 1, 9]
				}
			]
		},

		{
			chart: {
				type: "column"
			},
			title: {
				text: "Time"
			},
			subtitle: {
				text: "B-vestside"
			},
			xAxis: {
				categories: ["9", "10", "11", "12", "13", "14", "15", "16", "17", "18"],

				crosshair: true
			},
			yAxis: {
				min: 0,
				title: {
					text: "Customers"
				}
			},
			credits: {
				enabled: false
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
					data: [4, 7, 1, 5, 1, 4, 3, 2, 2, 1]
				},
				{
					name: "Female",
					data: [6, 6, 5, 9, 0, 3, 4, 1, 3, 5]
				}
			]
		},
		{
			chart: {
				type: "column"
			},
			title: {
				text: "Time"
			},
			subtitle: {
				text: "c-side northvest"
			},
			xAxis: {
				categories: ["9", "10", "11", "12", "13", "14", "15", "16", "17", "18"],

				crosshair: true
			},
			yAxis: {
				min: 0,
				title: {
					text: "Customers"
				}
			},
			credits: {
				enabled: false
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
					data: [4, 7, 1, 12, 1, 1, 3, 5, 2, 1]
				},
				{
					name: "Female",
					data: [6, 8, 5, 9, 0, 4, 1, 3, 2, 5]
				}
			]
		}
	];

	/* let charts = options.map(chart => {
		console.log(chart);
		return chart;
	}); */
	let i = 1;
	return (
		<div className='time' key={i++}>
			{options.map(chart => (
				<HighchartsReact highcharts={Highcharts} options={chart} />
			))}
		</div>
	);
}

export default TimeChart;
