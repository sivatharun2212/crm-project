import React, { useState, useEffect } from "react";
import HeaderSidebar from "../components/HeaderSidebar";
import AddLeadModel from "../components/AddLeadModel";
import axios from "axios";
import EditLeadModel from "../components/EditLeadModel";
import { useSelector } from "react-redux";
import searchIcon from "../assets/search.png";

const Leads = () => {
	const baseURL = process.env.REACT_APP_BASE_URL;
	const sidebarState = useSelector((state) => state.sidebarOpen);

	const [currentPage, setCurrentPage] = useState(1);
	const [recordsPerPage, setRecordsPerPage] = useState(5);
	const [showAddLeadModel, setShowAddLeadModel] = useState(false);
	const [showEditLeadModel, setShowEditLeadModel] = useState(false);
	const [leadsData, setLaedsData] = useState([]);
	const [editLeadData, setEditLeadData] = useState(null);
	const [userDate, setUserData] = useState([]);
	const [leadChecked, setLeadChecked] = useState(false);
	const [isAssignPopupOpened, setIsAssignPopupOpened] = useState(false);

	const [page, setpage] = useState(0);
	const [size, setSize] = useState(20);
	const [sortBy, setSortBy] = useState("firstName");
	const [sortType, setSortType] = useState("asc");
	const [userId, setUserId] = useState(null);
	const [statusId, setStatusId] = useState(null);
	const [search, setSearch] = useState(null);
	const [fromDate, setFromDate] = useState(null);
	const [toDate, setToDate] = useState(null);

	// const totalPages = Math.ceil(data.customersData.length / recordsPerPage);
	const handleImportFileChange = async (event) => {
		const file = event.target.files[0];
		const formData = new FormData();
		formData.append("file", file);
		try {
			const response = await axios.post(`${baseURL}/lead/bulkUpload`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			alert("Uploaded successfully");
		} catch (error) {
			alert(error?.response?.data?.response);
		}
	};
	const handleCloseModel = () => {
		setShowEditLeadModel(false);
		setShowAddLeadModel(false);
	};

	const handleEditLead = (lead) => {
		setShowEditLeadModel(true);
		setEditLeadData(lead);
	};

	const handleSelectCheckBox = (e, leadid) => {
		const isChecked = e.target.checked;
		setLeadChecked(isChecked);
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

	const handleSearchLead = async () => {
		const searchLeads = {
			page,
			size,
			sortBy,
			sortType,
			userId,
			statusId,
			search,
			fromDate,
			toDate,
		};
		try {
			const response = await axios.post(`${baseURL}/lead/searchLeads`, searchLeads);
			setLaedsData(response.data.response.content);
		} catch (error) {
			console.error("Error fetching data:", error?.response?.data?.response);
			alert(error?.response?.data?.response);
		}
	};
	useEffect(() => {
		handleSearchLead();
	}, [userId]);

	const handleSelectExecutive = (e) => {
		if (e.target.value === "") {
			setUserId(null);
		} else {
			setUserId(e.target.value);
		}
	};

	return (
		<div className="h-screen w-screen">
			<HeaderSidebar />
			<section
				className={`${
					sidebarState.sidebarIsOpen ? "w-[88%]" : "w-full"
				} px-4 h-[90%] absolute right-0 flex flex-col gap-6 bg-[rgb(241,241,240)]`}>
				<div className="py-4 flex justify-between">
					<h1 className="font-bold  text-2xl">Leads</h1>
					<div className="flex gap-12">
						{leadChecked && (
							<div
								onClick={() =>
									setIsAssignPopupOpened(!isAssignPopupOpened)
								}
								className="bg-[#216ce7] relative px-2 flex justify-center items-center rounded-md cursor-pointer text-white ">
								Assign
								{isAssignPopupOpened && (
									<div
										onClick={(e) => e.stopPropagation()}
										className="w-80 h-24 bg-white shadow-lg absolute -bottom-28 rounded-md p-6 flex flex-col justify-between">
										<label
											className="text-sm text-stone-800"
											htmlFor="selectExecutive">
											Select Executive
										</label>
										<select
											className="rounded-sm bg-slate-200 text-stone-800"
											id="selectExecutive">
											<option value="">ex 1</option>
											<option value="">ex 2</option>
											<option value="">ex 3</option>
										</select>
									</div>
								)}
							</div>
						)}
						<label
							htmlFor="import"
							className="bg-[#216ce7] cursor-pointer px-2 flex justify-center items-center rounded-md text-white ">
							Import
						</label>
						<input
							onChange={handleImportFileChange}
							type="file"
							id="import"
							className="hidden"
						/>
						<div
							onClick={() => setShowAddLeadModel(true)}
							className="bg-[#216ce7] px-2 flex justify-center items-center rounded-md cursor-pointer text-white ">
							Add lead
						</div>
					</div>
				</div>
				<div className="flex gap-10">
					<select className="w-28 outline-none rounded-md">
						<option value="1">Active</option>
						<option value="2">In Active</option>
					</select>
					<select
						id="source"
						className="w-40 outline-none  rounded-md">
						<option value="">Select Source</option>
						<option value="1">Collected data</option>
						<option value="2">Data</option>
						<option value="3">YouTube</option>
						<option value="4">Face book</option>
					</select>
					<select
						id="userId"
						onChange={handleSelectExecutive}
						className="w-40 outline-none  rounded-md">
						<option value="">Select Executive</option>
						{userDate.map((data) => (
							<option
								key={data.userId}
								value={data.userId}>
								{data.firstName}
							</option>
						))}
					</select>
					<div className="flex gap-2 items-center">
						<input
							id="search"
							type="text"
							className="w-40 outline-none  rounded-md pl-2"
							placeholder="search"
							onChange={(e) => setSearch(e.target.value)}
						/>
						<img
							onClick={handleSearchLead}
							className="w-4 h-4"
							src={searchIcon}
							alt="search"
						/>
					</div>
				</div>
				<div className="rounded-lg overflow-hidden overflow-y-scroll h-[60%]">
					<table className="w-full text-sm text-left rtl:text-right  text-stone-800 ">
						<thead className="text-xs text-gray-700 capitalize bg-white">
							<tr>
								<th
									scope="col"
									className="px-6 py-3 flex gap-4">
									<input
										type="checkbox"
										onChange={(e) =>
											handleSelectCheckBox(e, "a")
										}
									/>
									<span>Customers</span>
								</th>
								<th
									scope="col"
									className="px-6 py-3">
									Mobile Nbr
								</th>
								<th
									scope="col"
									className="px-6 py-3">
									Email
								</th>
								<th
									scope="col"
									className="px-6 py-3">
									Source
								</th>
								<th
									scope="col"
									className="px-6 py-3">
									Since
								</th>
								<th
									scope="col"
									className="px-6 py-3">
									POC
								</th>
								<th
									scope="col"
									className="px-6 py-3">
									Last talk
								</th>
								<th
									scope="col"
									className="px-6 py-3">
									Next
								</th>
							</tr>
						</thead>
						<tbody>
							{leadsData.map((lead) => {
								return (
									<tr
										key={lead?.firstName}
										className="bg-gray-200 border-b  hover:bg-gray-50">
										<td
											scope="row"
											className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
											<div className="flex gap-4">
												<input
													type="checkbox"
													name=""
													id=""
													onChange={(e) =>
														handleSelectCheckBox(
															e,
															lead.leadId
														)
													}
												/>
												{/* <img
											class="table-star"
											src={starImg}
											alt=""
										/> */}
												<span
													className="cursor-pointer"
													onClick={() =>
														handleEditLead(
															lead
														)
													}>
													{lead?.firstName}
												</span>
											</div>
										</td>
										<td className="px-6 py-4">
											{lead?.mobileNbr}
										</td>
										<td className="px-6 py-4">
											{lead?.email}
										</td>
										<td className="px-6 py-4">
											{lead.source}
										</td>
										<td className="px-6 py-4">
											{lead.mobileNbr}
										</td>
										<td className="px-6 py-4">
											{lead.user?.firstName}
										</td>
										<td className="px-6 py-4">
											{lead.lastTalk}
										</td>
										<td className="px-6 py-4">
											{lead.next}
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
				{/* <section className="flex justify-center">
					{data.customersData
						.slice(
							(currentPage - 1) * recordsPerPage,
							currentPage * recordsPerPage
						)
						.map((page) => {})}
				</section> */}
				{showAddLeadModel && <AddLeadModel closeModel={handleCloseModel} />}
				{showEditLeadModel && (
					<EditLeadModel
						leadData={editLeadData}
						closeModel={handleCloseModel}
					/>
				)}
			</section>
		</div>
	);
};

export default Leads;
