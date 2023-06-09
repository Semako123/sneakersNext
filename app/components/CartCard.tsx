import Button from "./Button";
import { prod1thumb, deleteIco } from "../assets";
import { cartInterface } from "../page";
import Image from "next/image";

interface cartCardInterface {
	cart: cartInterface[];
	setCart: React.Dispatch<React.SetStateAction<cartInterface[]>>;
}

const CartCard = ({ cart, setCart }: cartCardInterface) => {
	return (
		<div>
			<div className="absolute w-full sm:w-[350px] h-[260px] shadow-2xl rounded-lg sm:left-[-185px] bg-white left-[-10px] top-[80px] sm:top-[50px] z-50">
				<h6 className="m-6 font-bold">Cart</h6>
				<hr />
				{cart[0].name ? (
					<>
						<div className="p-6 flex gap-2 items-center">
							<div>
								<Image src={prod1thumb} alt="" className="h-12 w-12 rounded" />
							</div>
							<div className="w-[70%]">
								<p className="text-sm text-gray-600">{cart[0].name}</p>
								<p className="text-gray-600">
									${cart[0].price!.toFixed(2)}
									{" x "}
									{cart[0].quantity}
									<span className="text-black font-bold ml-2">
										${(cart[0].price! * cart[0].quantity!).toFixed(2)}
									</span>{" "}
								</p>
							</div>
							<div
								onClick={() => {
									setCart([{ name: null, quantity: 0, price: null }]);
								}}>
								<Image src={deleteIco} alt="" />
							</div>
						</div>
						<div className="flex justify-center p-6	">
							<Button active={true} flow>
								Checkout
							</Button>
						</div>
					</>
				) : (
					<div className="grid place-items-center h-[60%] font-bold text-slate-500">
						<p>Your cart is empty</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default CartCard;
