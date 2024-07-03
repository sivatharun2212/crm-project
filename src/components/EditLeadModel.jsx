import React, { useState, useEffect } from "react";
import axios from "axios";

const EditLeadModel = ({ leadData, closeModel }) => {
	const [firstName, setFirstName] = useState(leadData.firstName);
	const [lastName, setLastName] = useState(leadData.lastName);
	const [mobileNbr, setMobileNbr] = useState(leadData.mobileNbr);
	const [email, setEmail] = useState(leadData.email);
	const [course, setCourse] = useState(leadData.course);
	const [source, setSource] = useState(leadData.source);
	// const [college, setCollege] = useEffect(leadData.college);
	const [branch, setBranch] = useState(leadData.branch);
	const [yearOfPassing, setYearOfPassing] = useState(leadData.yearOfPassing);
	const [city, setCity] = useState(leadData.city);
	const [userId, setUserId] = useState(leadData.user?.userId);

	const [userData, setUserData] = useState([]);
	console.log("useradta");
	useEffect(() => {
		const getUsers = async () => {
			try {
				const response = await axios.get(
					"http://13.233.124.175:8090/crm/user/getAllUsers"
				);
				setUserData(response.data.response);
			} catch (error) {
				console.error("Error fetching data:", error?.response?.data?.response);
				alert(error?.response?.data?.response);
			}
		};
		getUsers();
	}, []);
	console.log("userData", userData);
	const handleSave = async () => {
		try {
			const updateLead = {
				firstName,
				lastName,
				mobileNbr,
				email,
				course,
				source,
				branch,
				city,
				// college,
				userId,
				yearOfPassing,
			};
			console.log("update lead", updateLead);
			const response = await axios.post(
				"http://13.127.184.9:8090/crm/lead/createLead",
				updateLead
			);
			console.log(response.data);
			alert("Lead updated successfully");
		} catch (error) {
			console.error("Error fetching data:", error?.response?.data?.response);
			alert(error?.response?.data?.response);
		}
	};

	const handleSelectExecutive = (e) => {
		console.log("event", e.target.value);
		setUserId(e.target.value);
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
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
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
							value={email}
							onChange={(e) => setEmail(e.target.value)}
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
							value={course}
							onChange={(e) => setCourse(e.target.value)}
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
							value={city}
							onChange={(e) => setCity(e.target.value)}
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
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
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
							id="mobileNbr"
							type="number"
							value={mobileNbr}
							onChange={(e) => setMobileNbr(e.target.value)}
							placeholder="mobile number"
						/>
					</div>
					{/* <div className=" w-full flex justify-between">
						<label
							className="text-sm"
							htmlFor="college">
							College
						</label>
						<input
							className="w-36 text-sm h-6 rounded-sm pl-2 border-2 border-gray-300"
							id="college"
							type="text"
							value={college}
							onChange={(e) => setCollege(e.target.value)}
							placeholder="College"
						/>
					</div> */}
					<div className=" w-full flex justify-between">
						<label
							className="text-sm"
							htmlFor="selectExecutive">
							Select Executive
						</label>
						<select
							onChange={handleSelectExecutive}
							id="selectExecutive">
							<option value="">Select Executive</option>
							{userData.map((data) => {
								console.log("dataaaaa", data);
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

export default EditLeadModel;
