import React from "react";
import comingSoon from "../assets/coming soon.jpg";
import HeaderSidebar from "../components/HeaderSidebar";
import { useSelector } from "react-redux";

const Home = () => {
	const sidebarState = useSelector((state) => state.sidebarOpen);

	return (
		<div className="h-screen w-screen">
			<HeaderSidebar />
			<section
				className={`${
					sidebarState.sidebarIsOpen ? "w-[88%]" : "w-full"
				} px-4 h-[90%] absolute right-0 bg-[rgb(241,241,240)]`}>
				<img
					className="w-[60%]"
					src={comingSoon}
					alt=""
				/>
			</section>
		</div>
	);
};

export default Home;
