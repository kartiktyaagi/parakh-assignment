import { useState } from "react";
import data from "./data.json";
import Product from "./Product";

function App() {
	const products = [...data.data];

	const [cart, setCart] = useState([]);

	return (
		<div className="px-10 my-10">
			{products.map((category) => (
				<div key={category.name}>
					<h1 className="font-semibold text-xl">{category.name}</h1>
					<div className="w-full border-b-2 border-black" />
					<div className="flex gap-4 my-4">
						{category.productList.map((product) => (
							<Product
								key={product.id}
								product={product}
								cart={cart}
								setCart={setCart}
							/>
						))}
					</div>
				</div>
			))}
		</div>
	);
}

export default App;
