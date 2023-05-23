import React from "react";
import { Link } from "react-router-dom";
import { AngleRight } from "../../Icon";
import ActivityInformation from "../../components/ActivityInformation";
import BreadcrumbOne from "../../components/BreadcrumbOne";
import HomeLayout from "../../components/HomeLayout";
import useScreen from "../../hooks/useScreen";
import ExploreDestination from "./components/ExploreDestination";
import ExploreFun from "./components/ExploreFun";

const DestinationPage = () => {
	const screen = useScreen();
	return (
		<>
			<HomeLayout>
				{screen >= 576 && (
					<BreadcrumbOne>
						<li>
							<Link to="/home">Home</Link>
							<AngleRight />
						</li>
						<li>
							<Link to="#">Category</Link>
							<AngleRight />
						</li>
						<li>
							<Link to="#">Place</Link>
						</li>
					</BreadcrumbOne>
				)}
				<ExploreFun />
				<ExploreDestination />
				<ActivityInformation />
			</HomeLayout>
		</>
	);
};

export default DestinationPage;
