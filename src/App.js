import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Landing from "./pages/landing/Landing";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/login" element={<Landing />} />
				<Route path="/sign-up" element={<Landing />} />
				<Route path="/forget-pass" element={<Landing />} />
				<Route path="/confirm-email" element={<Landing />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
