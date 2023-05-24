import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Link, useNavigate } from "react-router-dom";
import {
	AngleRight,
	CalendarAdd,
	Check,
	EditIcon,
	InfoCircle,
	SubmitNewsletterIcon,
	UsersIcon,
} from "../../Icon";
import paypal from "../../assets/img/paypal.png";
import img1 from "../../assets/img/single/1.png";
import BreadcrumbOne from "../../components/BreadcrumbOne";
import HomeLayout from "../../components/HomeLayout";
import Input from "../../components/Input";
import InputTwo from "../../components/InputTwo";
const Booking = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(null);
	const onChange = (dates) => {
		const [start, end] = dates;
		setStartDate(start);
		setEndDate(end);
	};

	const [startTime, setStartTime] = useState(new Date());
	const [endTime, setEndTime] = useState(null);

	const navigate = useNavigate();

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
						<div className="row g-4 flex-wrap-reverse destination-single-wrapper">
							<div className="col-xl-8 col-lg-7">
								<div className="booking-info-content">
									<h3 className="title d-none d-lg-block">
										Request to Book
									</h3>
									<div className="d-none d-md-block">
										<div className="row g-4">
											<div className="col-sm-6">
												<InputTwo
													label="Dates"
													startIcon={<CalendarAdd />}
													endIcon={<EditIcon />}
												>
													<DatePicker
														selected={startDate}
														onChange={onChange}
														startDate={startDate}
														endDate={endDate}
														selectsRange
													/>
												</InputTwo>
											</div>
											<div className="col-sm-6">
												<InputTwo
													label="Guest"
													startIcon={<UsersIcon />}
													endIcon={<EditIcon />}
													placeholder="6 Guest"
												/>
											</div>
											<div className="col-sm-6">
												<InputTwo
													label="Times"
													startIcon={<CalendarAdd />}
													endIcon={<EditIcon />}
													flex
												>
													<DatePicker
														selected={startTime}
														onChange={(date) =>
															setStartTime(date)
														}
														showTimeSelect
														showTimeSelectOnly
														timeIntervals={15}
														timeCaption="Time"
														dateFormat="h:mm aa"
													/>
													<span className="mx-2">-</span>
													<DatePicker
														selected={endTime}
														onChange={(date) => setEndTime(date)}
														showTimeSelect
														showTimeSelectOnly
														timeIntervals={15}
														timeCaption="Time"
														dateFormat="h:mm aa"
													/>
												</InputTwo>
											</div>
										</div>
									</div>
									<h5 className="sub-title">Pay with</h5>
									<label className="pay-width-checkbox">
										<input type="checkbox" />
										<span className="check">
											<Check />
										</span>
										<img src={paypal} alt="" />
									</label>
									<div className="mb-3">Or using a credit card</div>
									<div className="card-form">
										<div className="row g-4">
											<div className="col-sm-12">
												<Input label="Cardholder Name" />
											</div>
											<div className="col-sm-12">
												<Input
													label="Card Number"
													placeholder="Ex:  31111 1111 1111 1111"
												/>
											</div>
											<div className="col-6 col-md-4">
												<Input label="CVV" placeholder="CVV code" />
											</div>
											<div className="col-6 col-md-4">
												<Input
													label="Expiration"
													placeholder="MM/YY"
												/>
											</div>
											<div className="col-12">
												<label className="pay-width-checkbox form-check">
													<input type="checkbox" />
													<span className="check">
														<Check />
													</span>
													<span className="form-check-label">
														Save card
													</span>
												</label>
											</div>
											<div className="col-12 mt-5">
												<Input
													placeholder="Type here..."
													label="Message the host (Optional)"
													textarea
												/>
											</div>
											<div className="col-12 d-flex mt-5">
												<button className="cmn-btn" type="submit">
													Confirm and pay
												</button>
											</div>
											<div className="col-12 d-flex mt-0 d-sm-none">
												<button
													className="cmn-outline-btn text-title"
													style={{
														marginTop: "40px",
														width: "100%",
														fontWeight: "700",
													}}
													onClick={() => navigate(-1)}
												>
													Back
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* Sidebar Booking Area */}
							<div className="col-xl-4 col-lg-5">
								<div className="destination-sidebar">
									<img
										src={img1}
										alt=""
										className="w-100 rounded-16 mb-4 d-none d-lg-block"
									/>
									<h3 className="booking-info-title d-lg-none mb-sm-4">
										Request to Book
									</h3>
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
									<h5 className="sub-title d-none d-lg-block">
										Price details
									</h5>
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
