import React from "react";
import useScreen from "../hooks/useScreen";

const SectionTitle = ({ title, subtitle, cate }) => {
	const screen = useScreen();
	return (
		<div className="section-title">
			{cate && screen < 576 ? (
				<h6 class="d-sm-none subtitle">- {cate}</h6>
			) : (
				""
			)}
			<h2 className="title">{title}</h2>
			{subtitle && screen >= 576 ? <p>{subtitle}</p> : ""}
		</div>
	);
};

export default SectionTitle;
