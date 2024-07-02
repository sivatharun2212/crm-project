import React from "react";
import comingSoon from "../assets/coming soon.jpg";
import HeaderSidebar from "../components/HeaderSidebar";

const Home = () => {
	return (
		<div className="h-screen w-screen">
			<HeaderSidebar />
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
