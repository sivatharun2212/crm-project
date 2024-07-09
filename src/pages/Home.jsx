import React from "react";
// import comingSoon from "../assets/coming soon.jpg";
import HeaderSidebar from "../components/HeaderSidebar";
import { useSelector } from "react-redux";
import createIcon from "../assets/add.png";
import postData from "../postData.json";
import searchIcon from "../assets/search.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	const salesTools = [
		{
			type: "Leads",
			number: 4333,
		},
		{
			type: "Prospects",
			number: 432,
		},
		{
			type: "Appointments",
			number: 158,
		},
		{
			type: "Quotes (Jul)",
			number: "+",
		},
		{
			type: "Order",
			number: "+",
		},
		{
			type: "Support",
			number: "+",
		},
		{
			type: "Contracts",
			number: "+",
		},
		{
			type: "Bulling",
			number: "+",
		},
		{
			type: "Recovery",
			number: "1,000",
		},
		{
			type: "Customers",
			number: 18,
		},
		{
			type: "Web Store",
			number: "17%",
		},
	];

	const efficiencyTools = [
		{
			type: "Prodn",
			number: "+",
		},
		{
			type: "Stock",
			number: 2,
		},
		{
			type: "Accounts (P&L)",
			number: "2,000",
		},
		{
			type: "Inbox",
			number: "+",
		},
		{
			type: "Outbox",
			number: "+",
		},
	];

	const shortcuts = [
		"Appointments",
		"Deliveries",
		"Trade Profitability",
		"Valuable Items",
		"Low Stock",
		"Credit Notes",
		"Debit Notes",
		"important Dates",
	];

	const vendors = [
		"Bank Services",
		"Chartered Accountants",
		"Company Secretaries (CS)",
		"Digital Marketing",
		"HR & Labour Consultants",
		"Legal Services",
		"Management Consultants",
		"Recruitment Services",
		"Security Services",
		"Travel",
		"Website Development",
	];

	const handleNaviagte = (type) => {
		navigate(`/${type.toLowerCase()}`);
	};
	const sidebarState = useSelector((state) => state.sidebarOpen);

	return (
		<div className="h-screen w-screen">
			<HeaderSidebar />
			<section
				className={`${
					sidebarState.sidebarIsOpen ? "w-[88%]" : "w-full"
				} h-[90%] flex absolute right-0 bg-[rgb(241,241,240)]`}>
				<div className="w-[65%] h-[100%] overflow-y-scroll flex flex-col gap-5 p-4">
					<div className="flex">
						<div className="w-[40%]">
							<h1 className="text-2xl font-bold">
								Smart Business Console
							</h1>
							<h1 className="font-semibold">
								for Greatcoder Technologies Pvt Ltd
							</h1>
						</div>
						<div className="w-[60%] flex justify-end items-end gap-4">
							<button className="bg-blue-300 cursor-pointer px-2 rounded-md font-semibold">
								Need help?
							</button>
							<button className="bg-blue-300 cursor-pointer px-2 rounded-md font-semibold">
								Download certificate
							</button>
							<button className="bg-blue-300 cursor-pointer px-2 rounded-md font-semibold">
								Training Console
							</button>
						</div>
					</div>
					<div className=" flex flex-col gap-4">
						<h1 className="text-xl font-semibold">Sales Tools (CRM)</h1>
						<div className="flex flex-wrap gap-4">
							{salesTools.map((tool) => {
								return (
									<div
										onClick={() =>
											handleNaviagte(tool.type)
										}
										className="bg-blue-50 flex flex-col gap-2 py-2 cursor-pointer px-4 rounded-lg shadow-md">
										<span className="font-semibold text-sm">
											{tool.type}
										</span>
										<span className="text-2xl">
											{tool.number}
										</span>
									</div>
								);
							})}
						</div>
					</div>
					<div className=" flex flex-col gap-4">
						<h1 className="text-xl font-semibold">
							Efficiency Tools (ERP)
						</h1>
						<div className="flex flex-wrap gap-4">
							{efficiencyTools.map((tool) => {
								return (
									<div className="bg-blue-50 cursor-pointer flex flex-col gap-2 py-2 px-4 rounded-lg shadow-md">
										<span className="font-semibold text-sm">
											{tool.type}
										</span>
										<span className="text-2xl">
											{tool.number}
										</span>
									</div>
								);
							})}
						</div>
					</div>
					<div className=" flex flex-col gap-4">
						<h1 className="text-xl font-semibold">Shortcuts</h1>
						<div className="flex flex-wrap gap-4">
							{shortcuts.map((s) => {
								return (
									<div className="bg-blue-50 flex cursor-pointer flex-col gap-2 py-2 px-4 rounded-lg shadow-md">
										<span className="font-semibold text-sm">
											{s}
										</span>
									</div>
								);
							})}
						</div>
					</div>
					<div className=" flex flex-col gap-4">
						<h1 className="text-xl font-semibold">
							Find Vendors on Biziverse
						</h1>
						<div className="flex gap-6 rounded-md shadow-md bg-white p-4">
							<img
								className="w-6 cursor-pointer"
								src={searchIcon}
								alt="search vendor"
							/>
							<input
								className=" w-full outline-none"
								type="text"
								placeholder="E.g. HR Services, Lawyers, Consultants etc."
							/>
						</div>
						<div className="flex flex-wrap gap-4">
							{vendors.map((v) => {
								return (
									<div className="bg-blue-50 cursor-pointer border-[rgb(158,141,158)] border-2 flex flex-col gap-2 py-[4px] px-2 rounded-lg shadow-md">
										<span className="font-semibold text-sm">
											{v}
										</span>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<div className="w-[35%] h-[100%] p-4 flex flex-col justify-between">
					<div className="bg-blue-50 shadow-md rounded-md  w-full h-[68%] flex flex-col justify-start">
						<div className="w-full h-16  flex items-center p-4 shadow-md justify-between">
							<h1 className="text-xl font-bold">News Feeds</h1>
							<div className="flex items-center h-8  bg-blue-300 px-2  rounded-sm cursor-pointer gap-2">
								<img
									className="w-4 h-4"
									src={createIcon}
									alt="create post"
								/>
								<span className="text-stone-800 font-semibold">
									Create Post
								</span>
							</div>
						</div>
						<div className="bg-blue-50 h-full p-4 flex flex-col gap-4 rounded-md overflow-y-scroll">
							{postData.posts.map((post) => {
								return (
									<div className="w-full p-4 rounded-lg shadow-md bg-white flex">
										<div className=" w-[80%]">
											<h1 className="font-semibold">
												{post.title}
											</h1>
											<p className="text-sm">
												{post.subtitle}
											</p>
										</div>
										<div className="w-[20%]">
											<img
												className="h-full w-full object-cover rounded-lg"
												src={post.image}
												alt={post.title}
											/>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div className="bg-white shadow-md rounded-md w-full h-[28%] p-4 flex flex-col justify-between items-start">
						<h1 className="text-lg font-bold">
							Get your Business Listed for Leads
						</h1>
						<p>
							Five minutes to establish your stellar presence on
							Biziverse!
						</p>
						<button className="bg-blue-300 text-stone-800 px-2 rounded-sm font-semibold">
							Set Up Web Store
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
