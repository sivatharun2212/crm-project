import React, { useState } from "react";

const AddUserModel = ({ closeModel }) => {
	const [userData, setUserData] = useState({
		firstName: null,
		lastName: null,
		email: null,
		mobileNbr: null,
	});

	const handleChange = (e) => {
		const { id, value } = e.target;
		setUserData((prevData) => ({
			...prevData,
			[id]: value,
		}));
		console.log("lead data : ", userData);
	};

	return (
		<div className="fixed top-0 left-0 bg-black bg-opacity-50 w-full h-full flex justify-center items-center">
			<div className="bg-white flex relative justify-between p-10 w-[50%] h-[30%] rounded-lg">
				<div className="w-[48%] h-[95%] rounded-md bg-neutral-200 px-4 py-2 flex flex-col gap-4">
					<div className=" w-full flex items-center justify-between">
						<label
							className="text-sm"
							htmlFor="firstName">
							First Name{" "}
						</label>
						<input
							className="w-40 text-sm h-[25px] rounded-full pl-2 border-2 border-gray-300"
							id="firstName"
							type="text"
							value={userData.firstName}
							onChange={handleChange}
							placeholder="first name"
						/>
					</div>

					<div className=" w-full flex items-center justify-between">
						<label
							className="text-sm"
							htmlFor="email">
							Email{" "}
						</label>
						<input
							className="w-40 text-sm h-[25px] rounded-full pl-2 border-2 border-gray-300"
							id="email"
							type="Email"
							value={userData.email}
							onChange={handleChange}
							placeholder="yourmail@gmail.com"
						/>
					</div>
				</div>
				<div className="w-[48%] h-[95%] rounded-md bg-neutral-200 px-4 py-2 flex flex-col gap-4">
					<div
						onClick={closeModel}
						className="absolute right-[0.5rem] top-[0.5rem] cursor-pointer hover:bg-gray-400 bg-gray-400 px-2 rounded-md bg-opacity-40 font-bold text-stone-800">
						X
					</div>
					<div className=" w-full flex items-center justify-between">
						<label
							className="text-sm"
							htmlFor="lastName">
							Last Name{" "}
						</label>
						<input
							className="w-40 text-sm h-[25px] rounded-full pl-2 border-2 border-gray-300"
							id="lastName"
							type="text"
							value={userData.lastName}
							onChange={handleChange}
							placeholder="Last Name"
						/>
					</div>

					<div className=" w-full flex items-center justify-between">
						<label
							className="text-sm"
							htmlFor="mobileNbr">
							Mobile Nbr
						</label>
						<input
							className="w-40 text-sm h-[25px] rounded-full pl-2 border-2 border-gray-300"
							id="mobileNbr"
							type="text"
							value={userData.mobileNbr}
							onChange={handleChange}
							placeholder="Mobile number"
						/>
					</div>
				</div>
				<button className="bg-[#216ce7] absolute right-12 px-4 rounded-sm text-white font-semibold cursor-pointer hover:bg-blue-500 bottom-4">
					Save
				</button>
			</div>
		</div>
	);
};

export default AddUserModel;
