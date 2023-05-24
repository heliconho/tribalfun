import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.scss";
import ConfirmEmailPage from "./pages/auth/ConfirmEmailPage";
import ForgetPassPage from "./pages/auth/ForgetPassPage";
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import DestinationDetails from "./pages/destination/DestinationDetails";
import DestinationPage from "./pages/destination/DestinationPage";
import Home from "./pages/home/Home";
import Landing from "./pages/landing/Landing";
function App() {
	const Wrapper = ({ children }) => {
		const location = useLocation();
		useEffect(() => {
			setTimeout(() => {
				document.documentElement.scrollTo(0, 0);
			}, 500);
		}, [location.pathname, location.search]);
		return children;
	};
	return (
		<BrowserRouter>
			<Wrapper>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/login" element={<SignInPage />} />
					<Route path="/sign-up" element={<SignUpPage />} />
					<Route path="/forget-pass" element={<ForgetPassPage />} />
					<Route path="/confirm-email" element={<ConfirmEmailPage />} />
					<Route path="/home" element={<Home />} />
					<Route path="/destination" element={<DestinationPage />} />
					<Route
						path="/destination/:id"
						element={<DestinationDetails />}
					/>
				</Routes>
			</Wrapper>
		</BrowserRouter>
	);
}

export default App;
