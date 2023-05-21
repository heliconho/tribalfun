import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const LandingLayout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default LandingLayout;
