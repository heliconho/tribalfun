import React from "react";
import { Link } from "react-router-dom";
import { AngleRight } from "../../Icon";
import BreadcrumbOne from "../../components/BreadcrumbOne";
import HomeLayout from "../../components/HomeLayout";

const Booking = () => {
	return (
		<>
			<HomeLayout>
				<BreadcrumbOne>
					<li>
						<Link to="/home">Home</Link>
						<AngleRight />
					</li>
					<li>
						<Link to="#">Destinations</Link>
						<AngleRight />
					</li>
					<li>
						<Link to="#">Pasir putih resort</Link>
						<AngleRight />
					</li>
					<li>Request to Book</li>
				</BreadcrumbOne>
				<div className="row g-4 destination-single-wrapper">
					<div className="col-xl-8 col-lg-7"></div>
					<div className="col-xl-4 col-lg-5"></div>
				</div>
			</HomeLayout>
		</>
	);
};

export default Booking;
