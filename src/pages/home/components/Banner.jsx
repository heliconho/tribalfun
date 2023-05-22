import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import {
	CalendarAdd,
	CalendarRemove,
	Location,
	SearchIcon,
	UsersIcon,
} from "../../../Icon";
import desktopImg from "../../../assets/img/banner/banner-desk.png";
import mobileImg from "../../../assets/img/banner/banner-mobile.png";
import connected_user from "../../../assets/img/banner/connected-users.png";
import leftShape from "../../../assets/img/banner/left-shape.png";
import rightShape from "../../../assets/img/banner/right-shape.png";
import useScreen from "../../../hooks/useScreen";
const Banner = () => {
	const screen = useScreen();
	return (
		<section className="banner-section">
			<img src={leftShape} className="leftShape" alt="" />
			<img src={rightShape} className="rightShape" alt="" />
			<div className="container">
				<div className="banner-wrapper">
					<div className="img">
						<img src={screen < 576 ? mobileImg : desktopImg} alt="" />
					</div>
					<div className="content">
						<h6>It's time to have fun🚀</h6>
						<h1 className="title">
							Slogan Slogan Slogan Slogan Slogan Slogan{" "}
						</h1>
						<p className="text d-none d-sm-block">
							Type some sentences to describe the advantages about this
							platform to attract them for example, Are you seeking a
							good place for holding a party to have fun with friends?
						</p>
						<div className="d-flex d-sm-none">
							<Link to="#" className="cmn-btn">
								Book Now
							</Link>
						</div>
					</div>
				</div>
				{screen >= 768 && <BannerBookingForm />}
			</div>
		</section>
	);
};

const BannerBookingForm = () => {
	const [tab, setTab] = useState("1");

	const [date, setDate] = useState();
	const [checkout, setCheckout] = useState();

	return (
		<>
			<div className="banner-booking-form">
				<form>
					<ul className="tab-menu">
						<li
							className={tab == "1" ? "active" : ""}
							onClick={() => setTab("1")}
						>
							Places
						</li>
						<li
							className={tab == "2" ? "active" : ""}
							onClick={() => setTab("2")}
						>
							Catering
						</li>
						<li
							className={tab == "3" ? "active" : ""}
							onClick={() => setTab("3")}
						>
							Events
						</li>
					</ul>
					<div className="booking-form-row">
						<div className="item">
							<label className="item-title">
								<Location /> Location
							</label>
							<input
								type="text"
								className="form-control"
								placeholder="Search destinations"
							/>
						</div>
						<div className="item">
							<label className="item-title">
								<CalendarAdd /> Check in
							</label>
							<DatePicker
								className="form-control"
								selected={date}
								value={date}
								minDate={new Date()}
								dropdownMode="select"
								onChange={(e) => {
									setDate(e);
								}}
								placeholderText="Add dates"
							/>
						</div>
						<div className="item">
							<label className="item-title">
								<CalendarRemove /> Check out
							</label>
							<DatePicker
								className="form-control"
								selected={checkout}
								value={checkout}
								minDate={date}
								dropdownMode="select"
								onChange={(e) => {
									setCheckout(e);
								}}
								placeholderText="Add dates"
							/>
						</div>
						<div className="item">
							<label className="item-title">
								<UsersIcon /> Who
							</label>
							<input
								type="text"
								className="form-control"
								placeholder="Add guests"
							/>
						</div>
						<div className="item">
							<Link to="#" className="cmn-btn">
								<SearchIcon /> Search
							</Link>
						</div>
					</div>
				</form>
			</div>
			<div className="d-flex flex-wrap align-items-center connected-users">
				<div className="position-relative">
					<img src={connected_user} alt="" />
					<span className="count">+15</span>
				</div>
				<span>
					16 people <strong>booked</strong> a visit in last 24 hours
				</span>
			</div>
		</>
	);
};

export default Banner;
