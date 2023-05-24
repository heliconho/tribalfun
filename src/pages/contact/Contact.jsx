import React from "react";
import { Link } from "react-router-dom";
import { Envelop, Phone } from "../../Icon";
import BreadcrumbTwo from "../../components/BreadcrumbTwo";
import HomeLayout from "../../components/HomeLayout";
import Input from "../../components/Input";

const Contact = () => {
	return (
		<>
			<HomeLayout>
				<BreadcrumbTwo
					subtitle="Contact us"
					title="Contact us"
					text="Hey, 陳大文"
				/>
				<section className="wallet-section contact-content-section px-3 py-120">
					<div className="container">
						<div className="wallet-section-wrapper flex-wrap contact-content">
							<ContactSidebar />
							<div
								className="wallet-section-inner"
								style={{ minWidth: "320px" }}
							>
								<Input label="First Name" placeholder="大文" />
								<Input label="Last Name" placeholder="陳" />
								<Input
									label="Email"
									placeholder="davidchan@gmail.com"
								/>
								<Input label="Phone" placeholder="+852 65551222" />
								<Input
									label="Leave your message to us (Optional)"
									placeholder="Type here..."
									textarea
								/>
								<div className="d-flex flex-wrap justify-content-end">
									<button
										type="submit"
										className="cmn-btn h-48-56"
										style={{ minWidth: "199px" }}
									>
										Send Message
									</button>
								</div>
							</div>
						</div>
					</div>
				</section>
			</HomeLayout>
		</>
	);
};
export const ContactSidebar = () => {
	return (
		<>
			<div className="sidebar-menu" style={{ maxWidth: "350px" }}>
				<h3 className="title">
					Contact <br /> information
				</h3>
				<p>
					Fill up the form and our team will get back to you with in 24
					hours.
				</p>
				<ul>
					<li>
						<Link to="tel:+852 28888888" className="active">
							<Phone /> +852 28888888
						</Link>
					</li>
					<li>
						<Link to="mailto:tribalfun@gmail.com">
							<Envelop /> tribalfun@gmail.com
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
};
export default Contact;
