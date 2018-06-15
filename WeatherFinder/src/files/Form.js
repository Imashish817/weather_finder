import React from 'react';

class Form extends React.Component{
	render(){
		return(
					<form onSubmit={this.props.getweather}>
						<input type="text" name ="city" placeholder="City..." class="text"/>
						<input type="text" name ="country" placeholder="Country..." class="text"/>
						<button>get weather</button>
					</form>
				
			);
	}
};
export default Form;