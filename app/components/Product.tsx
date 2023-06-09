import ProdDetail from "./ProdDetail";
import { MobileLightBox, ProdLightBox } from ".";
import { cartInterface } from "../page";

interface productInterface {
	setHighLightBox: React.Dispatch<React.SetStateAction<boolean>>;
	setCart: React.Dispatch<React.SetStateAction<cartInterface[]>>;
	windowWidth: number;
}

const Product = ({
	setHighLightBox,
	setCart,
	windowWidth,
}: productInterface) => {
	return (
		<div className="flex flex-wrap sm:my-16 justify-evenly h-full items-center">
			{windowWidth > 441 ? (
				<ProdLightBox setHighLightBox={setHighLightBox} />
			) : (
				<MobileLightBox />
			)}
			<ProdDetail setCart={setCart} />
		</div>
	);
};

export default Product;
