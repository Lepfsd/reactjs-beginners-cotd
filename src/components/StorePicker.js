import React, { Fragment } from 'react';
import { getFunName } from '../helpers';
import PropTypes from 'prop-types';

class StorePicker extends React.Component 
{	
	static propTypes = {
		history: PropTypes.object
	};

	myInput = React.createRef();

	goToStore = event => {
		event.preventDefault();
		const storeName = this.myInput.value.value;
		this.props.history.push(`/store/${ storeName }`);
	};

	render() {
		return (
			<Fragment>
				<p>Fish!</p>
				<form className="store-selector" onSubmit={this.goToStore}>
					<h2>Please enter a store</h2>
					
					<input 
						type="text" 
						required 
						placeholder="Store name" 
						defaultValue={getFunName()}
						ref={this.myInput}/>
					<button type="submit">Visit Store</button>
				</form>
			</Fragment>
		)
	}
}

export default StorePicker;