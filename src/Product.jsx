import React from "react";

const Product = ({ product, cart, setCart }) => {
	const handleCart = (product, action) => {
		switch (action) {
			case "ADD_TO_CART":
				console.log(product, "added to cart");
				console.log([...cart, product], "cart list");
				setCart((prev) => [...prev, product]);
				break;

			case "REMOVE_FROM_CART":
				console.log(product, "removed from cart");
				console.log([...cart.filter((item) => item.id !== product.id)], "cart list");
				setCart((prev) => [...prev.filter((item) => item.id !== product.id)]);
				break;

			default:
				console.log("Undefined function");
		}
	};

	const isItemInCart = cart.find((item) => item.id === product.id);

	return (
		<div className="p-6 border-2 border-blue-700 flex flex-col">
			<h2>Name: {product.name}</h2>
			<h3>Price: {product.price}</h3>

			<div className="flex flex-col gap-2 mt-6">
				<button
					disabled={isItemInCart}
					className={`${
						isItemInCart ? "opacity-50" : "opacity-100"
					} inline-flex px-4 py-1 cursor-pointer hover:bg-blue-700 bg-blue-600 text-black border-blue-900 border text-sm justify-center`}
					onClick={() => handleCart(product, "ADD_TO_CART")}
				>
					Add to cart
				</button>
				<button
					disabled={!isItemInCart}
					className={`${
						!isItemInCart ? "opacity-50" : "opacity-100"
					} inline-flex px-4 py-1 cursor-pointer hover:bg-blue-700 bg-blue-600 text-black border-blue-900 border text-sm justify-center`}
					onClick={() => handleCart(product, "REMOVE_FROM_CART")}
				>
					Remove to cart
				</button>
			</div>
		</div>
	);
};

export default Product;
