import React from "react";
import { CheckIcon } from "../Icon";
import logo from "../assets/img/logo.png";
const ConfirmEmail = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="text-start text-sm-center auth-content">
					<img src={logo} alt="" className="logo d-none d-sm-block" />
					<h6 className="d-sm-none subtitle"> - Sign Up</h6>
					<h3 className="title d-sm-none">
						Let’s confirm it’s really you
					</h3>
					<h3 className="title mb-3 font-black">
						Let’s confirm it’s really you
					</h3>
					<p className="subtext">
						Help us secure your account. Please complete the verifications
						below
					</p>
					<div className="link-sent">
						<CheckIcon />
						<span className="info">
							A Link has been sent to your email joseph••••@gm•••.com
						</span>
					</div>
					<button
						className="cmn-btn w-100"
						type="submit"
						data-bs-dismiss="modal"
					>
						Continue
					</button>
				</div>
			</form>
		</>
	);
};

export default ConfirmEmail;
