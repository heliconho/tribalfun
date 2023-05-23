import React, { useState } from "react";
import { FilterIcon } from "../../../Icon";
import { destinations } from "../../../assets/data/destinations";
import DestinationCard from "../../../components/DestinationCard";

const Destination = () => {
	const [index, setIndex] = useState(1);
	const tab__data = [...new Set(destinations?.map((item) => item?.category))];

	const [tempData, setTempData] = useState(destinations);
	const handleData = (category) => {
		setTempData(destinations?.filter((item) => item?.category === category));
	};
	return (
		<section className="destination-section py-120 pt-5">
			<div className="container">
				<div className="section-title-2">
					<h5 className="subtitle">- Party Room</h5>
					<h2 className="title">Explore Hong Kong for fun!</h2>
					<p className="text d-none d-sm-block">
						Events and items e.g DIY workshop, birthday items, cakes etc.
						to meet all you need and more than 1,300 destinations in Hong
						Kong. Have fun just from now!
					</p>
				</div>
				<div className="filter-wrapper d-none d-md-flex">
					<ul className="filter-tab-menu">
						{tab__data &&
							tab__data.map((item, i) => (
								<li
									key={i}
									onClick={() => {
										setIndex(i);
										handleData(item);
									}}
									className={index === i ? "active" : ""}
								>
									{item}
								</li>
							))}
					</ul>
					<button className="filter-btn">
						Filter <FilterIcon />
					</button>
				</div>
				<div className="row g-4 justify-content-center">
					{tempData
						?.map((item, i) => (
							<div className="col-xl-3 col-lg-4 col-sm-6" key={i}>
								<DestinationCard {...item} index={i + 1} />
							</div>
						))
						.slice(0, 8)}
				</div>
			</div>
		</section>
	);
};

export default Destination;
