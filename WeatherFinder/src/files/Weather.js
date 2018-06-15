import React from 'react';

class Weather extends React.Component{
	render(){
		return(
				<div>
					{this.props.error}
					{this.props.city && <p>City: { this.props.city }</p>}
					{this.props.country && <p>Country: { this.props.country }</p>}
					{this.props.temperature && <p>Temperature: { this.props.temperature } Kelvin</p>}
					{this.props.tempmin && <p>Minimum Temperature: { this.props.tempmin } Kelvin</p>}
					{this.props.tempmax && <p>Maximum temperature: { this.props.tempmax } Kelvin</p>}
					{this.props.pressure && <p>Pressure: { this.props.pressure }  hPa</p>}
					{this.props.windspeed && <p>Wind Speed: { this.props.windspeed } meter/sec</p>}
					{this.props.humidity && <p>Humadity: { this.props.humidity }%</p>}
					{this.props.description && <p>Description: { this.props.description }......</p>}
					
					
				</div>
		);
	}
};
export default  Weather;