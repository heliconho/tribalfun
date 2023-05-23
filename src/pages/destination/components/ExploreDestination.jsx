import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FilterIcon, LoadingIcon } from "../../../Icon";
import { destinations_two } from "../../../assets/data/destinations";
import DestinationCard from "../../../components/DestinationCard";
import useScreen from "../../../hooks/useScreen";
import { SearchForm } from "../../home/components/Banner";

const ExploreDestination = () => {
	const [index, setIndex] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const tab__data = [
		...new Set(destinations_two?.map((item) => item?.category)),
	];

	const [tempData, setTempData] = useState(destinations_two);
	const handleData = (category) => {
		setTempData(
			destinations_two?.filter((item) => item?.category === category)
		);
	};
	const handleClick = () => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 1500);
	};
	const [filterOpen, setFilterOpen] = useState(false);
	const screen = useScreen();

	useEffect(() => {
		if (screen > 576) {
			setFilterOpen(true);
		} else {
			setFilterOpen(false);
		}
	}, [screen]);

	return (
		<>
			<section>
				<div className="px-3 px-sm-0">
					<div className="container">
						<div className="filter-wrapper d-none d-md-flex mb-md-42">
							<ul
								className="filter-tab-menu"
								style={{ "--base": "#FF5C05" }}
							>
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
						<div className="d-flex d-sm-none justify-content-between mb-5 pb-lg-4">
							<div
								className="form-select filter-select"
								onClick={() => setFilterOpen(!filterOpen)}
							>
								Filter By
							</div>
							<select className="form-select filter-select">
								<option>Sort By</option>
								<option>Name</option>
								<option>Price</option>
								<option>Date</option>
								<option>Rating</option>
							</select>
						</div>
						{filterOpen && (
							<div className="explore-filter-form">
								<SearchForm />
							</div>
						)}
						<div className="row g-4">
							{tempData
								?.map((item, i) => (
									<div className="col-xl-3 col-lg-4 col-sm-6" key={i}>
										<DestinationCard {...item} index={i + 1} />
									</div>
								))
								.slice(0, 12)}
						</div>
						<div className="d-flex justify-content-center mt-lg-5 pt-5">
							{isLoading ? (
								<Link to="#" className="cmn-outline-btn loading-btn">
									<span className="loading-spinner">
										<LoadingIcon />
									</span>
									Loading
								</Link>
							) : (
								<Link
									to="#"
									className="cmn-btn loader-btn"
									onClick={() => handleClick()}
								>
									Load More
								</Link>
							)}
						</div>
					</div>
				</div>
				<div className="py-120 pt-0"></div>
			</section>
		</>
	);
};

export default ExploreDestination;
