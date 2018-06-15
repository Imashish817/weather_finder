import React from 'react';
import "./App.css";
import Titles from "./files/Titles.js";
import Form from "./files/Form.js";
import Weather from "./files/Weather.js";
const APIKEY="fa0582b350171f4f64a649cf109cbe04";
class App extends React.Component {
	state={
		temperature: undefined,
		tempmin: undefined,
		tempmax: undefined,
		pressure: undefined,
		windspeed: undefined,
		city: undefined,
		country: undefined,
		humidity:undefined,
		description:undefined,
		error:undefined,
	}
	getweather= async (e)=>{
		e.preventDefault();
		const city = e.target.elements.city.value;
   	    const country = e.target.elements.country.value;
		const apicall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIKEY}&units=metric`);
		const data = await apicall.json();
		console.log(data);
		if(city && country){
			this.setState({ 
			temperature : data.main.temp,
			tempmin : data.main.temp_min,
			tempmax : data.main.temp_max,
			pressure : data.main.pressure,
			windspeed : data.wind.speed,
			city: data.name,
			country:data.sys.country,
			humidity:data.main.humidity,
			description:data.weather[0].description,
			error: ""
		});
		}
		else{
			this.setState({ 
			temperature : undefined,
			tempmin : undefined,
			tempmax : undefined,
			pressure : undefined ,
			windspeed : undefined,
			city: undefined,
			country:undefined,
			humidity: undefined,
			description:undefined,
			error: "please enter something.................."
			});
		}
		
    }
  	render() {
    	return (
    	    <div >
	    	  	<div class="row">
	    	  		<div class="column"><Titles/>
	    	  		</div>
	        		<div class="column">
	        			
		        		<Form getweather={this.getweather} />
		        		<div class="form">
		        		<Weather
			            	temperature= {this.state.temperature}
				        	tempmin={ this.state.tempmin}
							tempmax={this.state.tempmax}
							pressure= {this.state.pressure}
							windspeed= {this.state.windspeed}
							city= {this.state.city}
							country={this.state.country}
							humidity={this.state.humidity}
							description={this.state.description}
							error= {this.state.error}
						    />
						 </div>
	                </div>
	             </div>

             </div>
      );
  }
};

export default  App;
