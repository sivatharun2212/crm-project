import React, { useState } from "react";
import HeaderSidebar from "../components/HeaderSidebar";
import { useSelector } from "react-redux";
import graphIcon from "../assets/graph.png";
import settingsIcon from "../assets/settings.png";
import walletIcon from "../assets/wallet.png";
import printerIcon from "../assets/printing.png";
import listIcon from "../assets/list-text.png";
import createIcon from "../assets/add.png";
import { useNavigate } from "react-router-dom";
const Invoices = () => {
	const navigate = useNavigate();
	const sidebarState = useSelector((state) => state.sidebarOpen);
	const [chooseYearActive, setChooseYearActive] = useState(false);
	const [selectDateEnabled, setSelectDateEnabled] = useState(false);

	const handleChooseYear = (e) => {
		if (e.target.value === "3") {
			setChooseYearActive(true);
			setSelectDateEnabled(false);
		} else {
			setChooseYearActive(false);
		}
	};

	const handleSelectDateChange = (e) => {
		if (e.target.checked) {
			setSelectDateEnabled(true);
		} else {
			setSelectDateEnabled(false);
		}
	};
	return (
		<div className="h-screen w-screen">
			<HeaderSidebar />
			<section
				className={`${
					sidebarState.sidebarIsOpen ? "w-[88%]" : "w-full"
				} p-4 h-[90%] absolute right-0 bg-[rgb(241,241,240)] flex flex-col gap-4`}>
				<div className="flex justify-between">
					<h1 className="font-bold  text-2xl">Invoices</h1>
					<div className="flex gap-2">
						<div className="w-8 h-8 p-2 rounded-md shadow-md bg-white">
							<img
								src={printerIcon}
								alt="printer"
							/>
						</div>
						<div className="w-8 h-8 p-2 rounded-md shadow-md bg-white">
							<img
								src={listIcon}
								alt="list"
							/>
						</div>
						<div className="w-8 h-8 p-2 rounded-md shadow-md bg-white">
							<img
								src={graphIcon}
								alt="graph"
							/>
						</div>
						<div className="w-8 h-8 p-2 rounded-md shadow-md bg-white">
							<img
								src={settingsIcon}
								alt="settings"
							/>
						</div>
						<div className="w-8 h-8 p-2 rounded-md shadow-md bg-white">
							<img
								src={walletIcon}
								alt="wallet"
							/>
						</div>
					</div>
				</div>
				<div className="flex justify-between items-center">
					<div className="flex gap-4">
						<select
							onChange={handleChooseYear}
							className="w-28 outline-none rounded-md">
							<option value="1">This Month</option>
							<option value="2">Last Month</option>
							<option value="3">Fin Year</option>
							<option value="4">Other </option>
						</select>
						{chooseYearActive && (
							<select
								// onChange={handleChooseYear}
								className="w-28 outline-none rounded-md">
								<option value="1">2024-2025</option>
								<option value="2">2023-2024</option>
								<option value="3">2022-2023</option>
								<option value="4">2021-2022</option>
								<option value="4">2020-2021</option>
								<option value="4">2019-2020</option>
								<option value="4">2018-2019</option>
								<option value="4">2017-2018</option>
								<option value="4">2016-2017</option>
							</select>
						)}
						{!chooseYearActive && (
							<div>
								<input
									checked={selectDateEnabled}
									onChange={handleSelectDateChange}
									type="checkbox"
									id="selectDate"
								/>
								<label htmlFor="selectDate">Select Date</label>
							</div>
						)}
						{selectDateEnabled && <input type="date" />}
						<select className="w-28 outline-none rounded-md">
							<option value="1">All Invoices</option>
							<option value="2">Branch-wise</option>
							<option value="3">GST-wise</option>
						</select>
						<select className="w-28 outline-none rounded-md">
							<option value="1">All Invoices</option>
							<option value="2">Overdue</option>
							<option value="3">Unpaid</option>
							<option value="4">Paid</option>
						</select>
						<select className="w-28 outline-none rounded-md">
							<option value="1">All Executives</option>
							<option value="2">Unassigned</option>
						</select>
					</div>
					<div
						onClick={() => navigate("/create-invoice")}
						className="bg-white flex items-center gap-2 px-2 rounded-md cursor-pointer">
						<img
							className="w-4"
							src={createIcon}
							alt="create invoice"
						/>
						<span>Create Invoice</span>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Invoices;
