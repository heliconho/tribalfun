import React from "react";
import { Link } from "react-router-dom";
import { destinations } from "../../../assets/data/destinations";
import DestinationCard from "../../../components/DestinationCard";

const RecomendationPlace = () => {
	return (
		<>
			<section className="recomendation-place py-120">
				<div className="container">
					<div className="section-title text-md-start ms-md-0">
						<h6 className="subtitle d-md-none">- Recomendation place</h6>
						<h2 className="title fw-md-900">Recomendation place</h2>
					</div>
					<div className="row g-4">
						{destinations
							?.map((item, i) => (
								<div className="col-xl-3 col-lg-4 col-sm-6" key={i}>
									<DestinationCard {...item} index={i + 1} />
								</div>
							))
							.slice(5, 9)}
					</div>
					<div className="d-flex justify-content-center mt-lg-5 pt-5">
						<Link to="#" className="cmn-outline-btn loader-btn">
							View all
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export default RecomendationPlace;
