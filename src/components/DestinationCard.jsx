import React from "react";
import { Link } from "react-router-dom";

const DestinationCard = ({ img, title, capacity, price, subtitle, index }) => {
	return (
		<>
			<div className="destination-card">
				<Link to={`/destination/${index}`} className="link" />
				<div className="img-container">
					<img src={img} alt="" />
				</div>
				<div className="cont">
					<h5 className="title">{title}</h5>
					<div>{subtitle}</div>
					<hr />
					<div className="d-flex justify-content-between align-items-center">
						<span>{capacity}</span>
						<h3>
							{price}
							<small>/hour</small>
						</h3>
					</div>
				</div>
			</div>
		</>
	);
};

export default DestinationCard;
