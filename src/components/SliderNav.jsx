import React from "react";
import { NextSlideIcon, PrevSlideIcon } from "../Icon";

export const NextSlide = () => {
	return (
		<div className="slide-next">
			<NextSlideIcon />
		</div>
	);
};

export const PrevSlide = () => {
	return (
		<div className="slide-prev">
			<PrevSlideIcon />
		</div>
	);
};
