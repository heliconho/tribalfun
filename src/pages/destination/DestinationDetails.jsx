import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
	AngleRight,
	Building,
	CalendarAdd,
	CalendarRemove,
	Connectivity,
	Entertainment,
	Equipment,
	FlagIcon,
	Food,
	GalleryIcon,
	GameList,
	General,
	Kids,
	LocationIcon,
	More,
	MusicEq,
	Profile,
	Share,
	Tableware,
	UsersIcon,
} from "../../Icon";
import author from "../../assets/img/author.png";
import img1 from "../../assets/img/single/1.png";
import img2 from "../../assets/img/single/2.png";
import img3 from "../../assets/img/single/3.png";
import BreadcrumbOne from "../../components/BreadcrumbOne";
import HomeLayout from "../../components/HomeLayout";
import { NextSlide, PrevSlide } from "../../components/SliderNav";
import useScreen from "../../hooks/useScreen";
import Faqs from "./components/Faqs";
import RecomendationPlace from "./components/RecomendationPlace";

const DestinationDetails = () => {
	const screen = useScreen();
	const sliderRef = useRef();
	const nextSlide = () => {
		sliderRef.current.slickNext();
	};
	const prevSlide = () => {
		sliderRef.current.slickPrev();
	};
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
	};
	// const [tab, setTab] = useState("party-room");
	const [reserve, setReserve] = useState(false);

	useEffect(() => {
		if (screen >= 576) {
			setReserve(true);
		} else {
			setReserve("details");
		}
	}, [screen]);

	return (
		<>
			<HomeLayout>
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
						<Link to="#">Party Room</Link>
					</li>
				</BreadcrumbOne>
				{/* Destination Single Heros */}
				<section className="explore-fun overflow-hidden">
					<div className="container px-0 px-sm-3">
						{screen >= 576 ? (
							<>
								<div className="d-flex flex-wrap align-items-center justify-content-between gap-4">
									<div>
										<h2 className="title">
											A Little Bit Of Sweetness
										</h2>
										<div
											className="info"
											style={{ "--base": "#FF5C05" }}
										>
											<span className="info-badge font-medium">
												Party Room
											</span>
											<span>
												Address : 觀塘鴻圖道70號利安工業大廈
											</span>
										</div>
									</div>
									<div className="d-flex flex-wrap gap-3">
										<Link to="#">
											<LocationIcon />
										</Link>
										<Link to="#">
											<Share />
										</Link>
										<Link to="#">
											<More />
										</Link>
									</div>
								</div>
								<div className="single-images">
									<img src={images[0].img} alt="" />
									<div className="right-images">
										<img src={images[1].img} alt="" />
										<img src={images[2].img} alt="" />
									</div>
								</div>
							</>
						) : (
							<>
								<div className="hero-slider">
									<Slider {...settings} ref={sliderRef}>
										{images?.map((item, i) => (
											<React.Fragment key={i}>
												<div className="hero-slide-item">
													<img src={item?.img} alt="" />
													<span className="hot-badge badge">
														02/06 <GalleryIcon />
													</span>
												</div>
											</React.Fragment>
										))}
									</Slider>
								</div>
								<div className="d-flex d-md-none justify-content-center gap-3 mt-4">
									<div onClick={prevSlide}>
										<PrevSlide />
									</div>
									<div onClick={nextSlide}>
										<NextSlide />
									</div>
								</div>
								<h2 className="title text-center mt-4 mb-4">
									Sun A Little Bit Of Sweetness
								</h2>
								<ul className="single-page-tab-menu">
									<li>
										<Link
											to="#"
											// onClick={() => setTab("party-room")}
											// className={tab == "party-room" ? "active" : ""}
											className="active"
										>
											Party Room
										</Link>
									</li>
									<li>
										<Link
											to="#"
											// onClick={() => setTab("kwun-tong")}
											// className={tab == "kwun-tong" ? "active" : ""}
										>
											Kwun Tong
										</Link>
									</li>
								</ul>
							</>
						)}
					</div>
				</section>
				{/* Destination Rental Unit */}
				<section className="destination-single py-120 pt-0 pt-md-5 mt-md-3">
					<div className="container">
						<div className="row g-4 destination-single-wrapper">
							{reserve === "details" ? (
								<div className="col-xl-8 col-lg-7">
									{screen >= 576 && (
										<h3 className="title mt-4 mt-md-0">
											Entire rental unit
										</h3>
									)}
									<ul className="meta-info">
										<li>
											<UsersIcon /> 2-8 Guests
										</li>
										<li>
											<FlagIcon /> 0 Bedroom
										</li>
										<li>
											<FlagIcon /> 0 Private bath
										</li>
									</ul>
									{screen >= 576 && (
										<>
											<div className="hosted-by  mb-3">
												Hosted by:
											</div>
											<div className="author">
												<img src={author} alt="" />
												<div className="info">
													<h6 className="name">ABC Company</h6>
													<span>Joined in March 2023</span>
												</div>
											</div>
											<div className="boardgames mb-4 mb-md-5">
												<div className="item">
													<div className="icon">
														<Building />
													</div>
													<div className="cont">
														<h6>Switch Boardgames</h6>
														<p>
															xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
														</p>
													</div>
												</div>
												<div className="item">
													<div className="icon">
														<Profile />
													</div>
													<div className="cont">
														<h6>Entertainment Facilities</h6>
														<p>
															xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
														</p>
													</div>
												</div>
											</div>
										</>
									)}
									<div className="d-flex">
										<Link to="#" className="cmn-btn bg-base-2">
											Overview
										</Link>
									</div>
									<div className="read-more-txt mt-4 mb-2 text-title">
										獨立約100尺私人派對房間 收費已包括享用場內任何設施
										唔使同人share💟 房間設計上適合2-8人
										（休閒娛樂小空間）💆🏼‍♂‍💆🏻‍♀‍💆🏻
										適合朋友、家庭聚會👨‍👩‍👧‍👦
										房間內設有餐具，觀迎你地自攜食物
										另外設有電動麻雀Plan
										啱晒追求速度嘅麻雀友🏃‍♀‍🏃🏃🏽‍♂‍
									</div>
									<Link to="#" className="font-mediun text-title">
										Read More
									</Link>
									<h3 className="title font-black mt-32 mb-3">
										What this place offers
									</h3>
									<Faqs id="place" data={faqs} />
									<div className="d-flex justify-content-center mt-5">
										<Link
											class="cmn-btn"
											to="/booking"
											onClick={() => {
												setReserve(false);
												document.documentElement.scrollTo(0, 0);
											}}
										>
											Reserve
										</Link>
									</div>
								</div>
							) : (
								<div className="col-xl-4 col-lg-5">
									<div className="destination-sidebar">
										<h3 className="title">
											$100 <small>/hour</small>
										</h3>
										<div className="subtitle">
											<strong>5 Hours</strong> in{" "}
											<strong>A Little Bit Of Sweetness</strong>
										</div>
										<div className="date">
											Feb 15, 2023 - Feb 20, 2023
										</div>
										<div className="check-in-out">
											<div className="item">
												<div class="item-title">Check in</div>
												<div className="info">
													<CalendarAdd />{" "}
													<div>
														5:00 pm <span>Feb 15, 2023</span>
													</div>
												</div>
											</div>
											<div className="item">
												<div class="item-title">Check out</div>
												<div className="info">
													<CalendarRemove />
													<div>
														10:00 pm <span>Feb 15, 2023</span>
													</div>
												</div>
											</div>
										</div>
										<div className="item-title">Guest</div>
										<div className="form--select mb-4">
											<span className="start-icon">
												<UsersIcon />
											</span>
											<select className="form-select">
												<option>6 Guest</option>
												<option>12 Guest</option>
												<option>10 Guest</option>
												<option>8 Guest</option>
											</select>
										</div>
										<Link
											to="#"
											className="cmn-btn"
											style={{ paddingBlock: "15px" }}
										>
											Reserve
										</Link>
										<ul className="price-info">
											<li>
												<small>You won't be charged yet</small>
											</li>
											<li className="mt-4">
												<span>$100 x 5 hours</span>
												<strong>$500</strong>
											</li>
											<li>
												<span>10% reward coupon discount</span>
												<strong>-$10</strong>
											</li>
											<li>
												<span>Service fee</span>
												<strong>$0</strong>
											</li>
											<li className="total">
												<span>Total before taxes</span>
												<strong>$490</strong>
											</li>
											<li className="px-0">
												<div className="w-100 reporttxt">
													<FlagIcon /> Report this listing
												</div>
											</li>
										</ul>
									</div>
								</div>
							)}
						</div>
					</div>
				</section>
				<RecomendationPlace />
			</HomeLayout>
		</>
	);
};
const images = [
	{
		img: img1,
	},
	{
		img: img2,
	},
	{
		img: img3,
	},
];
const faqs = [
	{
		title: "Entertainment  Facilities",
		text: "",
		info: ["電動麻雀機 x 1", "骰盅", "魚蝦蟹", "骰寶"],
		facility: "4 facilities",
		icon: <Entertainment />,
	},
	{
		title: "Switch Game List",
		text: "",
		info: ["電動麻雀機 x 1", "骰盅", "魚蝦蟹", "骰寶"],
		facility: "5 facilities",
		icon: <GameList />,
	},
	{
		title: "General",
		text: "",
		info: ["電動麻雀機 x 1", "骰盅", "魚蝦蟹", "骰寶"],
		facility: "8 facilities",
		icon: <General />,
	},
	{
		title: "Audio-visual Equipment",
		text: "",
		info: ["電動麻雀機 x 1", "骰盅", "魚蝦蟹", "骰寶"],
		facility: "2 facilities",
		icon: <Equipment />,
	},
	{
		title: "Food and drinks",
		text: "",
		info: ["電動麻雀機 x 1", "骰盅", "魚蝦蟹", "骰寶"],
		facility: "6 facilities",
		icon: <Food />,
	},
	{
		title: "Tableware",
		text: "",
		info: ["電動麻雀機 x 1", "骰盅", "魚蝦蟹", "骰寶"],
		facility: "8 facilities",
		icon: <Tableware />,
	},
	{
		title: "Kids",
		text: "",
		info: ["電動麻雀機 x 1", "骰盅", "魚蝦蟹", "骰寶"],
		facility: "0 facilities",
		icon: <Kids />,
	},
	{
		title: "Connectivity",
		text: "",
		info: ["電動麻雀機 x 1", "骰盅", "魚蝦蟹", "骰寶"],
		facility: "2 facilities",
		icon: <Connectivity />,
	},
	{
		title: "Music Equipment",
		text: "",
		info: ["電動麻雀機 x 1", "骰盅", "魚蝦蟹", "骰寶"],
		facility: "16 facilities",
		icon: <MusicEq />,
	},
];
export default DestinationDetails;
