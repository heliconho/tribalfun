import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const LandingLayout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<div className="d-md-none"></div>
			<Footer />
		</>
	);
};

export default LandingLayout;
