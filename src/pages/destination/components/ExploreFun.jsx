import React from "react";
import useScreen from "../../../hooks/useScreen";

const ExploreFun = () => {
	const screen = useScreen();
	return (
		<>
			<section className="explore-fun">
				<div className="container">
					{screen >= 576 ? (
						<>
							<h2 className="title">Explore Fun!</h2>
							<div className="info">
								<span className="info-badge"> 11,300+</span>
								<span>Fun places, items, events...</span>
							</div>
						</>
					) : (
						<>
							<h6 className="subtitle"> - Places</h6>
							<h2 className="title">Explore Party Room</h2>
						</>
					)}
				</div>
			</section>
			{screen >= 576 && (
				<div className="container">
					<hr className="fun-hr" />
				</div>
			)}
		</>
	);
};

export default ExploreFun;
