import React, { useState } from "react";
import { prod1, prod2, prod3, prod4, prevIco, nextIco } from "../assets";
import Image from "next/image";

const MobileLightBox = () => {
	const images = [prod1, prod2, prod3, prod4];

	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => {
		setCurrentIndex((state) =>
			state + 1 < images.length ? (state += 1) : 0
		);
	};

	const handlePrev = () => {
		setCurrentIndex((state) => (state === 0 ? images.length - 1 : (state -= 1)));
	};

	return (
		<div className="w-full flex relative">
			<div
				className="bg-white h-10 w-10 rounded-full absolute left-3 top-[calc(50%-2.5rem)] grid place-items-center"
				onClick={handlePrev}>
				<Image src={prevIco} alt="" />
			</div>
			<Image src={images[currentIndex]} alt="" className="w-full" />
			<div
				className="bg-white h-10 w-10 rounded-full absolute right-3 top-[calc(50%-2.5rem)] grid place-items-center"
				onClick={handleNext}>
				<Image src={nextIco} alt="" />
			</div>
		</div>
	);
};

export default MobileLightBox;
