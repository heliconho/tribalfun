import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import ConfirmEmailPage from "./pages/auth/ConfirmEmailPage";
import ForgetPassPage from "./pages/auth/ForgetPassPage";
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import Home from "./pages/home/Home";
import Landing from "./pages/landing/Landing";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/login" element={<SignInPage />} />
				<Route path="/sign-up" element={<SignUpPage />} />
				<Route path="/forget-pass" element={<ForgetPassPage />} />
				<Route path="/confirm-email" element={<ConfirmEmailPage />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
