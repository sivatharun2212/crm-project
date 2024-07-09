import React, { useState } from "react";
import penIcon from "../assets/pen.png";
import phoneIcon from "../assets/phone.png";
import prohibitionIcon from "../assets/prohibition.png";
import deleteIcon from "../assets/trash.png";
import whatsappIcon from "../assets/whatsapp.png";
import userIcon from "../assets/user.png";
import plusIcon from "../assets/plus.png";
import notificationIcon from "../assets/bell.png";
import questionMarkIcon from "../assets/question-sign.png";
import AddInteractionPopup from "./AddInteractionPopup";

const InfoModel = ({ closeModel }) => {
	const tempInteractions = [
		{
			name: "Syed Fayaz",
			date: "04-Aug-23",
			time: "12:39 PM",
			message: "She will call me by 1 week",
		},
		{
			name: "Syed Fayaz",
			date: "13-Jul-23",
			time: "12:22 PM",
			message: "She will join python",
		},
	];
	const [interactions, setInteractions] = useState(tempInteractions);
	const [isAddInteractionPopupOpen, setIsAddInteractionPopupOpen] = useState(false);
	const [interactionDate, setInteractionDate] = useState("");
	const [interactionTime, setInteractionTime] = useState("");
	const [interactionNote, setInteractionNote] = useState("");

	const handleOpenInteractionPopup = () => {
		setIsAddInteractionPopupOpen(true);
	};

	const closeInteractionPopup = () => {
		setIsAddInteractionPopupOpen(false);
	};

	const handleDateChange = (e) => {
		setInteractionDate(e.target.value);
	};

	const handleTimeChange = (e) => {
		setInteractionTime(e.target.value);
	};

	const handleNoteChange = (e) => {
		setInteractionNote(e.target.value);
	};

	const handleAddInteraction = () => {
		const newInteraction = {
			name: "Syed Fayaz",
			date: interactionDate,
			time: interactionTime,
			message: interactionNote,
		};
		setInteractions([...interactions, newInteraction]);
		setInteractionDate("");
		setInteractionTime("");
		setInteractionNote("");
		setIsAddInteractionPopupOpen(false);
	};

	const clearInteractionFields = () => {
		setInteractionDate("");
		setInteractionTime("");
		setInteractionNote("");
	};
	return (
		<div className="fixed top-0 left-0 bg-black bg-opacity-50 w-full h-full flex justify-center items-center">
			<div className="bg-[rgb(241,241,240)] flex flex-col relative gap-4 p-6 w-[90%] h-[80%] rounded-lg">
				{isAddInteractionPopupOpen && (
					<AddInteractionPopup
						closePopup={closeInteractionPopup}
						date={handleDateChange}
						time={handleTimeChange}
						note={handleNoteChange}
						addInteraction={handleAddInteraction}
						interactionDate={interactionDate}
						interactionTime={interactionTime}
						interactionNote={interactionNote}
						clearFields={clearInteractionFields}
					/>
				)}
				<div className="w-full flex justify-between">
					<h1 className="text-xl font-semibold">Mr. Vijay (gopi Frnd)</h1>
					<div className="flex gap-4">
						<div className="w-8 h-8 p-2 rounded-md shadow-md bg-white">
							<img
								src={whatsappIcon}
								alt="whatsapp"
							/>
						</div>
						<div className="w-8 h-8 p-2 rounded-md shadow-md bg-white">
							<img
								src={phoneIcon}
								alt=""
							/>
						</div>
						<div className="w-8 h-8 p-2 rounded-md shadow-md bg-white">
							<img
								src={penIcon}
								alt=""
							/>
						</div>
						<div className="w-8 h-8 p-2 rounded-md shadow-md bg-white">
							<img
								src={deleteIcon}
								alt=""
							/>
						</div>
						<div className="w-36 h-8 p-2 rounded-md flex items-center gap-2 shadow-md bg-white">
							<img
								className="w-4 h-4"
								src={prohibitionIcon}
								alt=""
							/>
							<span>Mark Inactive</span>
						</div>
						<div className="w-44 h-8 p-2 rounded-md flex items-center gap-2 shadow-md bg-white">
							<span>Convert to Customer</span>
						</div>
						<div className="w-8 h-8 p-2 rounded-md flex items-center gap-2 shadow-md bg-white">
							<span
								onClick={closeModel}
								className="font-semibold cursor-pointer text-stone-600">
								X
							</span>
						</div>
					</div>
				</div>
				<div className="flex items-center gap-2">
					<div className="w-8 h-8 p-2 text-sm cursor-pointer rounded-md flex justify-center items-center border-purple-400 border-[1px] text-purple-500 bg-white">
						-
					</div>
					<div className="h-8 p-2 text-sm rounded-md cursor-pointer flex justify-center items-center border-purple-400 border-[1px] text-purple-500 bg-white">
						Referance
					</div>

					<div className=" text-sm h-8 p-2 rounded-md cursor-pointer flex justify-center items-center border-purple-400 border-[1px] text-purple-500 bg-white">
						Since 04-jul-23
					</div>
					<div className=" h-8 p-2 text-sm rounded-md cursor-pointer flex justify-center gap-2 items-center border-purple-400 border-[1px] text-purple-500 bg-white">
						<span>Stage: Enrolled</span>
						<img
							className="w-4"
							src={penIcon}
							alt="edit"
						/>
					</div>
					<div className=" gap-2 text-sm h-8 p-2 cursor-pointer rounded-md flex justify-center items-center border-purple-400 border-[1px] text-purple-500 bg-white">
						<img
							className="w-4"
							src={userIcon}
							alt="user"
						/>
						<span>Mr. Vijay (gopi frns)</span>
					</div>
					<div className=" gap-2 text-sm h-8 p-2 cursor-pointer rounded-md flex justify-center items-center border-purple-400 border-[1px] text-purple-500 bg-white">
						<img
							className="w-4"
							src={phoneIcon}
							alt="contact"
						/>
						<span>Other contacts</span>
					</div>
					<div className=" text-sm h-8 p-2 rounded-md cursor-pointer flex justify-center items-center border-purple-400 border-[1px] text-purple-500 bg-white">
						Koushik G
					</div>
					<div className="text-sm gap-2 h-8 p-2 rounded-md cursor-pointer flex justify-center items-center border-purple-400 border-[1px] text-purple-500 bg-white">
						<img
							className="w-4"
							src={phoneIcon}
							alt="contact"
						/>
						<span>9121651277</span>
					</div>
					<div className="text-sm h-8 p-2 rounded-md flex cursor-pointer justify-center items-center border-purple-400 border-[1px] text-purple-500 bg-white">
						Full Stack Java
					</div>
				</div>
				<div className="h-full flex justify-between">
					<div className="w-[60%] h-full bg-white rounded-md p-4 flex flex-col gap-2 shadow-md">
						<div className="w-full h-[20%] border-[1px] p-2">
							<div className="flex items-center gap-2">
								<h1 className="font-semibold">
									Requirements & Background
								</h1>
								<img
									className="w-4 h-4"
									src={penIcon}
									alt="edit"
								/>
							</div>
							<p>- Having backlogs will join after 15th july</p>
						</div>
						<div className="w-full h-[48%] flex justify-between">
							<div className="h-full w-[49%] flex p-2 flex-col justify-between border-[1px]">
								<div className="flex flex-col gap-2">
									<h1 className="font-semibold">
										Last Interaction
									</h1>
									<p className="text-sm">
										Having backlogs will join after 15th
										july
									</p>
								</div>
								<div className=" flex gap-2 flex-col">
									<p className="text-sm text-gray-500">
										koushik G @ 28-Jun-23 06:32 PM (375 days
										ago)
									</p>
									<div className="flex gap-2">
										<div
											onClick={
												handleOpenInteractionPopup
											}
											className="bg-purple-200 p-[5px] rounded-md cursor-pointer">
											<img
												className="w-4"
												src={plusIcon}
												alt="add interaction"
											/>
										</div>
										<div className="bg-purple-200 p-[5px] rounded-md cursor-pointer">
											<img
												className="w-4"
												src={notificationIcon}
												alt="notifications"
											/>
										</div>
										<div className="bg-purple-200 p-[5px] rounded-md cursor-pointer">
											<img
												className="w-4"
												src={questionMarkIcon}
												alt="questionmark"
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="h-full w-[49%] flex flex-col gap-2 p-2 border-[1px]">
								<h1 className="font-semibold">Next Action</h1>
								<p className="text-sm">
									Having backlogs will join after 15th
								</p>
								<p className="text-sm text-gray-500">
									Koushik G @ 16-Jul-23 11:00 AM (Before 356
									days)
								</p>
								<div className="flex gap-2">
									<div className="bg-purple-200 p-[5px] rounded-md cursor-pointer">
										<img
											className="w-4"
											src={penIcon}
											alt="edit"
										/>
									</div>
									<div className="bg-purple-200 p-[5px] rounded-md cursor-pointer">
										<img
											className="w-4"
											src={deleteIcon}
											alt="delete"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full h-[30%] border-[1px] p-2 flex flex-col justify-between">
							<h1 className="font-semibold">Tags</h1>
							<div className="flex gap-2">
								<input
									className="outline-none border-[1px] rounded-md"
									type="text"
									placeholder="Enter Tag"
								/>
								<div className="bg-purple-200 px-2 p-[5px] rounded-md cursor-pointer">
									✔
								</div>
							</div>
						</div>
					</div>
					<div className="w-[39%] h-full bg-white rounded-md p-4 flex flex-col gap-2 shadow-md">
						<h1 className="text-lg font-semibold">Interactions</h1>
						{interactions.map((interaction) => {
							return (
								<div className="p-2 border-[1px] rounded-md bg-gray-100">
									<div className="flex justify-between ">
										<span className="text-sm text-gray-400">
											{interaction.name}
										</span>
										<span className="text-sm text-gray-400">
											{`${interaction.date} ${interaction.time}`}
										</span>
									</div>
									<p className="text-stone-900">
										{interaction.message}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default InfoModel;
