import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { EyeIcon, EyeIcon2, Personal, Phone } from "../../Icon";
import BreadcrumbTwo from "../../components/BreadcrumbTwo";
import HomeLayout from "../../components/HomeLayout";
import useScreen from "../../hooks/useScreen";
import { AccountLoginAndArticle } from "./AccountLoginAndSecurity";
import { AccountNotificationsArticle } from "./Notification";
import { PrivacyAndSharingArticle } from "./PrivacyAndSharing";

const AccountLayout = ({ children }) => {
	const screen = useScreen();
	const navigate = useNavigate();
	useEffect(() => {
		if (screen >= 576) {
			navigate("/setting/personal-info");
		}
	}, [screen]);
	return (
		<>
			<HomeLayout>
				<BreadcrumbTwo
					subtitle="Profile"
					title="Account Setting"
					text="Hey, 陳大文"
					extraClass="account-layout"
				/>
				<section className="wallet-section contact-content-section px-3 py-120">
					<div className="container">
						<div
							className="wallet-section-wrapper flex-wrap contact-content"
							id="personal-info"
						>
							<AccountSettingSidebar />
							{children}

							{screen < 768 ? (
								<>
									<AccountLoginAndArticle />
									<AccountNotificationsArticle />
									<PrivacyAndSharingArticle />
								</>
							) : (
								""
							)}
						</div>
					</div>
				</section>
			</HomeLayout>
		</>
	);
};
export const AccountSettingSidebar = () => {
	const screen = useScreen();
	return (
		<>
			<div className="sidebar-menu" style={{ maxWidth: "350px" }}>
				<h3 className="title">Profil setting</h3>
				<p>
					Welcome to your account. We've used your email address and
					password to set up your account.
				</p>
				<ul>
					{screen >= 768 ? (
						<>
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
									<EyeIcon2 /> Notifications
								</NavLink>
							</li>
							<li>
								<NavLink to="/setting/privacy-and-sharing">
									<EyeIcon /> Privacy & sharing
								</NavLink>
							</li>
						</>
					) : (
						<>
							<li>
								<a href="#personal-info">
									<Phone /> Personal info
								</a>
							</li>
							<li>
								<a href="#login-and-security">
									<Personal /> Login & security
								</a>
							</li>
							<li>
								<a href="#notification">
									<EyeIcon2 /> Notifications
								</a>
							</li>
							<li>
								<a href="#privacy-and-sharing">
									<EyeIcon /> Privacy & sharing
								</a>
							</li>
						</>
					)}
				</ul>
			</div>
		</>
	);
};

export default AccountLayout;
