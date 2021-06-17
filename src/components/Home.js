import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	// home page feature
	const limitImgContainer = 16;
	const [imgs, setImgs] = useState([]);

	useEffect(() => {
		fetchImgItems(limitImgContainer);
	}, []);

	const fetchImgItems = async (nb) => {
		const imgs = [];
		for (let i = 1; i <= nb; i++) {
			const response = await fetch(`https://pokeapi.co/api/v2/item/${i}/
        `);
			const img = await response.json();
			const id = img.id;
			const name = img.name;
			const sprite = img.sprites.default;
			imgs.push({ id, name, sprite });
		}
		setImgs(imgs);
	};

	return (
		<div className="home-page">
			<div className="left">
				<h1>Selected items for your convenience!</h1>
				<Link className="nav-style" to="/shop">
					<button className="btn home-btn">Shop Now</button>
				</Link>
			</div>
			<div className="right">
				{imgs.map((img) => (
					<div className="img-sprite" key={img.id}>
						<img src={img.sprite} alt={img.name} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
