import React from 'react';
import { formatPrice } from '../helpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

class Order extends React.Component 
{	

	static propTypes = {
		fishes: PropTypes.object,
		order: PropTypes.object,
		removeFromOrder: PropTypes.func
	};

	renderOrder = key => {
		const fish = this.props.fishes[key];
		const count = this.props.order[key]; 
		if(!fish) return null;
		const isAvailable = fish && fish.status === 'available';
		if(!isAvailable) {
			return (
				<CSSTransition classNames="order" key={key} timeout={{ enter: 500, exit: 500}}>
					<li key={key}>
						Sorry { fish ? fish.name : 'fish' } is not longer available
					</li>
				</CSSTransition>
			);
		} 
		return (
			<CSSTransition classNames="order" key={key} timeout={{ enter: 500, exit: 500}}>
				<li key={key}>
					<span>
						<TransitionGroup component="span" classNames="count">
							<CSSTransition classNames="count" key={count} timeout={{ enter: 500, exit: 500}}>
								<span>{count}</span>
							</CSSTransition>
						</TransitionGroup>
						
						 lbs {fish.name} {formatPrice(count * fish.price)}
						<button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
					</span>
				</li>
			</CSSTransition>
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
				<TransitionGroup component="ul" className="order">
					{ordersId.map(this.renderOrder)}
				</TransitionGroup>
				<div className="total">
				Total: 
				<strong>{formatPrice(total)}</strong>
				</div>
			</div>	
		);
	}
}

export default Order;