import React from "react";
import map from "./activityMap.png";

const activityStyle = {
	minWidth: "60%"
};
function ActivityMap() {
	return (
		<div style={activityStyle}>
			<img src={map} alt='activityMap' />
		</div>
	);
}

export default ActivityMap;
