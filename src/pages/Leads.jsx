import React, { useState } from "react";
import HeaderSidebar from "../components/HeaderSidebar";
import data from "../data.json";
import AddLeadModel from "../components/AddLeadModel";
const Leads = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [recordsPerPage, setRecordsPerPage] = useState(5);
	const [showAddLeadModel, setShowAddLeadModel] = useState(false);

	const totalPages = Math.ceil(data.customersData.length / recordsPerPage);
	return (
		<div className="h-screen w-screen">
			<HeaderSidebar />
			<section className="w-full px-4 h-[90%] flex flex-col gap-6 bg-[rgb(241,241,240)]">
				<div className="py-4 flex justify-between">
					<h1 className="font-bold text-2xl">Leads</h1>
					<div className="flex gap-12">
						<span className="bg-[#216ce7] px-2 flex justify-center items-center rounded-md text-white ">
							Import
						</span>
						<span
							onClick={setShowAddLeadModel}
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
					<table class="w-full text-sm text-left rtl:text-right  text-stone-800 ">
						<thead class="text-xs text-gray-700 capitalize bg-white">
							<tr>
								<th
									scope="col"
									class="px-6 py-3">
									Customers
								</th>
								<th
									scope="col"
									class="px-6 py-3">
									Source
								</th>
								<th
									scope="col"
									class="px-6 py-3">
									Since
								</th>
								<th
									scope="col"
									class="px-6 py-3">
									POC
								</th>
								<th
									scope="col"
									class="px-6 py-3">
									Last talk
								</th>
								<th
									scope="col"
									class="px-6 py-3">
									Next
								</th>
							</tr>
						</thead>
						<tbody>
							{data.customersData.map((customer) => {
								return (
									<>
										<tr class="bg-gray-200 border-b  hover:bg-gray-50">
											<td
												scope="row"
												class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
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
														{customer.name}
													</span>
												</div>
											</td>
											<td class="px-6 py-4">
												{customer.source}
											</td>
											<td class="px-6 py-4">
												{customer.since}
											</td>
											<td class="px-6 py-4">
												{customer.POC}
											</td>
											<td class="px-6 py-4">
												{customer.lastTalk}
											</td>
											<td class="px-6 py-4">
												{customer.next}
											</td>
										</tr>
									</>
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
				{showAddLeadModel && <AddLeadModel />}
			</section>
		</div>
	);
};

export default Leads;
