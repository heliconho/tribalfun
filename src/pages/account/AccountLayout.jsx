import React from "react";
import { NavLink } from "react-router-dom";
import { EyeIcon, EyeIcon2, Personal, Phone } from "../../Icon";
import BreadcrumbTwo from "../../components/BreadcrumbTwo";
import HomeLayout from "../../components/HomeLayout";

const AccountLayout = ({ children }) => {
	return (
		<>
			<HomeLayout>
				<BreadcrumbTwo
					subtitle="Profile"
					title="Account Setting"
					text="Hey, 陳大文"
				/>
				<section className="wallet-section contact-content-section px-3 py-120">
					<div className="container">
						<div className="wallet-section-wrapper flex-wrap contact-content">
							<AccountSettingSidebar />
							{children}
						</div>
					</div>
				</section>
			</HomeLayout>
		</>
	);
};
export const AccountSettingSidebar = () => {
	return (
		<>
			<div className="sidebar-menu" style={{ maxWidth: "350px" }}>
				<h3 className="title">Profil setting</h3>
				<p>
					Welcome to your account. We've used your email address and
					password to set up your account.
				</p>
				<ul>
					<li>
						<NavLink to="/setting/personal-info">
							<Phone /> Personal info
						</NavLink>
					</li>
					<li>
						<NavLink to="/setting/login-and-security">
							<Personal /> Login & security
						</NavLink>
					</li>
					<li>
						<NavLink to="/setting/notification">
							<EyeIcon2 /> Notificationsv
						</NavLink>
					</li>
					<li>
						<NavLink to="/setting/privacy-and-sharing">
							<EyeIcon /> Privacy & sharing
						</NavLink>
					</li>
				</ul>
			</div>
		</>
	);
};

export default AccountLayout;
