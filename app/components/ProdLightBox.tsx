import React, { useState } from "react";
import {
	prod1thumb,
	prod2thumb,
	prod3thumb,
	prod4thumb,
	prod1,
	prod2,
	prod3,
	prod4,
} from "../assets";
import Image from "next/image";

const ProdLightBox = ({
	setHighLightBox,
}: {
	setHighLightBox: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const thumbnails = [prod1thumb, prod2thumb, prod3thumb, prod4thumb];
	const images = [prod1, prod2, prod3, prod4];

	const handleThumbClick = (index: number) => {
		setCurrentIndex(index);
	};

	const [currentIndex, setCurrentIndex] = useState(0);

	return (
		<div className="flex flex-col gap-10 items-center h-full">
			<div
				className="hover:cursor-zoom-in"
				onClick={() => {
					setHighLightBox(true);
				}}>
				<Image
					src={images[currentIndex]}
					alt=""
					className="w-[400px] h-[400px] rounded-3xl"
				/>
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

export default ProdLightBox;
