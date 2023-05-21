import React from "react";
import LandingLayout from "../../components/LandingLayout";
import LandingBanner from "./components/LandingBanner";

const Landing = () => {
	return (
		<>
			<LandingLayout>
				<LandingBanner></LandingBanner>
			</LandingLayout>
		</>
	);
};

export default Landing;
