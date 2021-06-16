import React from 'react';

const CartItem = ({
	item,
	id,
	deleteCartItem,
	capitalizeFirstLetter,
	updateQuantity,
}) => {
	const handleDelete = () => {
		deleteCartItem(id);
	};

	const handleDecrease = () => {
		if (item.quantity < 2) {
			handleDelete();
		} else {
			updateQuantity(id, -1);
		}
	};

	const handleIncrease = () => {
		updateQuantity(id, 1);
	};

	return (
		<div className="cart-item">
			<div className="cart-item-img-container">
				<img src={item.sprite} alt={item.name} />
			</div>

			<h3>{capitalizeFirstLetter(item.name)}</h3>

			<ul className="cart-item-details">
				<li>
					<div className="cart-item-poke-sign">₽</div>
					{item.price}
				</li>
				<li className="quantity-container">
					<button
						className="btn quantity-btn"
						// disabled={item.quantity < 2}
						onClick={handleDecrease}
					>
						-
					</button>
					<span>{item.quantity}</span>
					<button className="btn quantity-btn" onClick={handleIncrease}>
						+
					</button>
				</li>
				<li className="total-container">
					<div className="cart-item-poke-sign">₽</div>
					{item.price * item.quantity}
					<button className="btn delete" onClick={handleDelete}>
						<i className="fas fa-trash-alt"></i>
					</button>
				</li>
			</ul>
		</div>
	);
};

export default CartItem;
