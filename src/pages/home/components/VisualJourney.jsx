import React, { useRef } from "react";
import Slider from "react-slick";
import img1 from "../../../assets/img/visual/1.png";
import img2 from "../../../assets/img/visual/2.png";
import img3 from "../../../assets/img/visual/3.png";
import SectionTitle from "../../../components/SectionTitle";
import { NextSlide, PrevSlide } from "../../../components/SliderNav";
import useScreen from "../../../hooks/useScreen";

const VisualJourney = () => {
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
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	const screen = useScreen();
	return (
		<section className="visual-journey overflow-hidden py-120">
			<div className="container">
				<SectionTitle
					cate="Categories"
					title={
						screen < 576
							? "Explore by Key Words"
							: "Explore the site through a visual journey"
					}
					subtitle="Find and book a great experience."
				/>

				<Slider {...settings} ref={sliderRef}>
					{data?.map((item, i) => (
						<React.Fragment key={i}>
							<div className="visual-slide-item">
								<img src={item?.img} alt="" />
								<div className="cont">
									<h6>{item?.title}</h6>
									<span className="badge">{item?.info}</span>
								</div>
							</div>
						</React.Fragment>
					))}
				</Slider>
				<div className="d-flex d-md-none justify-content-center gap-3 mt-4">
					<div onClick={prevSlide}>
						<PrevSlide />
					</div>
					<div onClick={nextSlide}>
						<NextSlide />
					</div>
				</div>
			</div>
		</section>
	);
};
const data = [
	{ img: img1, title: "Places to have fun together", info: "2,123 places" },
	{ img: img2, title: "Items that you may interest", info: "2,123 items" },
	{ img: img3, title: "Events to enjoy the life", info: "223 events" },
];
export default VisualJourney;
