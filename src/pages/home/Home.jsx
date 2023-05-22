import React from "react";
import HomeLayout from "../../components/HomeLayout";
import Banner from "./components/Banner";
import VisualJourney from "./components/VisualJourney";

const Home = () => {
	return (
		<HomeLayout>
			<Banner />
			<VisualJourney />
		</HomeLayout>
	);
};

export default Home;
