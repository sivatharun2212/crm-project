import React, { useState, useEffect } from "react";
import axios from "axios";

const AddLeadModel = ({ closeModel }) => {
	const baseURL = process.env.REACT_APP_BASE_URL;

	const [leadData, setLeadData] = useState({
		firstName: null,
		lastName: null,
		email: null,
		mobileNbr: null,
		course: null,
		college: null,
		city: null,
		executive: null,
	});
	const [userData, setUserData] = useState([]);

	const handleChange = (e) => {
		const { id, value } = e.target;
		setLeadData((prevData) => ({
			...prevData,
			[id]: value,
		}));
		console.log("lead data : ", leadData);
	};

	useEffect(() => {
		const getUsers = async () => {
			try {
				const response = await axios.get(`${baseURL}/user/getAllUsers`);
				setUserData(response.data.response);
			} catch (error) {
				console.error("Error fetching data:", error?.response?.data?.response);
				alert(error?.response?.data?.response);
			}
		};
		getUsers();
	}, []);

	const handleSave = async () => {
		try {
			console.log("lead data : ", leadData);
			const response = await axios.post(`${baseURL}/lead/createLead`, leadData);
			console.log(response.data);
			alert("Lead added successfully");
		} catch (error) {
			console.error("Error fetching data:", error?.response?.data?.response);
			alert(error?.response?.data?.response);
		}
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
							value={leadData.firstName}
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
							value={leadData.email}
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
							value={leadData.course}
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
							value={leadData.city}
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
							value={leadData.lastName}
							onChange={handleChange}
							placeholder="Last Name"
						/>
					</div>

					<div className=" w-full flex justify-between">
						<label
							className="text-sm"
							htmlFor="mobileNbr">
							Mobile Nbr
						</label>
						<input
							className="w-36 text-sm h-6 rounded-sm pl-2 border-2 border-gray-300"
							id="mobileNbr"
							type="text"
							value={leadData.mobileNbr}
							onChange={handleChange}
							placeholder="Mobile number"
						/>
					</div>
					<div className=" w-full flex justify-between">
						<label
							className="text-sm"
							htmlFor="college">
							College
						</label>
						<input
							className="w-36 text-sm h-6 rounded-sm pl-2 border-2 border-gray-300"
							id="college"
							type="text"
							value={leadData.college}
							onChange={handleChange}
							placeholder="College"
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
							id="userId">
							<option value="">Select Executive</option>
							{userData.map((data) => {
								return (
									<option
										key={data.userId}
										value={data.userId}>
										{data.firstName}
									</option>
								);
							})}
						</select>
					</div>
				</div>
				<button
					onClick={handleSave}
					className="bg-[#216ce7] absolute right-12 px-4 rounded-sm text-white font-semibold cursor-pointer hover:bg-blue-500 bottom-6">
					Save
				</button>
			</div>
		</div>
	);
};

export default AddLeadModel;
