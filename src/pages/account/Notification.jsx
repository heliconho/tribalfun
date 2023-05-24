import React from "react";
import AccountLayout from "./AccountLayout";

const Notification = () => {
	return (
		<AccountLayout>
			<AccountNotificationsArticle />
		</AccountLayout>
	);
};
export const AccountNotificationsArticle = () => {
	return (
		<div className="wallet-section-inner" id="notification">
			<div className="grp">
				<h3 className="title">Latest offers</h3>
				<div className="form-switch-wrapper">
					<div className="left">
						<h6 className="sub-title">Inspiration and offers</h6>
						<span>On: Email</span>
					</div>
					<div className="right">
						<div className="form-check form-switch form--switch">
							<input className="form-check-input" type="checkbox" />
						</div>
					</div>
				</div>
				<div className="form-switch-wrapper">
					<div className="left">
						<h6 className="sub-title">Inspiration and offers</h6>
						<span>On: Site</span>
					</div>
					<div className="right">
						<div className="form-check form-switch form--switch">
							<input className="form-check-input" type="checkbox" />
						</div>
					</div>
				</div>
			</div>
			<div className="grp">
				<h3 className="title">Tribal fun updates</h3>
				<div className="form-switch-wrapper">
					<div className="left">
						<h6 className="sub-title">News and promotions</h6>
						<span>On: Email</span>
					</div>
					<div className="right">
						<div className="form-check form-switch form--switch">
							<input className="form-check-input" type="checkbox" />
						</div>
					</div>
				</div>
				<div className="form-switch-wrapper">
					<div className="left">
						<h6 className="sub-title">News and promotions</h6>
						<span>On: Email</span>
					</div>
					<div className="right">
						<div className="form-check form-switch form--switch">
							<input className="form-check-input" type="checkbox" />
						</div>
					</div>
				</div>
			</div>
			<div className="grp">
				<h3 className="title">Account activity and policies</h3>
				<div className="form-switch-wrapper">
					<div className="left">
						<h6 className="sub-title">Account activity</h6>
						<span>On: Email</span>
					</div>
					<div className="right">
						<div className="form-check form-switch form--switch">
							<input className="form-check-input" type="checkbox" />
						</div>
					</div>
				</div>
				<div className="form-switch-wrapper">
					<div className="left">
						<h6 className="sub-title">Account activity</h6>
						<span>On: Email</span>
					</div>
					<div className="right">
						<div className="form-check form-switch form--switch">
							<input className="form-check-input" type="checkbox" />
						</div>
					</div>
				</div>
			</div>
			<div className="grp">
				<h3 className="title">Booking Reminders</h3>
				<div className="form-switch-wrapper">
					<div className="left">
						<h6 className="sub-title">Reminders</h6>
						<span>On: Email</span>
					</div>
					<div className="right">
						<div className="form-check form-switch form--switch">
							<input className="form-check-input" type="checkbox" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Notification;
