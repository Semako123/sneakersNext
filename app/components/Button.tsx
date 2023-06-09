import { MouseEventHandler, ReactNode } from "react";

interface buttonInterface {
	children: ReactNode;
	active: boolean;
	flow?: boolean;
	onClick?: MouseEventHandler;
}

const Button = ({ children, active, flow, onClick }: buttonInterface) => {
	return (
		<button
			onClick={onClick}
			className={`${active ? "bg-orange" : "bg-light-orange"} ${
				flow ? "w-full" : ""
			} grid place-items-center rounded-lg text-white min-w-[275px] shadow-sh-orange active:scale-90 transition-all min-h-[45px]`}>
			{children}
		</button>
	);
};

export default Button;
