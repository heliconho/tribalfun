import React from "react";
import { Link } from "react-router-dom";
import { SearchIcon } from "../../../Icon";
import desk1 from "../../../assets/img/landing-banner/desk-1.png";
import desk2 from "../../../assets/img/landing-banner/desk-2.png";
import desk3 from "../../../assets/img/landing-banner/desk-3.png";
import mobile1 from "../../../assets/img/landing-banner/mobile-1.png";
import mobile2 from "../../../assets/img/landing-banner/mobile-2.png";
import mobile3 from "../../../assets/img/landing-banner/mobile-3.png";
import useScreen from "../../../hooks/useScreen";
const LandingBanner = () => {
	const screen = useScreen();
	return (
		<>
			<section className="landing-banner">
				<div className="container">
					<div className="landing-page-banner-wrapper">
						<div className="content-area">
							<div className="content">
								<h1 className="title">Tribal fun</h1>
								<h4 className="subtitle">LIVE A NEW AND FULL LIFE</h4>
								<p>
									xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
								</p>
								<Link to="#" className="cmn-btn">
									<SearchIcon /> Search
								</Link>
							</div>
						</div>
						<div className="images-area">
							<div className="item">
								<img src={screen < 768 ? mobile1 : desk1} alt="" />
								<h2 className="title">場地</h2>
							</div>
							<div className="item">
								<img src={screen < 768 ? mobile2 : desk2} alt="" />
								<h2 className="title">到會</h2>
							</div>
							<div className="item">
								<img src={screen < 768 ? mobile3 : desk3} alt="" />
								<h2 className="title">活動</h2>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default LandingBanner;
