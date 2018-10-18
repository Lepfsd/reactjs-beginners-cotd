import React from 'react';

class EditFishForm extends React.Component {

	handleChange = event => {
		const updatedFish = {
			...this.props.fish,
			[event.currentTarget.name]: event.currentTarget.value
		};
		this.props.updateFish(this.props.index, updatedFish);
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
			</div>
		);
	}
}

export default EditFishForm;