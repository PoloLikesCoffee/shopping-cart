import React, { useState, useEffect } from 'react';
import ShopItem from './shop/ShopItem';

const Shop = ({ addToCart, capitalizeFirstLetter }) => {
	const limitProducts = 31;
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetchProducts(limitProducts);
	}, []);

	const fetchProducts = async (nb) => {
		const products = [];
		for (let i = 17; i <= nb; i++) {
			const response = await fetch(`https://pokeapi.co/api/v2/item/${i}/
            `);
			const product = await response.json();
			const name = product.name;
			const id = product.id;
			const sprite = product.sprites.default;
			const cost = product.cost;
			// const description = product.flavor_text_entries[0].text;
			const description = product.effect_entries[0].short_effect;
			// console.log(description.length);
			products.push({ name, id, sprite, cost, description });
		}
		setProducts(products);
	};

	return (
		<div className="products-container">
			{products.map((product) => (
				<ShopItem
					key={product.id}
					id={product.id}
					product={product}
					addToCart={addToCart}
					capitalizeFirstLetter={capitalizeFirstLetter}
				/>
			))}
		</div>
	);
};

export default Shop;
