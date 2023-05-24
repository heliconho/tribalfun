import React from "react";
import { Link } from "react-router-dom";
import { AngleRight, InfoCircle, SubmitNewsletterIcon } from "../../Icon";
import img1 from "../../assets/img/single/1.png";
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
				<section className="booking-section py-120 pt-4 mt-2">
					<div className="container">
						<div className="row g-4 destination-single-wrapper">
							<div className="col-xl-8 col-lg-7"></div>
							<div className="col-xl-4 col-lg-5">
								<div className="destination-sidebar">
									<img
										src={img1}
										alt=""
										className="w-100 rounded-16 mb-4"
									/>
									<div className="subtitle">
										<strong>5 Hours</strong> in{" "}
										<strong>A Little Bit Of Sweetness</strong>
									</div>
									<div className="date">
										5:00 pm Feb 8, 2023 - 10:00 pm Feb 8, 2023
									</div>
									<form className="subscribe-form w-100 mw-100 mb-4">
										<input
											type="text"
											className="form-control"
											placeholder="Use your reward coupon"
										/>
										<button type="button">
											<SubmitNewsletterIcon />
										</button>
									</form>
									<h5 className="sub-title">Price details</h5>
									<ul className="price-info mt-3">
										<li>
											<span>$100 x 5 hours</span>
											<strong>$500</strong>
										</li>
										<li>
											<span>10% reward coupon discount</span>
											<strong>-$10</strong>
										</li>
										<li>
											<span>
												Service fee{" "}
												<span
													data-bs-toggle="tooltip"
													title="This is Information about service fee"
												>
													<InfoCircle />
												</span>
											</span>
											<strong>$0</strong>
										</li>
										<li className="total">
											<span>Total payment</span>
											<strong>$490</strong>
										</li>
										<li className="px-0 pt-0 pb-0">
											<div className="w-100 small-txt">
												Your booking is protected by{" "}
												<strong className="font-black">
													Tribal fun
												</strong>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>
			</HomeLayout>
		</>
	);
};

export default Booking;
