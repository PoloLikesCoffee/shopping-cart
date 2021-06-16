import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ cartItemsQty }) => {
	return (
		<nav>
			<h2>Shopping Cart</h2>
			<ul className="nav-links">
				<Link className="nav-style" to="/">
					<li>Home</li>
				</Link>
				<Link className="nav-style" to="/shop">
					<li>Shop</li>
				</Link>
				<Link className="nav-style" to="/cart">
					<li className="nav-cart">
						{/* <i className="fas fas-shopping-cart"></i> */} Cart
						<div className="counter-cart">{cartItemsQty}</div>
					</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Nav;
