import React, { useState, useEffect } from "react";
import HeaderSidebar from "../components/HeaderSidebar";
import AddLeadModel from "../components/AddLeadModel";
import axios from "axios";

const Leads = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [recordsPerPage, setRecordsPerPage] = useState(5);
	const [showAddLeadModel, setShowAddLeadModel] = useState(false);
	const [leadsData, setLaedsData] = useState([]);

	// const totalPages = Math.ceil(data.customersData.length / recordsPerPage);

	const handleImportFileChange = (event) => {
		const file = event.target.files[0];
		console.log("selected file", file);
	};
	const handleCloseModel = () => {
		setShowAddLeadModel(false);
	};

	useEffect(() => {
		const handleLogin = async () => {
			try {
				const searchLeads = {
					page: 0,
					size: 20,
					sortBy: "firstName",
					sortType: "asc",
					userId: null,
					statusId: null,
					source: null,
					search: null,
					fromDate: null,
					toDate: null,
				};
				const response = await axios.post(
					"http://3.111.147.169:8090/crm/lead/searchLeads",
					searchLeads
				);
				setLaedsData(response.data.response.content);
				console.log(response.data.response.content);
			} catch (error) {
				console.error("Error fetching data:", error?.response?.data?.response);
				alert(error?.response?.data?.response);
			}
		};
		handleLogin();
	}, []);
	return (
		<div className="h-screen w-screen">
			<HeaderSidebar />
			<section className="w-full px-4 h-[90%] flex flex-col gap-6 bg-[rgb(241,241,240)]">
				<div className="py-4 flex justify-between">
					<h1 className="font-bold text-2xl">Leads</h1>
					<div className="flex gap-12">
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
						<span
							onClick={() => setShowAddLeadModel(true)}
							className="bg-[#216ce7] px-2 flex justify-center items-center rounded-md cursor-pointer text-white ">
							Add lead
						</span>
					</div>
				</div>
				<div className="flex gap-10">
					<select className="w-28 outline-none rounded-md">
						<option value="1">Active</option>
						<option value="2">In Active</option>
					</select>
					<select className="w-40 outline-none  rounded-md">
						<option value="">Select Source</option>
						<option value="1">Collected data</option>
						<option value="2">Data</option>
						<option value="3">YouTube</option>
						<option value="4">Face book</option>
					</select>
					<select className="w-40 outline-none  rounded-md">
						<option value="">Select Executive</option>
						<option value="1">Unassigned</option>
						<option value="2">Bhupesh</option>
						<option value="3">Hemalatha</option>
						<option value="4">Kaushik</option>
					</select>
					<input
						type="text"
						className="w-40 outline-none  rounded-md pl-2"
						placeholder="search"
					/>
				</div>
				<div className="rounded-lg overflow-hidden overflow-y-scroll h-[60%]">
					<table className="w-full text-sm text-left rtl:text-right  text-stone-800 ">
						<thead className="text-xs text-gray-700 capitalize bg-white">
							<tr>
								<th
									scope="col"
									className="px-6 py-3">
									Customers
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
											<div className="customer-heading">
												<input
													type="checkbox"
													name=""
													id=""
												/>
												{/* <img
											class="table-star"
											src={starImg}
											alt=""
										/> */}
												<span>
													{lead?.firstName}
												</span>
											</div>
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
			</section>
		</div>
	);
};

export default Leads;
