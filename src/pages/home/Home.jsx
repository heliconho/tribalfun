import React from "react";
import ActivityInformation from "../../components/ActivityInformation";
import HomeLayout from "../../components/HomeLayout";
import Banner from "./components/Banner";
import Destination from "./components/Destination";
import VisualJourney from "./components/VisualJourney";
import WhyChooseUs from "./components/WhyChooseUs";

const Home = () => {
	return (
		<HomeLayout>
			<Banner />
			<VisualJourney />
			<Destination />
			<WhyChooseUs />
			<ActivityInformation />
		</HomeLayout>
	);
};

export default Home;
