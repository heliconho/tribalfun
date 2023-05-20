import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "../Icon";

const SocialIcons = () => {
	return (
		<>
			<ul className="social-icons">
				<li>
					<Link to="#">
						<Facebook />
					</Link>
				</li>
				<li>
					<Link to="#">
						<Instagram />
					</Link>
				</li>
				<li>
					<Link to="#">
						<Twitter />
					</Link>
				</li>
			</ul>
		</>
	);
};

export default SocialIcons;
