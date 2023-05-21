import React from "react";
import { Link } from "react-router-dom";
import { SubmitNewsletterIcon } from "../Icon";
import logo from "../assets/img/logo.png";
import SocialIcons from "./SocialIcons";
const Footer = () => {
	return (
		<>
			<footer>
				<div className="container">
					<div className="footer-wrapper">
						<div className="left">
							<img src={logo} className="logo" alt="" />
							<p>
								xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
							</p>
							<SocialIcons />
						</div>
						<div className="right">
							<ul className="footer-links d-none d-sm-flex">
								<li>
									<Link to="/discover">Discover</Link>
								</li>
								<li>
									<Link to="/blog">Blog</Link>
								</li>
								<li>
									<Link to="/about">About us</Link>
								</li>
								<li>
									<Link to="/faqs">FAQ</Link>
								</li>
							</ul>
							<h5 className="text-end">Join our community 🔥</h5>
							<form className="subscribe-form ms-auto">
								<input
									type="text"
									placeholder="Enter your email"
									className="form-control"
								/>
								<button type="button">
									<SubmitNewsletterIcon />
								</button>
							</form>
						</div>
						{/* <div className="w-100 d-lg-none"> */}
						<div className="w-100 bottom">
							<div className="row">
								<div className="col-6">
									<h6>Legal</h6>
									<ul>
										<li>
											<Link to="#">Terms of Service</Link>
										</li>
										<li>
											<Link to="#">Privacy Policy</Link>
										</li>
										<li>
											<Link to="#">Return Policy</Link>
										</li>
									</ul>
								</div>
								<div className="col-6">
									<h6>Categories</h6>
									<ul>
										<li>
											<Link to="#">Places</Link>
										</li>
										<li>
											<Link to="#">Items</Link>
										</li>
										<li>
											<Link to="#">Events</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
