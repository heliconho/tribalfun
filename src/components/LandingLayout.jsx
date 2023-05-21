import React from "react";
import useScreen from "../hooks/useScreen";
import Footer from "./Footer";
import Header from "./Header";

const LandingLayout = ({ children }) => {
	const screen = useScreen();
	return (
		<>
			<Header />
			{children}
			{screen < 768 && <Footer />}
		</>
	);
};

export default LandingLayout;
