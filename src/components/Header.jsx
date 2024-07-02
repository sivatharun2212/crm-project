import React from "react";
import menuIcon from "../assets/menuIcon.png";

const Header = ({ menuStatus, toggleMenu }) => {
	const handleMenu = () => {
		toggleMenu(!menuStatus);
	};
	return (
		<header className="w-full h-[8%] flex justify-between items-center px-6 shadow-lg bg-white">
			<div>
				<img
					className="w-4"
					onClick={handleMenu}
					src={menuIcon}
					alt="menu"
				/>
				{/* <button onClick={handleMenu}>Menu</button> */}
			</div>
			<div className="w-8 h-8 bg-slate-600 rounded-full"></div>
		</header>
	);
};

export default Header;
