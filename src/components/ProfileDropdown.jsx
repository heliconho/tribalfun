import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	AvatarIcon,
	MerchantIcon,
	OrderIcon,
	SettingIcon,
	WalletIcon,
} from "../Icon";
import useScreen from "../hooks/useScreen";

const ProfileDropdown = ({ setMenuTrigger }) => {
	const [open, setOpen] = useState(false);
	const screen = useScreen();
	return (
		<>
			<div
				className="dropdown __profile-dropdown"
				onClick={() => setMenuTrigger(false)}
			>
				<button
					className="__dropdown-icon"
					onClick={() => setOpen(!open)}
					onBlur={() => setOpen(false)}
				>
					<AvatarIcon />
				</button>
				<div
					className={`__dropdown-menu ${open ? "active" : ""}`}
					onClick={() => {
						setOpen(false);
					}}
				>
					<ul className="__profile-dropdown-menu">
						<li>
							<Link to="/order">
								<OrderIcon />
								<span>Order</span>
							</Link>
						</li>
						<li>
							<Link to="/wallet/payment">
								<WalletIcon />
								<span>Wallet</span>
							</Link>
						</li>
						<li>
							<hr className="my-3" />
						</li>
						<li>
							<Link to="/merchant">
								<MerchantIcon />
								<span>Merchant login</span>
							</Link>
						</li>
						<li>
							<Link to="/setting">
								<SettingIcon />
								<span>Setting</span>
							</Link>
						</li>
					</ul>
					<div className="btn-wrapper">
						{screen >= 576 ? (
							<>
								<button
									className="cmn-btn"
									type="button"
									data-bs-toggle="modal"
									data-bs-target="#login"
								>
									Log In
								</button>
								<button
									className="cmn-outline-btn"
									type="button"
									data-bs-toggle="modal"
									data-bs-target="#sign-up"
								>
									Sign Up
								</button>
							</>
						) : (
							<>
								<Link to="/login" className="cmn-btn">
									Log In
								</Link>
								<Link to="/sign-up" className="cmn-outline-btn">
									Sign Up
								</Link>
							</>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default ProfileDropdown;
