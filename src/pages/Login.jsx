import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
	const navigate = useNavigate();
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async () => {
		try {
			const loginReq = { mobileNbr: userName, password: password };
			const response = await axios.post(
				"http://13.127.184.9:8090/crm/auth/login",
				loginReq
			);
			console.log(response.data);
			navigate("/home");
		} catch (error) {
			console.error("Error fetching data:", error?.response?.data?.response);
			alert(error?.response?.data?.response);
		}
	};

	return (
		<div className="bg-[#e7f2ff] flex justify-center items-center w-screen h-screen">
			<div className="bg-[#65c8ff] w-[34%] h-[70%] fixed rounded-full -left-48 -top-52"></div>
			<div className="bg-[#143d81] w-[35%] h-[70%] fixed rounded-full -right-48 -bottom-52"></div>
			<div className="w-[25%] overflow-hidden flex flex-col items-center relative h-[70%]  rounded-xl bg-white">
				<div className="w-[600px]  h-[600px] absolute -top-[490px] rounded-full  bg-[#216ce7]"></div>
				<h2 className="mt-36 text-center text-xl">Welcome Back</h2>
				<div className="w-full flex items-center mt-12 flex-col gap-4">
					<input
						className="bg-[#ededed] pl-4 h-12 rounded-full w-[80%]"
						onChange={(e) => setUserName(e.target.value)}
						type="email"
						value={userName}
						placeholder="Username"
						name=""
						id=""
					/>
					<input
						className="bg-[#ededed] h-12 pl-4 rounded-full w-[80%]"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Password"
						name=""
						id=""
					/>
					<button
						onClick={handleLogin}
						className="bg-[#216ce7] h-12 text-white w-[80%] rounded-full">
						Sign In
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
