import React, { useRef } from "react";
import Slider from "react-slick";
import { SmsIcon } from "../Icon";
import mobileActivity from "../assets/img/activity-2.png";
import shapes from "../assets/img/activity-info.png";
import activityInfo from "../assets/img/activity.png";
import useScreen from "../hooks/useScreen";
import { NextSlide, PrevSlide } from "./SliderNav";
const ActivityInformation = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};
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
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 450,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<section className="activity-info-section pt-lg-5">
			<img src={shapes} className="activity-info" alt="" />
			<div className="container">
				{screen >= 768 ? (
					<div className="d-none d-md-block">
						<div className="row">
							<div className="col-lg-6">
								<div className="position-relative">
									<img className="mw-100" src={activityInfo} alt="" />
									<div className="sticky-badge">
										【燒肉放題推介】嚴選7間高質日式燒肉放題 |
										附價錢及優惠
									</div>
								</div>
							</div>
							<div className="col-lg-6 pt-xl-5">
								<div className="activity-content pt-lg-5 mt-xl-5">
									<h6 className="subtitle">Activity Information</h6>
									<h2 className="title">
										Know more about the latest offers in restaurant
										and event!
									</h2>
									<form onSubmit={handleSubmit}>
										<div className="d-flex gap-3">
											<div className="position-relative input-with-start-icon">
												<span className="start-icon">
													<SmsIcon />
												</span>
												<input
													className="form-control"
													placeholder="Input email address"
												/>
											</div>
											<button type="submit" className="cmn-btn">
												Sign up now
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				) : (
					<>
						<div className="section-title">
							<h6 class="subtitle">Activity Information</h6>
							<h2 className="title">More Latest Offers in Hong Kong</h2>
						</div>
						<div className="activity-info-slider">
							<Slider {...settings} ref={sliderRef}>
								{data?.map((item, i) => (
									<React.Fragment key={i}>
										<div className="activity-slide-item">
											<div className="position-relative">
												<img src={item?.img} alt="" />
												<span className="badge">Hot</span>
											</div>
											<h6 className="title">{item?.title}</h6>
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
					</>
				)}
			</div>
		</section>
	);
};
const data = [
	{
		img: mobileActivity,
		title: "【燒肉放題推介】嚴選7間高質日式燒肉放題 | 附價錢及優惠",
	},
	{
		img: mobileActivity,
		title: "【燒肉放題推介】嚴選7間高質日式燒肉放題 | 附價錢及優惠",
	},
	{
		img: mobileActivity,
		title: "【燒肉放題推介】嚴選7間高質日式燒肉放題 | 附價錢及優惠",
	},
];
export default ActivityInformation;
