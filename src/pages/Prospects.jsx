import React, { useState } from "react";
import HeaderSidebar from "../components/HeaderSidebar";
import { useSelector } from "react-redux";
import calendarIcon from "../assets/calendar.png";
import exportIcon from "../assets/export.png";
import filterIcon from "../assets/filter.png";
import importIcon from "../assets/import.png";
import resizeIcon from "../assets/resize.png";
import sortIcon from "../assets/sort.png";
import createIcon from "../assets/add.png";
import settingsIcon from "../assets/settings.png";
import searchIcon from "../assets/search.png";
import graphIcon from "../assets/graph.png";
import messagingIcon from "../assets/messaging.png";
import InfoModel from "../components/InfoModel";

const Prospects = () => {
	const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);

	const Pdata = [
		{ name: "Srinivas Rao", date: "21-01-2024", city: "Hyderabad" },
		{ name: "Lakshmi Priya", date: "14-02-2024", city: "Warangal" },
		{ name: "Rajesh Kumar", date: "03-03-2024", city: "Nizamabad" },
		{ name: "Anusha Reddy", date: "21-04-2024", city: "Khammam" },
		{ name: "Venkatesh Babu", date: "05-05-2024", city: "Karimnagar" },
		{ name: "Swathi Rani", date: "18-06-2024", city: "Mahbubnagar" },
		{ name: "Ravi Teja", date: "09-07-2024", city: "Suryapet" },
		{ name: "Madhavi Latha", date: "12-08-2024", city: "Ramagundam" },
		{ name: "Karthik Reddy", date: "30-09-2024", city: "Miryalaguda" },
		{ name: "Padmaja Devi", date: "15-10-2024", city: "Nalgonda" },
	];
	const sidebarState = useSelector((state) => state.sidebarOpen);

	const handlecardClick = (p) => {
		setIsInfoPopupOpen(true);
		// dispatch the action along with data to use in info model
	};
	const handleCloseModel = () => {
		setIsInfoPopupOpen(false);
	};
	return (
		<div className="h-screen w-screen">
			<HeaderSidebar />
			<section
				className={`${
					sidebarState.sidebarIsOpen ? "w-[88%]" : "w-full"
				} p-4 h-[90%] absolute right-0 bg-[rgb(241,241,240)] overflow-y-scroll flex flex-col gap-8`}>
				{isInfoPopupOpen && <InfoModel closeModel={handleCloseModel} />}
				<div className="flex  justify-between">
					<h1 className="text-2xl font-bold">Sales Prospects</h1>
					<div className="flex items-center gap-4">
						<div className="flex items-center gap-4">
							<img
								className="w-4 h-4"
								src={searchIcon}
								alt="search"
							/>
							<input
								className="pl-2 rounded-sm outline-none"
								type="text"
								placeholder="search"
							/>
						</div>
						<div className="w-8 shadow-md bg-white p-2 h-8 rounded-md">
							<img
								className="w-full className="
								src={calendarIcon}
								alt="calandar"
							/>
						</div>
						<div className="w-8 shadow-md bg-white p-2 h-8 rounded-md">
							<img
								className="w-full"
								src={filterIcon}
								alt="filter"
							/>
						</div>
						<div className="w-8 shadow-md bg-white p-2 h-8 rounded-md">
							<img
								className="w-full"
								src={resizeIcon}
								alt="resize"
							/>
						</div>
						<div className="w-8 shadow-md bg-white p-2 h-8 rounded-md">
							<img
								className="w-full"
								src={importIcon}
								alt="import"
							/>
						</div>
						<div className="w-40 shadow-md flex items-center gap-4 bg-white p-2 h-8 rounded-md">
							<img
								className="w-4"
								src={createIcon}
								alt="create prospect"
							/>
							<span>Enter Prospect</span>
						</div>
						<div className="w-8 shadow-md bg-white p-2 h-8 rounded-md">
							<img
								className="w-full"
								src={sortIcon}
								alt="sort"
							/>
						</div>
						<div className="w-8 shadow-md bg-white p-2 h-8 rounded-md">
							<img
								className="w-full"
								src={settingsIcon}
								alt="settings"
							/>
						</div>
						<div className="w-8 shadow-md bg-white p-2 h-8 rounded-md">
							<img
								className="w-full"
								src={exportIcon}
								alt="export"
							/>
						</div>
					</div>
				</div>
				<div className="flex gap-4">
					<div className="bg-blue-50 justify-center cursor-pointer border-[rgb(158,141,158)] items-center  border-2 flex gap-2 py-[4px] px-2 rounded-lg shadow-md">
						<span className="font-semibold text-sm">
							No Appointments Set : 276
						</span>
						<img
							className="w-4"
							src={graphIcon}
							alt="graph"
						/>
					</div>
					<div className="bg-blue-50 justify-center cursor-pointer border-[rgb(158,141,158)] items-center  border-2 flex gap-2 py-[4px] px-2 rounded-lg shadow-md">
						<span className="font-semibold text-sm">
							No Interactions : 108
						</span>
						<img
							className="w-4"
							src={graphIcon}
							alt="graph"
						/>
					</div>
					<div className="bg-blue-50 justify-center cursor-pointer border-[rgb(158,141,158)] items-center  border-2 flex gap-2 py-[4px] px-2 rounded-lg shadow-md">
						<span className="font-semibold text-sm">
							Missed Appointments : 156
						</span>
						<img
							className="w-4"
							src={graphIcon}
							alt="graph"
						/>
					</div>
					<div className="bg-blue-50 justify-center cursor-pointer border-[rgb(158,141,158)] items-center  border-2 flex gap-2 py-[4px] px-2 rounded-lg shadow-md">
						<span className="font-semibold text-sm">Travel History</span>
						<img
							className="w-4"
							src={graphIcon}
							alt="graph"
						/>
					</div>
					<select className="bg-blue-50 border-[rgb(158,141,158)] border-2 py-[4px] px-2 outline-none rounded-lg shadow-md">
						<option value="1">Active</option>
						<option value="2">In Active</option>
					</select>
				</div>
				<div className="flex justify-between">
					<div className="flex w-[18%] flex-col gap-4 items-center">
						<div className="bg-blue-100 border-2 border-blue-300 w-full p-2 flex items-center justify-center rounded-md  ">
							<h1 className="text-lg font-bold">Interested (123)</h1>
						</div>
						{Pdata.map((p) => {
							return (
								<div
									onClick={() => handlecardClick(p)}
									className="bg-white cursor-pointer shadow-md border-2 border-blue-300 flex flex-col gap-2 w-full p-4  rounded-md">
									<span className="text-lg font-semibold">
										{p.name}
									</span>
									<span className="text-gray-600 font-semibold text-sm">
										{p.city}
									</span>
									<div className="flex gap-2 items-center">
										<img
											className="w-4 h-4"
											src={messagingIcon}
											alt="message"
										/>
										<span className="text-xs font-semibold">
											{p.date}
										</span>
									</div>
								</div>
							);
						})}
					</div>
					<div className="flex w-[17%] gap-4 flex-col items-center">
						<div className="bg-pink-100 border-2 border-pink-300 w-full p-2 flex items-center justify-center rounded-md  ">
							<h1 className="text-lg  font-bold">Enrolled (162)</h1>
						</div>
						{Pdata.map((p) => {
							return (
								<div className="bg-white cursor-pointer shadow-md border-2 border-pink-300 flex flex-col gap-2 w-full p-4  rounded-md">
									<span className="text-lg font-semibold">
										{p.name}
									</span>
									<span className="text-gray-600 font-semibold text-sm">
										{p.city}
									</span>
									<div className="flex gap-2 items-center">
										<img
											className="w-4 h-4"
											src={messagingIcon}
											alt="message"
										/>
										<span className="text-xs font-semibold">
											{p.date}
										</span>
									</div>
								</div>
							);
						})}
					</div>
					<div className="flex w-[17%] gap-4 flex-col items-center">
						<div className="bg-yellow-100 border-2 border-yellow-300  w-full p-2 flex items-center justify-center rounded-md  ">
							<h1 className="text-lg font-bold">Next Batch (36)</h1>
						</div>
						{Pdata.map((p) => {
							return (
								<div className="bg-white cursor-pointer shadow-md border-2 border-yellow-300 flex flex-col gap-2 w-full p-4  rounded-md">
									<span className="text-lg font-semibold">
										{p.name}
									</span>
									<span className="text-gray-600 font-semibold text-sm">
										{p.city}
									</span>
									<div className="flex gap-2 items-center">
										<img
											className="w-4 h-4"
											src={messagingIcon}
											alt="message"
										/>
										<span className="text-xs font-semibold">
											{p.date}
										</span>
									</div>
								</div>
							);
						})}
					</div>
					<div className="flex w-[19%] gap-4 flex-col items-center">
						<div className="bg-green-100 border-2 border-green-300  w-full p-2 flex items-center justify-center rounded-md  ">
							<h1 className="text-lg font-bold">
								Not Interested (103)
							</h1>
						</div>
						{Pdata.map((p) => {
							return (
								<div className="bg-white cursor-pointer shadow-md border-2 border-green-300 flex flex-col gap-2 w-full p-4  rounded-md">
									<span className="text-lg font-semibold">
										{p.name}
									</span>
									<span className="text-gray-600 font-semibold text-sm">
										{p.city}
									</span>
									<div className="flex gap-2 items-center">
										<img
											className="w-4 h-4"
											src={messagingIcon}
											alt="message"
										/>
										<span className="text-xs font-semibold">
											{p.date}
										</span>
									</div>
								</div>
							);
						})}
					</div>
					<div className="flex w-[24%] gap-4 flex-col items-center">
						<div className="bg-orange-100 border-2 border-orange-300 w-full p-2 flex items-center justify-center rounded-md  ">
							<h1 className="text-lg  font-bold">
								Joined In Other Institute (8)
							</h1>
						</div>
						{Pdata.map((p) => {
							return (
								<div className="bg-white cursor-pointer shadow-md border-2 border-orange-300 flex flex-col gap-2 w-full p-4  rounded-md">
									<span className="text-lg font-semibold">
										{p.name}
									</span>
									<span className="text-gray-600 font-semibold text-sm">
										{p.city}
									</span>
									<div className="flex gap-2 items-center">
										<img
											className="w-4 h-4"
											src={messagingIcon}
											alt="message"
										/>
										<span className="text-xs font-semibold">
											{p.date}
										</span>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<div className="flex gap-2">
					<span className="p-2 font-semibold bg-white shadow-md rounded-md">
						Training Materials
					</span>
					<span className="p-2 font-semibold bg-white shadow-md rounded-md">
						Need Help
					</span>
					<span className="p-2 font-semibold bg-white shadow-md rounded-md">
						Training Console
					</span>
				</div>
			</section>
		</div>
	);
};

export default Prospects;
