import React from "react";
import AccountLayout from "./AccountLayout";

const Notification = () => {
	return (
		<AccountLayout>
			<div className="wallet-section-inner" style={{ minWidth: "320px" }}>
				<div className="grp">
					<h3 className="title">Latest offers</h3>
					<div className="form-switch-wrapper">
						<div className="left">
							<h6>Inspiration and offers</h6>
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
							<h6>Inspiration and offers</h6>
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
							<h6>News and promotions</h6>
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
							<h6>News and promotions</h6>
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
							<h6>Account activity</h6>
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
							<h6>Account activity</h6>
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
							<h6>Reminders</h6>
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
		</AccountLayout>
	);
};

export default Notification;
