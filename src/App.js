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
			</Routes>
		</BrowserRouter>
	);
}

export default App;
