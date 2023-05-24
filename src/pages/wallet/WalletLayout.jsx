import React from "react";
import { NavLink } from "react-router-dom";
import { FlagI, HeartI, WalletI } from "../../Icon";
import BreadcrumbTwo from "../../components/BreadcrumbTwo";
import HomeLayout from "../../components/HomeLayout";
import useScreen from "../../hooks/useScreen";

const WalletLayout = ({ children }) => {
	const screen = useScreen();
	return (
		<>
			<HomeLayout>
				<BreadcrumbTwo
					subtitle="Profile"
					title="Wallet"
					text="Hey, 陳大文"
				/>
				<section className="wallet-section px-3 py-120">
					<div className="container">
						<div className="wallet-section-wrapper">
							{screen >= 768 && <WalletSidebar />}
							<div className="wallet-section-inner">{children}</div>
						</div>
					</div>
				</section>
			</HomeLayout>
		</>
	);
};
export const WalletSidebar = () => {
	return (
		<>
			<div className="sidebar-menu">
				<h3 className="title">Wallet</h3>
				<p>
					Welcome to your account. We've used your email address and
					password to set up your account.
				</p>
				<ul>
					<li>
						<NavLink to="/wallet/payment">
							<WalletI /> Payment
						</NavLink>
					</li>
					<li>
						<NavLink to="/wallet/point">
							<HeartI /> Points
						</NavLink>
					</li>
					<li>
						<NavLink to="/wallet/voucher">
							<FlagI /> Voucher
						</NavLink>
					</li>
				</ul>
			</div>
		</>
	);
};
export default WalletLayout;
