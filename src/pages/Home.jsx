import React, { useState } from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import comingSoon from "../assets/coming soon.jpg";
const Home = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<div className="h-screen w-screen">
			<Header
				menuStatus={isMenuOpen}
				setMenu={setIsMenuOpen}
			/>
			<Sidebar menuStatus={isMenuOpen} />
			<section className="w-full h-[90%] flex justify-center items-center bg-blue-100">
				<img
					className="w-[80%]"
					src={comingSoon}
					alt=""
				/>
			</section>
		</div>
	);
};

export default Home;
