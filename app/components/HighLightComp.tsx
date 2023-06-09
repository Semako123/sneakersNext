import { useState } from "react";
import {
	prod1thumb,
	prod2thumb,
	prod3thumb,
	prod4thumb,
	prod1,
	prod2,
	prod3,
	prod4,
	prevIco,
	nextIco,
} from "../assets";
import Image from "next/image";

const HighLightComp = () => {
	const thumbnails = [prod1thumb, prod2thumb, prod3thumb, prod4thumb];
	const images = [prod1, prod2, prod3, prod4];

	const handleThumbClick = (index: number) => {
		setCurrentIndex(index);
	};

	const handlePrev = () => {
		setCurrentIndex((state) => (state > 0 ? (state -= 1) : images.length - 1));
	};
	const handleNext = () => {
		setCurrentIndex((state) => (state + 1 < images.length ? (state += 1) : 0));
	};

	const [currentIndex, setCurrentIndex] = useState(0);
	return (
		<div className="flex flex-col gap-10 items-center">
			<div className="flex items-center">
				<div
					className="h-14 w-14 cursor-pointer rounded-full grid place-items-center bg-white"
					onClick={handlePrev}>
					<Image src={prevIco} alt="" className="h-6" />
				</div>
				<Image
					src={images[currentIndex]}
					alt=""
					className="w-[400px] h-[400px] rounded-3xl mx-[-20px] -z-10"
				/>
				<div
					className="h-14 w-14 cursor-pointer rounded-full grid place-items-center bg-white"
					onClick={handleNext}>
					<Image src={nextIco} alt="" className="h-6" />
				</div>
			</div>
			<div className="flex gap-6">
				{thumbnails.map((thumbnail, index) => (
					<div
						key={index}
						className={`${
							currentIndex === index
								? "bg-light-opacity-blur border-orange border-2"
								: "hover:bg-light-opacity"
						} hover:cursor-pointer rounded-md overflow-hidden w-20 h-20 relative`}
						onClick={() => {
							handleThumbClick(index);
						}}>
						<Image src={thumbnail} alt="" className="absolute w-20 h-20 -z-10" />
					</div>
				))}
			</div>
		</div>
	);
};

export default HighLightComp;
