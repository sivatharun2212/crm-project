import React from "react";

const AddLeadModel = () => {
	return (
		<div className="fixed top-0 left-0 bg-black bg-opacity-50 w-full h-full flex justify-center items-center">
			<div className="bg-green-400 p-12 w-[60%] h-[80%] rounded-lg">
				<input
					type="text"
					placeholder="first name"
				/>
				<input
					type="text"
					placeholder="last name"
				/>
				<input
					type="Email"
					placeholder="yourmail@gmail.com"
				/>
				<input
					type="number"
					name=""
					id=""
				/>
				<input
					type="text"
					placeholder="country"
				/>
				<input
					type="text"
					placeholder="state"
				/>
				<input
					type="text"
					placeholder="city"
				/>
			</div>
		</div>
	);
};

export default AddLeadModel;
