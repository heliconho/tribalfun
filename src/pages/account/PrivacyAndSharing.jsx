import React from "react";
import AccountLayout from "./AccountLayout";

const PrivacyAndSharing = () => {
	return (
		<AccountLayout>
			<PrivacyAndSharingArticle />
		</AccountLayout>
	);
};
export const PrivacyAndSharingArticle = () => {
	return (
		<div className="wallet-section-inner" id="privacy-and-sharing">
			<div className="grp">
				<h3 className="title">Privacy & sharing</h3>
				<div className="form-switch-wrapper">
					<div className="left">
						<h6 className="sub-title">
							Allow this web to track your location
						</h6>
						<p>
							xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
						</p>
					</div>
					<div className="right mb-4">
						<div className="form-check form-switch form--switch">
							<input className="form-check-input" type="checkbox" />
						</div>
					</div>
				</div>
				<div className="form-switch-wrapper">
					<div className="left">
						<h6 className="sub-title">
							Include my profile and listing in search engines{" "}
						</h6>
						<p className="m-0">
							Turning this on means search engines, like Google, will
							display your profile and listing pages in search results.
						</p>
					</div>
					<div className="right mb-4">
						<div className="form-check form-switch form--switch">
							<input className="form-check-input" type="checkbox" />
						</div>
					</div>
				</div>
				<div className="form-switch-wrapper">
					<div className="left">
						<h6 className="sub-title">Data sharing</h6>
						<p className="m-0">
							Decide how your data is used for Tribal fun research.
						</p>
					</div>
					<div className="right mb-4">
						<div className="form-check form-switch form--switch">
							<input className="form-check-input" type="checkbox" />
						</div>
					</div>
				</div>
				<div className="form-switch-wrapper">
					<div className="left">
						<h6 className="sub-title">Terms</h6>
						<p className="m-0">
							xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
						</p>
					</div>
				</div>
				<div className="form-switch-wrapper">
					<div className="left">
						<h6 className="sub-title">
							Changes to the Service and/or Terms:
						</h6>
						<p>
							xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
						</p>
						<p>
							xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default PrivacyAndSharing;
