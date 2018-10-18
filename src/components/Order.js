import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component 
{
	renderOrder = key => {
		const fish = this.props.fishes[key];
		const count = this.props.order[key]; 
		if(!fish) return null;
		const isAvailable = fish && fish.status === 'available';
		if(!isAvailable) {
			return <li key={key}>
				Sorry { fish ? fish.name : 'fish' } is not longer available
			</li>;
		} 
		return (
			<li key={key}>
				{count} lbs {fish.name} {formatPrice(count * fish.price)}
			</li>
		);
	};
	render() {
		const ordersId = Object.keys(this.props.order);
		const total = ordersId.reduce((prevTotal, key) => {
			const fish = this.props.fishes[key];
			const count = this.props.order[key];
			const isAvailable = fish && fish.status === 'available';
			if(isAvailable) {
				return prevTotal + (count * fish.price);
			} 
			return prevTotal;
		}, 0);
		return(
			<div className="order-wrap">
				<h2>Order</h2>
				<ul className="order">{ordersId.map(this.renderOrder)}</ul>
				<div className="total">
				Total: 
				<strong>{formatPrice(total)}</strong>
				</div>
			</div>	
		);
	}
}

export default Order;