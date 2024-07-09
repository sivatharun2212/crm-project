import React, { useState } from "react";
import HeaderSidebar from "../components/HeaderSidebar";
import { useSelector } from "react-redux";
import AddUserModel from "../components/AddUserModel";

const Users = () => {
	const sidebarState = useSelector((state) => state.sidebarOpen);
	const [isAddUserModelOpen, setIsAddUserModelOpen] = useState(false);

	const handleAddUser = () => {
		setIsAddUserModelOpen(!isAddUserModelOpen);
	};

	return (
		<div className="h-screen w-screen">
			<HeaderSidebar />
			<section
				className={`${
					sidebarState.sidebarIsOpen ? "w-[88%]" : "w-full"
				} px-4 h-[90%] absolute right-0 bg-[rgb(241,241,240)]`}>
				<div className="py-4 flex justify-between">
					<h1 className="font-bold  text-2xl">Users</h1>
					<button
						onClick={handleAddUser}
						className="bg-[#216ce7] px-2 flex justify-center items-center rounded-md cursor-pointer text-white ">
						Add Users
					</button>
				</div>
				{isAddUserModelOpen && <AddUserModel closeModel={handleAddUser} />}
			</section>
		</div>
	);
};

export default Users;
