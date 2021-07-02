import React, { useState } from 'react';
import Nav from './components/Nav';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Home from './components/Home';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
	const [cart, setCart] = useState([]);
	const cartItemsQty = cart.reduce((acc, cur) => acc + cur.quantity, 0);
	const totalPrice = cart
		.map((item) => item.price * item.quantity)
		.reduce((a, b) => a + b, 0);
	const totalQuantity = cart
		.map((item) => item.quantity)
		.reduce((a, b) => a + b, 0);

	const addToCart = (event) => {
		// console.log(event.target.parentNode.querySelector('h3').innerText);
		const product = event.target.dataset.product;
		const quantity = parseInt(event.target.dataset.quantity);
		const price = event.target.dataset.price;
		const id = event.target.dataset.product;
		const sprite = event.target.parentNode.querySelector('img').src;
		const name = event.target.parentNode.querySelector('h3').innerText;
		const productItem = {
			product,
			quantity,
			price,
			id,
			sprite,
			name,
		};

		const inCart = cart
			.map((item) => item.product)
			.includes(productItem.product);
		if (inCart) {
			// console.log('already in the cart');
			updateQuantity(id, 1);
		} else {
			setCart([...cart, productItem]);
		}
	};

	const deleteCartItem = (id) => {
		setCart(() => {
			const remainingCart = cart.filter((item) => item.id !== id);
			return remainingCart;
		});
	};

	const updateQuantity = (id, amount) => {
		// console.log('update by ' + amount + ' quantity of ' + id);
		setCart(
			cart.map((item) => {
				if (item.id === id) {
					return { ...item, quantity: item.quantity + amount };
				} else {
					return item;
				}
			})
		);
	};

	const capitalizeFirstLetter = (word) => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	};

	const checkout = () => {
		alert('Thanks you for visiting our online shop!');
		setCart([]);
	};

	return (
		<Router basename="/">
			<div className="App">
				<Nav cartItemsQty={cartItemsQty} />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/shop">
						<Shop
							addToCart={addToCart}
							capitalizeFirstLetter={capitalizeFirstLetter}
						/>
					</Route>
					<Route path="/cart">
						<Cart
							cart={cart}
							deleteCartItem={deleteCartItem}
							capitalizeFirstLetter={capitalizeFirstLetter}
							totalPrice={totalPrice}
							totalQuantity={totalQuantity}
							checkout={checkout}
							updateQuantity={updateQuantity}
						/>
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

// const Home = () => (
// 	<div className="home-page">
// 		<h1>Home Page</h1>
// 		<Link className="nav-style" to="/shop">
// 			<button className="btn home-btn">Shop Now</button>
// 		</Link>
// 	</div>
// );

export default App;
