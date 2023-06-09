"use client"
import { useState, useEffect } from "react";
import { Navbar, Product } from "./components";
import HighLightBox from "./components/HighLightBox";

export interface cartInterface {
	name: string | null;
	quantity: number | null;
	price: number | null;
}

function Home() {
	const [highLightBox, setHighLightBox] = useState(false);
	const [cart, setCart] = useState<cartInterface[]>([
		{ name: null, quantity: 0, price: null },
	]);

	const [windowWidth, setWindowWidth] = useState(1000);

	useEffect(() => {
		setWindowWidth(window.innerWidth);
	},[])

	useEffect(() => {
		// Function to be executed on window resize
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		// Attach event listener for window resize
		window.addEventListener("resize", handleResize);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [windowWidth]);

	return (
		<div className="max-w-[1440px] m-auto flex flex-col">
			<Navbar cart={cart} setCart={setCart} windowWidth={windowWidth} />
			<Product
				setHighLightBox={setHighLightBox}
				setCart={setCart}
				windowWidth={windowWidth}
			/>
			{highLightBox && <HighLightBox setHighLightBox={setHighLightBox} />}
		</div>
	);
}

export default Home;
