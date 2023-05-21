import React from "react";
import Header from "./Header";

const LandingLayout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
};

export default LandingLayout;
