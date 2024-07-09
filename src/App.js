import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Leads from "./pages/Leads";
import Users from "./pages/Users";
import Prospects from "./pages/Prospects";
import Invoices from "./pages/Invoices";
import CreateInvoice from "./pages/CreateInvoice";

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
				<Route
					path="/users"
					element={<Users />}
				/>
				<Route
					path="/prospects"
					element={<Prospects />}
				/>
				<Route
					path="/invoices"
					element={<Invoices />}
				/>
				<Route
					path="/create-invoice"
					element={<CreateInvoice />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
