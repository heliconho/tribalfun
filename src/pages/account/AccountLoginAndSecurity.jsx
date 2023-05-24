import React from "react";
import Input from "../../components/Input";
import AccountLayout from "./AccountLayout";

const AccountLoginAndSecurity = () => {
	return (
		<>
			<AccountLayout>
				<AccountLoginAndArticle />
			</AccountLayout>
		</>
	);
};
export const AccountLoginAndArticle = () => {
	return (
		<>
			<div className="wallet-section-inner" id="login-and-security">
				<h4 className="title mb-30">Login & security</h4>
				<h3 className="subtitle">Change your password</h3>
				<div style={{ maxWidth: "400px", margin: "0 auto 30px" }}>
					<div className="mb-2">Password requirements</div>
					<ul>
						<li>MUST contain at least 8 characters</li>
						<li>MUST contain at least one uppercase letter</li>
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
		</>
	);
};

export default AccountLoginAndSecurity;
