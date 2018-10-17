import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component 
{	
	state = {
		fishes: {},
		order: {}
	}

	addFish = fish => {
		console.log('adding fish');
		const fishes = { ...this.state.fishes };
		fishes[`fish${Date.now()}`] = fish;
		this.setState({
			fishes
		});
	}; 

	loadSampleFishes = () => {
		this.setState({ fishes: sampleFishes });
	};

	addToOrder = key => {
		const order = { ...this.state.order };
		order[key] = order[key] + 1 || 1;
		this.setState({ order });
	}
	
	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" age={500} cool={true}/>
					<ul className="fishes">
						{Object.keys(this.state.fishes).map(key => (
							<Fish key={key} details={this.state.fishes[key]}/>
						))}
					</ul>
				</div>
				<Order />
				<Inventory 
					addFish={this.addFish} 
					loadSampleFishes={this.loadSampleFishes}
				/>
			</div>
		);
	}
}

export default App;