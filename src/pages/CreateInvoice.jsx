import React from "react";
import HeaderSidebar from "../components/HeaderSidebar";
import { useSelector } from "react-redux";
import createIcon from "../assets/add.png";
const CreateInvoice = () => {
	const sidebarState = useSelector((state) => state.sidebarOpen);

	return (
		<div className="h-screen w-screen">
			<HeaderSidebar />
			<section
				className={`${
					sidebarState.sidebarIsOpen ? "w-[88%]" : "w-full"
				} p-4 h-[90%] absolute right-0 flex flex-col gap-4 bg-[rgb(241,241,240)] overflow-y-scroll`}>
				<div>
					<h1 className="font-bold text-2xl">Create Invoice</h1>
				</div>
				<div className="bg-white p-2 rounded-md">
					<h1 className="font-semibold text-lg">Basic Information</h1>
					<div className=" p-2 flex justify-between">
						<div className="flex flex-col gap-4 w-[48%]">
							<div className="flex justify-between">
								<span className="text-sm">Type : </span>
								<div className="w-[70%]  flex items-center gap-4">
									<div className="flex items-center gap-2">
										<input
											type="radio"
											id="partyInvoice"
										/>
										<label
											className="text-sm"
											htmlFor="partyInvoice">
											Party Invoice
										</label>
									</div>
									<div className="flex items-center gap-2">
										<input
											type="radio"
											id="cashMemo"
										/>
										<label
											className="text-sm"
											htmlFor="cashMemo">
											Cash Memo
										</label>
									</div>
									<div className="flex items-center gap-2">
										<input
											type="radio"
											id="inter"
										/>
										<label
											className="text-sm"
											htmlFor="inter">
											Inter-State Transfer
										</label>
									</div>
								</div>
							</div>
							{/* 2nd row */}
							<div className="flex justify-between">
								<span className="text-sm">Customer : </span>
								<div className="w-[70%]  flex items-center gap-4">
									<select className="w-full bg-gray-200 pl-2 outline-none rounded-md">
										<option value="1">-</option>
										<option value="2">customer 1</option>
										<option value="3">customer 2</option>
									</select>
								</div>
							</div>
							<div className="flex justify-between">
								<span className="text-sm">Copy from : </span>
								<div className="w-[70%] flex items-center gap-4">
									<select className="w-full bg-gray-200 pl-2 outline-none rounded-md">
										<option value="1">None</option>
										<option value="2">
											Earlier invoice for this customer
										</option>
										<option value="3">
											saved Template
										</option>
									</select>
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-4 w-[40%]">
							<div className="flex justify-between">
								<span className="text-sm">Branch : </span>
								<div className="w-[70%]  flex items-center gap-4">
									<select className="w-full bg-gray-200 pl-2 outline-none rounded-md">
										<option value="1">select branch</option>
										<option value="2">
											Greatcoder - Madhapur
										</option>
										<option value="3">
											Greatcoder - JNTU
										</option>
									</select>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-between">
					<div className="bg-white rounded-md w-[74%] p-2">
						<h1 className="font-semibold text-lg">Party Details</h1>
						<div className="p-2  flex justify-between">
							<div className=" w-[48%] flex flex-col gap-4">
								<div className="flex justify-between ">
									<span className="text-sm">
										Contact Person :{" "}
									</span>
									<input
										className="w-[60%] outline-none bg-gray-200 pl-2"
										type="text"
									/>
								</div>
								<div className="flex justify-between">
									<span className="text-sm">
										Billing Details :{" "}
									</span>
									<div className=" flex flex-col gap-2 w-[60%]">
										<div className="flex gap-2">
											<select className="w-full bg-gray-200 pl-2 outline-none rounded-md">
												<option value="1">
													select Address
												</option>
												<option value="2">
													Hyderabad
												</option>
											</select>
											<div className="px-2 rounded-md bg-gray-200 text-lg shadow-md">
												+
											</div>
										</div>
										<textarea
											className="bg-gray-200 rounded-md resize-none outline-none pl-2 text-sm"
											cols="10"
											rows="4"></textarea>
									</div>
								</div>
							</div>

							<div className="flex flex-col gap-4 w-[48%]">
								<div className="flex justify-between">
									<span className="text-sm">
										Sales Credit :{" "}
									</span>
									<select className="w-[60%] bg-gray-200 pl-2 outline-none rounded-md">
										<option value="1">
											select Executive
										</option>
										<option value="2">Bhupesh P</option>
										<option value="3">Hemalatha V</option>
									</select>
								</div>
								<div className="flex justify-between">
									<span className="text-sm">
										Shipping Address :{" "}
									</span>
									<div className="flex gap-2 w-[60%]">
										<input
											type="checkbox"
											id="shippingAddress"
										/>
										<label htmlFor="shippingAddress">
											Same as Billing Address
										</label>
									</div>
								</div>
								<div className="flex justify-between">
									<span className="text-sm">
										Shipping Details :{" "}
									</span>
									<textarea
										className="bg-gray-200 rounded-md resize-none outline-none pl-2 text-sm w-[60%]"
										cols="10"
										rows="4"></textarea>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-white w-[25%] p-2">
						<span className="font-semibold text-lg">Document Details</span>
						<div className="p-2 flex flex-col gap-4">
							<div className="flex justify-between">
								<label
									className="text-sm"
									htmlFor="invoice">
									Invoice No:{" "}
								</label>
								<input
									className="w-[60%] bg-gray-200 pl-2 rounded outline-none"
									type="text"
									id="invoice"
								/>
							</div>
							<div className="flex justify-between">
								<label
									className="text-sm"
									htmlFor="reference">
									Reference :{" "}
								</label>
								<input
									className="w-[60%] bg-gray-200 pl-2 rounded outline-none"
									type="text"
									id="reference"
								/>
							</div>
							<div className="flex justify-between">
								<label
									className="text-sm"
									htmlFor="invoiceDate">
									Invoice Date :{" "}
								</label>
								<input
									className="w-[60%] bg-gray-200 pl-2 rounded outline-none"
									type="date"
									id="invoiceDate"
								/>
							</div>
							<div className="flex justify-between">
								<label
									className="text-sm"
									htmlFor="dueDate">
									Due Date :{" "}
								</label>
								<input
									className="w-[60%] bg-gray-200 pl-2 rounded outline-none"
									type="date"
									id="dueDate"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-white rounded-md flex flex-col gap-2">
					<h1 className="text-lg font-semibold p-2">Item List</h1>
					<table className="w-full">
						<thead>
							<tr className="flex w-full">
								<th className="p-[3px] border-[2px] flex-1">No.</th>
								<th className="p-[3px] border-[2px] flex-[3]">
									Items & Description
								</th>
								<th className="p-[3px] border-[2px] flex-[1]">
									Qty
								</th>
								<th className="p-[3px] border-[2px] flex-[1]">
									Unit
								</th>
								<th className="p-[3px] border-[2px] flex-[1]">
									Rate(₹)
								</th>
								<th className="p-[3px] border-[2px] flex-[2]">
									Discount(₹)
								</th>
								<th className="p-[3px] border-[2px] flex-[2]">
									Taxable(₹)
								</th>
								<th className="p-[3px] border-[2px] flex-[1]">
									Amt(₹)
								</th>
								<th className="p-[3px] border-[2px] flex-[0.5]"></th>
								<th className="p-[3px] border-[2px] flex-[0.5]"></th>
							</tr>
						</thead>
						{/* <tbody></tbody> */}
					</table>
					<div className="p-2">
						<div className="flex items-center gap-2 p-2 bg-indigo-400 w-28 rounded-md">
							<img
								className="w-4 h-4"
								src={createIcon}
								alt="add item"
							/>
							<span className="font-semibold">Add Item</span>
						</div>
					</div>
				</div>
				<div className="flex justify-between">
					<div className="w-[69%] flex flex-col gap-4">
						<div className="bg-white w-full flex flex-col p-2 gap-4 rounded-md">
							<h1 className="font-semibold text-lg">
								Terms & Conditions
							</h1>
							<div className="flex items-center gap-2 p-2 bg-indigo-400 w-56 rounded-md">
								<img
									className="w-4 h-4"
									src={createIcon}
									alt="add item"
								/>
								<span className="font-semibold">
									Add Term / Conditions
								</span>
							</div>
						</div>
						<div className="w-full flex justify-between">
							<div className="w-[49%] bg-white rounded-md p-2 flex flex-col gap-4">
								<h1 className="font-semibold text-lg">Notes</h1>
								<textarea className="bg-gray-200 resize-none w-full h-24 outline-none text-sm pl-2"></textarea>
							</div>
							<div className="w-[49%] p-2 bg-white rounded-md flex gap-4 flex-col">
								<h1 className="text-lg font-semibold">
									Bank Details
								</h1>
								<div className="flex flex-col gap-2">
									<div className="flex items-center gap-2">
										<select className="w-full bg-gray-200 rounded-md">
											<option value="1">
												Select Bank
											</option>
										</select>
										<img
											className="w-4 h-4"
											src={createIcon}
											alt="add bank"
										/>
									</div>
									<div className="border-[2px] flex flex-col p-2 rounded-md">
										<span>Bank Name : INDUSIND</span>
										<span>Branch : MADHAPUR</span>
										<span>Account No : 259032190326</span>
										<span>IFSC : INDB0000226</span>
									</div>
								</div>
							</div>
						</div>
						<div className="bg-white p-2">
							<h1 className="text-lg font-semibold p-2">
								Payment Recovery
							</h1>
							<div className="flex justify-between">
								<div className="w-[49%] border-[2px] rounded-md p-2 flex flex-col">
									<span className="text-sm">
										Update Recovery Amt
									</span>
									<div className="flex items-center gap-6 h-12">
										<div className="border-[2px] flex items-center h-6">
											<span className="py-[4px] px-2 border-r-[2px]">
												$
											</span>
											<input
												placeholder="Total"
												className="w-28 h-6 bg-gray-200 outline-none text-right"
												type="number"
												name=""
												id=""
											/>
										</div>
										<span className="flex text-sm items-center">
											(Add{" "}
											<div className="border-[2px] flex items-center h-6">
												<div className="py-[4px] px-2 border-r-[2px]">
													$
												</div>
												<input
													type="text"
													className="w-28 h-6 bg-gray-200 outline-none text-right"
													name=""
													id=""
												/>
											</div>
											)
										</span>
									</div>
									<div className="flex flex-col gap-2 p-2">
										<span className="text-sm">
											internal Notes
										</span>
										<input
											type="text"
											className="w-full bg-gray-200 outline-none pl-2"
										/>
									</div>
								</div>
								<div className="border-[2px] flex flex-col justify-between w-[50%] rounded-md">
									<div className="flex flex-col gap-2 p-2">
										<span className="text-sm">
											Updated Invoice Status
										</span>
										<select className="bg-gray-200">
											<option value="1">unpaid</option>
											<option value="2">
												partly paid
											</option>
											<option value="3">paid</option>
										</select>
									</div>
									<div className="flex flex-col gap-2 p-2">
										<span className="text-sm">
											internal Notes
										</span>
										<input
											type="text"
											className="w-full bg-gray-200 outline-none pl-2"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-[30%] flex flex-col gap-4">
						<div className="w-full bg-white rounded-md p-2">
							<div className="flex p-[4px] justify-end gap-16 border-b-[1px]">
								<span>Total Amount before Tax : </span>
								<span>₹0.00</span>
							</div>
							<div className="flex p-[4px] justify-end gap-16 border-b-[1px]">
								<span>Total : </span>
								<span>₹0.00</span>
							</div>
							<div className="flex p-[4px] justify-end gap-2">
								<input
									type="checkbox"
									id="roundoff"
								/>
								<label htmlFor="roundoff">Include Round Off</label>
							</div>
							<div className="flex p-[4px] justify-end gap-16">
								<span>Grand Total : </span>
								<span>₹0.00</span>
							</div>
						</div>
						<div className="flex items-center gap-2 justify-end">
							<div className="flex items-center gap-2 px-2 py-[4px] bg-indigo-400 w-40 rounded-md">
								<img
									className="w-4 h-4"
									src={createIcon}
									alt="add item"
								/>
								<span className="font-semibold text-sm">
									Add Extra charge
								</span>
							</div>
							<div className="flex items-center gap-2 px-2 py-[4px] bg-indigo-400 w-36 rounded-md">
								<img
									className="w-4 h-4"
									src={createIcon}
									alt="add item"
								/>
								<span className="font-semibold text-sm">
									Add Discount
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default CreateInvoice;
