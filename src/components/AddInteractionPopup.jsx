import React from "react";
import deleteIcon from "../assets/trash.png";
const AddInteractionPopup = ({
	closePopup,
	date,
	time,
	note,
	addInteraction,
	clearFields,
	interactionNote,
	interactionTime,
	interactionDate,
}) => {
	return (
		<div className="fixed top-0 left-0 bg-black bg-opacity-50 w-full h-full flex justify-center items-center">
			<div className="bg-[rgb(241,241,240)] flex flex-col relative gap-4 p-4 w-[40%] h-[30%] rounded-lg">
				<h1 className="font-semibold">Enter Interaction</h1>
				<div className="flex gap-6">
					<input
						onChange={date}
						className="p-[4px] rounded-md"
						type="date"
						value={interactionDate}
					/>
					<input
						onChange={time}
						className="p-[4px] rounded-md"
						type="time"
						value={interactionTime}
					/>
					<div className="flex items-center gap-2">
						<input
							type="checkbox"
							id="location"
						/>
						<label htmlFor="location">Tag Location</label>
					</div>
				</div>
				<div className="flex gap-4">
					<input
						onChange={note}
						className="w-full outline-none pl-2"
						type="text"
						placeholder="Interaction note here.."
						value={interactionNote}
					/>
					<div
						onClick={clearFields}
						className="p-[5px] rounded-md bg-white shadow-sm">
						<img
							className="w-4"
							src={deleteIcon}
							alt=""
						/>
					</div>
				</div>
				<div className="flex gap-10">
					<button
						onClick={addInteraction}
						className="bg-blue-200 px-2 flex justify-center items-center rounded-md ">
						<span className="font-semibold">✔ Save</span>
					</button>
					<button className="bg-red-200 px-2 py-[4px] flex justify-center items-center rounded-md ">
						<span
							onClick={closePopup}
							className="font-semibold">
							X Cancle
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default AddInteractionPopup;
