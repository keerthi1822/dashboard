import React from "react";
/* import { Row, Col, Container } from "react-bootstrap"; */
import Customers from "./customers";
import Frequency from "./frequency";
import Age from "./age";
import TimeChart from "./timechart";
import Gender from "./gender";
import ActivityMap from "./activityMap";
import "./dashboard.css";
import Header from "./header";
import Navigation from "./navigation";

function DashBoard() {
	/* return (
		<Container fluid={true}>
			<Row>
				<Col xs={2}>col</Col>
				<Col xs={1}></Col>
				<Col>
					<Row>
						<Col>
							<Row>
								<Col xs={9} md={6} lg={3}>
									<Gender />
								</Col>
							</Row>
							<Row>
								<Col xs={9} md={6} lg={3}>
									<Frequency />
								</Col>
							</Row>
						</Col>
						<Col>
							<Row>
								<Col xs={9} md={6} lg={3}>
									<ActivityMap />
								</Col>
							</Row>
							<Row>
								<Col xs={9} md={6} lg={3}>
									<Customers />
								</Col>
							</Row>
						</Col>
					</Row>
					<Row>
						<Col xs={9} lg={6}>
							<Age />
						</Col>
					</Row>
				</Col>
				<Col xs={9} md={6} lg={3}>
					<TimeChart />
				</Col>
			</Row>
		</Container> 
	);*/
	const pStyle = {
		width: "100%",
		margin: "0",
		fontSize: "100%",
		textAlign: "center",
		padding: "5px"
	};
	/* 	const componentStyle = {
		margin: "4px",
		minWidth: "25%"
	}; */
	return (
		/* 	<section className='viewsize'> */
		<div className='container'>
			<p className='text' style={pStyle}>
				Cyrix Experience Platform
			</p>
			<Header />
			<section className='flex'>
				<section className='main flex'>
					<Navigation />

					{/* g-gender,f-frequency,a-activity,c-customers,a-age */}
					<section className='gfaca flex'>
						{/* gf and ac ,g-gender,f-frequency,a-activity,c-customers */}
						<section className='gfandac flex'>
							<section className='flex gf'>
								<section>
									<Gender />
								</section>
								<section>
									<Frequency />
								</section>
							</section>
							<section className='flex ac' width='300px'>
								<section>
									<ActivityMap />
								</section>
								<section>
									<Customers />
								</section>
							</section>
						</section>
						<Age />
					</section>
					<TimeChart />
				</section>
			</section>
		</div>
		/* 	</section> */
	);
}

export default DashBoard;
