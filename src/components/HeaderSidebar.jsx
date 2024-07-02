import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
const HeaderSidebar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(true);

	return (
		<>
			<Header
				menuStatus={isMenuOpen}
				toggleMenu={setIsMenuOpen}
			/>
			<Sidebar menuStatus={isMenuOpen} />
		</>
	);
};

export default HeaderSidebar;
