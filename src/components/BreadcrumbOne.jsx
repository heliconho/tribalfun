import React from "react";

const BreadcrumbOne = ({ children }) => {
	return (
		<>
			<div className="breadcrumb-section">
				<div className="container">
					<ul className="breadcrumb-1">{children}</ul>
				</div>
			</div>
		</>
	);
};

export default BreadcrumbOne;
