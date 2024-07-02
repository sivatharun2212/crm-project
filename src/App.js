import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Leads from "./pages/Leads";

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={<Login />}
				/>
				<Route
					path="/home"
					element={<Home />}
				/>
				<Route
					path="/leads"
					element={<Leads />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
