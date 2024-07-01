import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { useState } from "react";

import Login from "./pages/Login";

function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<div className="App h-screen">
			{/* <Header
				menuStatus={isMenuOpen}
				setMenu={setIsMenuOpen}
			/>
			<Sidebar menuStatus={isMenuOpen} />
			<section className="w-full h-[90%] bg-blue-100"></section> */}
			<Login />
		</div>
	);
}

export default App;
