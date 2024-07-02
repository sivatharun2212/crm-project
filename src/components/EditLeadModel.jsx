import React, { useState } from "react";

const AddLeadModel = ({ leadData, closeModel }) => {
	console.log("lll", leadData);
	const [newLeadData, setNewLeadData] = useState({
		firstName: leadData.firstName,
		lastName: leadData.lastName,
		email: leadData.email,
		mobile: leadData.mobile,
		course: leadData.course,
		state: leadData.state,
		city: leadData.city,
		// executive: leadData.ex,
	});
	const handleChange = (e) => {
		const { id, value } = e.target;
		setNewLeadData((prevData) => ({
			...prevData,
			[id]: value,
		}));
		console.log("chaedValues", newLeadData);
	};

	return (
		<div className="fixed top-0 left-0 bg-black bg-opacity-50 w-full h-full flex justify-center items-center">
			<div className="bg-white flex relative justify-between p-10 w-[50%] h-[80%] rounded-lg">
				<div className="w-[48%] h-[95%] border-2 rounded-md border-black px-4 py-2 flex flex-col gap-10">
					<div className=" w-full flex justify-between">
						<label
							className="text-sm"
							htmlFor="firstName">
							First Name{" "}
						</label>
						<input
							className="w-36 text-sm h-6 rounded-sm pl-2 border-2 border-gray-300"
							id="firstName"
							type="text"
							value={newLeadData.firstName}
							onChange={handleChange}
							placeholder="first name"
						/>
					</div>

					<div className=" w-full flex justify-between">
						<label
							className="text-sm"
							htmlFor="email">
							Email{" "}
						</label>
						<input
							className="w-36 text-sm h-6 rounded-sm pl-2 border-2 border-gray-300"
							id="email"
							type="Email"
							value={newLeadData.email}
							onChange={handleChange}
							placeholder="yourmail@gmail.com"
						/>
					</div>

					<div className=" w-full flex justify-between">
						<label
							className="text-sm"
							htmlFor="course">
							Course{" "}
						</label>
						<input
							className="w-36 text-sm h-6 rounded-sm pl-2 border-2 border-gray-300"
							id="course"
							type="text"
							value={newLeadData.course}
							onChange={handleChange}
							placeholder="course"
						/>
					</div>
					<div className=" w-full flex justify-between">
						<label
							className="text-sm"
							htmlFor="city">
							City{" "}
						</label>
						<input
							className="w-36 text-sm h-6 rounded-sm pl-2 border-2 border-gray-300"
							id="city"
							type="text"
							value={newLeadData.city}
							onChange={handleChange}
							placeholder="city"
						/>
					</div>
				</div>
				<div className="w-[48%] h-[95%] border-2 rounded-md border-black px-4 py-2 flex flex-col gap-10">
					<div
						onClick={closeModel}
						className="absolute right-[0.5rem] top-[0.5rem] cursor-pointer hover:bg-gray-400 bg-gray-400 px-2 rounded-md bg-opacity-40 font-bold text-stone-800">
						X
					</div>
					<div className=" w-full flex justify-between">
						<label
							className="text-sm"
							htmlFor="lastName">
							Last Name{" "}
						</label>
						<input
							className="w-36 text-sm h-6 rounded-sm pl-2 border-2 border-gray-300"
							id="lastName"
							type="text"
							value={newLeadData.lastName}
							onChange={handleChange}
							placeholder="Last Name"
						/>
					</div>

					<div className=" w-full flex justify-between">
						<label
							className="text-sm"
							htmlFor="mobile">
							Mobile
						</label>
						<input
							className="w-36 text-sm h-6 rounded-sm pl-2 border-2 border-gray-300"
							id="mobile"
							type="number"
							value={newLeadData.mobile}
							onChange={handleChange}
							placeholder="mobile number"
						/>
					</div>
					<div className=" w-full flex justify-between">
						<label
							className="text-sm"
							htmlFor="state">
							State
						</label>
						<input
							className="w-36 text-sm h-6 rounded-sm pl-2 border-2 border-gray-300"
							id="state"
							type="text"
							value={newLeadData.state}
							onChange={handleChange}
							placeholder="State"
						/>
					</div>
					<div className=" w-full flex justify-between">
						<label
							className="text-sm"
							htmlFor="selectExecutive">
							Select Executive
						</label>
						<select
							onChange={handleChange}
							id="selectExecutive">
							<option value="">ex 1</option>
							<option value="">ex 2</option>
							<option value="">ex 3</option>
						</select>
					</div>
				</div>
				<div className="bg-[#216ce7] absolute right-12 px-4 rounded-sm text-white font-semibold cursor-pointer hover:bg-blue-500 bottom-6">
					Save
				</div>
			</div>
		</div>
	);
};

export default AddLeadModel;
