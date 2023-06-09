"use client"

import { closeIco2, menuIco } from "../assets";
import { avatar, cartIco, logo } from "../assets";
import { useState } from "react";
import CartCard from "./CartCard";
import { cartInterface } from "../page";
import Image from "next/image";

interface navbarProps {
	cart: cartInterface[];
	setCart: React.Dispatch<React.SetStateAction<cartInterface[]>>;
	windowWidth: number;
}

const Navbar = ({ cart, setCart, windowWidth }: navbarProps) => {
	const [cartToggle, setCartToggle] = useState<boolean>(false);
	const [navToggle, setNavToggle] = useState<boolean>(false);
	const handleCartClick = () => {
		setCartToggle((state) => !state);
	};
	const navLinks: string[] = ["Collection", "Men", "Women", "About", "Contact"];

	return (
		<>
			<nav className="flex items-center sm:border-b-[1px] mx-5 py-4 px-2 sm:p-0 relative sm:static">
				<div
					className="sm:hidden mr-4 w-10 grid place-items-center"
					onClick={() => setNavToggle(true)}>
					<Image src={menuIco} alt="" className="h-4" />
				</div>
				<Image src={logo} alt="sneakers" />
				<div className="flex items-center w-full py-1 sm:py-0">
					<ul className="ml-12 list-none gap-6 items-center sm:flex hidden">
						{navLinks.map((links, index) => (
							<li
								key={index}
								className="text-base text-gray-500 cursor-pointer hover:font-bold hover:text-black border-transparent border-b-4 hover:border-orange py-8">
								{links}
							</li>
						))}
					</ul>
					<div
						className="ml-auto sm:mr-8 mr-4 cursor-pointer sm:relative"
						onClick={handleCartClick}>
						<Image src={cartIco} alt="cart" className="h-5 translate-y-[-1px]" />
						{cart[0].quantity! > 0 && (
							<div className="text-[10px] w-[19px] grid place-items-center bg-orange text-white rounded-lg translate-x-2 translate-y-[-27px] absolute">
								{cart[0].quantity ? cart[0].quantity : 0}
							</div>
						)}
						{cartToggle && <CartCard cart={cart} setCart={setCart} />}
					</div>

					<div className="hover:border-orange border-2 border-transparent rounded-full">
						<Image
							src={avatar}
							alt="user"
							className="sm:h-14 sm:w-14 h-6 w-6 cursor-pointer"
						/>
					</div>
				</div>
			</nav>
			{windowWidth < 441 && (
				<div
					className={`w-[65vw] h-full bg-white z-[99] top-0 absolute  ${
						navToggle ? "left-0" : "left-[-65vw]"
					} transition-all ease-in-out duration-500 pl-8 pt-8`}>
					<div
						onClick={() => {
							setNavToggle(false);
						}}>
						<Image src={closeIco2} alt="" className="h-5 w-5" />
					</div>
					<div className="flex flex-col gap-4 mt-14">
						{navLinks.map((links, index) => (
							<p key={index} className="font-bold text-xl">
								{links}
							</p>
						))}
					</div>
				</div>
			)}
		</>
	);
};

export default Navbar;
