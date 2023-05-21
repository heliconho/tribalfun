import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useScreen from "../hooks/useScreen";
import Footer from "./Footer";
import Header from "./Header";

const LandingLayout = ({ children }) => {
	const screen = useScreen();
	const navigate = useNavigate();
	useEffect(() => {
		if (screen >= 576) {
			navigate("/");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [screen]);
	return (
		<>
			<Header />
			{children}
			{/* {screen < 768 && <Footer />} */}
			<Footer />
		</>
	);
};

export default LandingLayout;
