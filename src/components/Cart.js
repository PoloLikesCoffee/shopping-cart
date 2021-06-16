import React from 'react';
import CartItem from './cart/CartItem';

const Cart = ({
	cart,
	deleteCartItem,
	capitalizeFirstLetter,
	totalPrice,
	totalQuantity,
	checkout,
	updateQuantity,
}) => {
	return (
		<div className="cart-container">
			<div className="cart-items-container">
				<div className="header-cart">
					<h2>Product details</h2>
					<ul className="header-cart-details">
						<li>Price</li>
						<li>Quantity</li>
						<li>Total</li>
					</ul>
				</div>
				{cart.map((item) => (
					<CartItem
						key={item.id}
						id={item.id}
						item={item}
						deleteCartItem={deleteCartItem}
						capitalizeFirstLetter={capitalizeFirstLetter}
						updateQuantity={updateQuantity}
					/>
				))}
			</div>
			<div className="order-summary-container">
				<h1>Order Summary</h1>
				<span>Number of Items = {totalQuantity}</span>
				<span>
					Total = <div className="cart-item-poke-sign">₽</div>
					{totalPrice}
				</span>
				<button className="btn" onClick={checkout}>
					Checkout
				</button>
			</div>
		</div>
	);
};

export default Cart;
