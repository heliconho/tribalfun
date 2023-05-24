import React from "react";

const BreadcrumbTwo = ({ subtitle, title, text, extraClass, children }) => {
	return (
		<>
			<section
				className={`breadcrumb-section-2 ${extraClass ? extraClass : ""}`}
			>
				<div className="container">
					<div className="text-area">
						<h5 className="subtitle">{subtitle}</h5>
						<h2 className="title">{title}</h2>
						<p>{text}</p>
					</div>
					{children}
				</div>
			</section>
		</>
	);
};

export default BreadcrumbTwo;
