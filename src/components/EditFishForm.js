import React from 'react';
import { throws } from 'assert';
import PropTypes from 'prop-types';

class EditFishForm extends React.Component {

	handleChange = event => {
		const updatedFish = {
			...this.props.fish,
			[event.currentTarget.name]: event.currentTarget.value
		};
		this.props.updateFish(this.props.index, updatedFish);
	};

	static propTypes = {
		fish: PropTypes.shape({
			image: PropTypes.string,
			name: PropTypes.string,
			price: PropTypes.number,
			desc: PropTypes.string,
			status:PropTypes.string
		}),
		index: PropTypes.string,
		updatedFish: PropTypes.func
	};

	render() {
		return (
			<div className="fish-edit">
				<input name="name"  type="text" onChange={this.handleChange} value={this.props.fish.name} />	
				<input name="price"  type="text" onChange={this.handleChange} value={this.props.fish.price}  />
				<select name="status" onChange={this.handleChange}> 
					<option value="avaliable">fresh!</option>
					<option value="unavaliable">sold out!</option>
				</select>
				<textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc}></textarea>
				<input name="image" onChange={this.handleChange} type="text" value={this.props.fish.image} />
				<button onClick={() => this.props.deleteFish(this.props.index)} >Remove fish</button>
			</div>
		);
	}
}

export default EditFishForm;