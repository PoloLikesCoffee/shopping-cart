import React from 'react';

const ShopItem = ({ product, id, addToCart, capitalizeFirstLetter }) => {
	const checkDescriptionLength = (text) => {
		if (text.length > 39) {
			return <p className="long-text">{text}</p>;
		} else if (text.length > 30 && text.length <= 39) {
			return <p className="medium-text">{text}</p>;
		} else {
			return <p className="short-text">{text}</p>;
		}
	};

	return (
		<div className="product">
			<div className="img-container">
				<img src={product.sprite} alt={product.name} />
			</div>

			<h3>{capitalizeFirstLetter(product.name)}</h3>
			{checkDescriptionLength(product.description)}
			<span>
				<div className="poke-sign">₽</div>
				{product.cost}
			</span>
			<button
				className="btn product-btn"
				data-product={id}
				data-price={product.cost}
				data-quantity={1}
				onClick={addToCart}
			>
				Add to cart
			</button>
		</div>
	);
};

export default ShopItem;
