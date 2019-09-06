import React from "react";
import Customers from "./customers";
import Frequency from "./frequency";
import Age from "./age";
import TimeChart from "./timechart";
import Gender from "./gender";
import ActivityMap from "./activityMap";
import "./dashboard.css";
import Header from "./header";

function DashBoard() {
	const pStyle = {
		margin: "0",
		fontSize: "15px",
		textAlign: "center",
		padding: "5px"
	};
	const componentStyle = {
		margin: "4px",
		width: "50%"
	};

	return (
		<div className='fullpage'>
			<p className='text' style={pStyle}>
				Cyrix Experience Platform
			</p>
			<Header />
			<div className='flex'>
				<div className='main flex'>
					{/* g-gender,f-frequency,a-activity,c-customers,a-age */}
					<div className='gfaca flex'>
						{/* gf and ac ,g-gender,f-frequency,a-activity,c-customers*/}
						<div className='gfandac flex'>
							<div className='flex gf'>
								<Gender style={componentStyle} />
								<Frequency style={componentStyle} />
							</div>
							<div className='flex ac'>
								<ActivityMap style={componentStyle} />
								<Customers style={componentStyle} />
							</div>
						</div>
						<Age style={componentStyle} />
					</div>
					<TimeChart style={componentStyle} />
				</div>
			</div>
		</div>
	);
}

export default DashBoard;
