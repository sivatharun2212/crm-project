import React, { useState } from "react";
import homeIcon from "../assets/home.png";
import settingsIcon from "../assets/settings.png";
import downarrowIcon from "../assets/down.png";
import accountIcon from "../assets/lock.png";
import createIcon from "../assets/add.png";
import leadsIcon from "../assets/leads.png";
import { useNavigate } from "react-router-dom";
const Sidebar = ({ menuStatus }) => {
	const navigate = useNavigate();
	const [settingsOpen, setSettingsOpen] = useState(false);
	const [createOpen, setCreateOpen] = useState(false);
	const [accountOpen, setAccountOpen] = useState(false);
	return (
		<aside
			className={`${
				menuStatus ? "flex" : "hidden"
			} w-40 h-[90%] bg-white flex flex-col gap-2 absolute left-0`}>
			<div
				onClick={() => navigate("/home")}
				className="flex cursor-pointer items-center mt-4 px-6 py-2  gap-4">
				<img
					className="w-4 h-4"
					src={homeIcon}
					alt=""
				/>
				<span className="text-stone-800 text-sm font-medium capitalize">home</span>
			</div>
			<div
				onClick={() => navigate("/leads")}
				className="flex cursor-pointer  items-center px-6 py-2  gap-4">
				<img
					className="w-4 h-4"
					src={leadsIcon}
					alt=""
				/>
				<span className="text-stone-800 text-sm font-medium capitalize">Leads</span>
			</div>
			<div
				className={`cursor-pointer  px-6 py-2  flex items-center justify-between ${
					settingsOpen ? "bg-[#9d5dff]" : "white"
				}`}
				onClick={() => {
					setSettingsOpen(!settingsOpen);
					setCreateOpen(false);
					setAccountOpen(false);
				}}>
				<div className="flex gap-4">
					<img
						className="w-4 h-4"
						src={settingsIcon}
						alt=""
					/>
					<span className="text-stone-800 text-sm  font-medium capitalize">
						settings
					</span>
				</div>
				<img
					className={`${settingsOpen ? "rotate-180" : ""} w-2 h-2`}
					src={downarrowIcon}
					alt=""
				/>
			</div>
			{settingsOpen && (
				<div>
					<ul className="list-disc text-stone-800 ml-10 flex capitalize flex-col gap-3">
						<li>display</li>
						<li>editor</li>
						<li>Theme</li>
					</ul>
				</div>
			)}

			<div
				className={`cursor-pointer px-6 py-2 flex items-center justify-between ${
					createOpen ? "bg-[#9d5dff]" : "white"
				}`}
				onClick={() => {
					setCreateOpen(!createOpen);
					setAccountOpen(false);
					setSettingsOpen(false);
				}}>
				<div className="flex  gap-4">
					<img
						className="w-4 h-4"
						src={createIcon}
						alt=""
					/>
					<span className="text-stone-800 text-sm  font-medium capitalize">
						create
					</span>
				</div>
				<img
					className={`${createOpen ? "rotate-180" : ""} w-2 h-2`}
					src={downarrowIcon}
					alt=""
				/>
			</div>
			{createOpen && (
				<div>
					<ul className="list-disc text-stone-800 ml-10 flex capitalize flex-col gap-3">
						<li>article</li>
						<li>document</li>
						<li>report</li>
					</ul>
				</div>
			)}

			<div
				className={`cursor-pointer  px-6 py-2  flex items-center justify-between ${
					accountOpen ? "bg-[#9d5dff]" : "white"
				}`}
				onClick={() => {
					setAccountOpen(!accountOpen);
					setSettingsOpen(false);
					setCreateOpen(false);
				}}>
				<div className="flex gap-4">
					<img
						className="w-4 h-4"
						src={accountIcon}
						alt=""
					/>
					<span className="text-stone-800 text-sm  font-medium capitalize">
						Account
					</span>
				</div>
				<img
					className={`${accountOpen ? "rotate-180" : ""} w-2 h-2`}
					src={downarrowIcon}
					alt=""
				/>
			</div>
			{accountOpen && (
				<div>
					<ul className="list-disc text-stone-800 ml-10 flex flex-col capitalize gap-3">
						<li>article</li>
						<li>document</li>
						<li>report</li>
					</ul>
				</div>
			)}
		</aside>
	);
};

export default Sidebar;
