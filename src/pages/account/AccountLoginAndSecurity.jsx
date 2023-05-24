import React from "react";
import { NavLink } from "react-router-dom";
import { EyeIcon, EyeIcon2, Personal, Phone } from "../../Icon";
import BreadcrumbTwo from "../../components/BreadcrumbTwo";
import HomeLayout from "../../components/HomeLayout";
import Input from "../../components/Input";

const AccountLoginAndSecurity = () => {
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
							<div
								className="wallet-section-inner"
								style={{ minWidth: "320px" }}
							>
								<h4 className="title mb-30">Login & security</h4>
								<h3 className="subtitle">Change your password</h3>
								<div
									style={{ maxWidth: "400px", margin: "0 auto 30px" }}
								>
									<div className="mb-2">Password requirements</div>
									<ul>
										<li>MUST contain at least 8 characters</li>
										<li>
											MUST contain at least one uppercase letter
										</li>
										<li>MUST contain ats least one number</li>
									</ul>
								</div>
								<Input
									label="Old password"
									type="password"
									placeholder="************"
								/>
								<Input
									label="New password"
									type="password"
									placeholder="************"
								/>
								<Input
									label="Verify password"
									type="password"
									placeholder="************"
								/>
								<div className="d-flex flex-wrap justify-content-end mt-5 pt-lg-4">
									<button
										type="submit"
										className="cmn-btn h-48-56"
										style={{ minWidth: "120px" }}
									>
										Save
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
							<EyeIcon2 /> Notifications
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
export default AccountLoginAndSecurity;
