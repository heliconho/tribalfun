import React from "react";
import merchant from "../../../assets/img/choose/building.png";
import betterPrice from "../../../assets/img/choose/location.png";
import support from "../../../assets/img/choose/support.png";
import SectionTitle from "../../../components/SectionTitle";

import leaf1 from "../../../assets/img/choose/left-leaf.png";
import leaf2 from "../../../assets/img/choose/right-leaf.png";

const WhyChooseUs = () => {
	return (
		<>
			<section className="why-choose-section py-120">
				<img src={leaf1} className="leaf1" alt="" />
				<img src={leaf2} className="leaf2" alt="" />
				<div className="container">
					<SectionTitle
						cate="Why Us"
						title="Why Choose Us"
						subtitle="Find and book a great experience."
					/>
					<div className="choose-wrapper">
						{data?.map((item, i) => (
							<div className="choose-item" key={i}>
								<img src={item?.img} alt="" />
								<h5 className="title">{item?.title}</h5>
								<p>{item?.text}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};
const data = [
	{
		img: betterPrice,
		title: "Better price",
		text: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
	},
	{
		img: support,
		title: "Avalible 24/7",
		text: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
	},
	{
		img: merchant,
		title: "More merchant",
		text: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
	},
];
export default WhyChooseUs;
