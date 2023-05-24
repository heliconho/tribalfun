import React from "react";

const BreadcrumbTwo = ({ subtitle, title, text }) => {
	return (
		<>
			<section className="breadcrumb-section-2">
				<div className="container">
					<h5 className="subtitle">{subtitle}</h5>
					<h2 className="title">{title}</h2>
					<p>{text}</p>
				</div>
			</section>
		</>
	);
};

export default BreadcrumbTwo;