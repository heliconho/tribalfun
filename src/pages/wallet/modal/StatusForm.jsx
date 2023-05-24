import React from "react";
import { Link } from "react-router-dom";
import { CheckIcon } from "../../../Icon";
import logo from "../../../assets/img/logo.png";
import useScreen from "../../../hooks/useScreen";

const StatusForm = () => {
	const screen = useScreen();
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="text-start text-sm-center voucher-content-modal auth-content">
					<img src={logo} alt="" className="logo d-none d-sm-block" />
					<h3 className="title mw-100">
						Confirm to redeem <br /> 【燒肉801】$100消費抵用券
					</h3>
					<div className="link-sent">
						<CheckIcon />
						<span className="info">
							Congratulations! Above voucher has been redeemed
							successfully!
						</span>
					</div>
					{screen < 576 ? (
						<Link
							className="cmn-btn w-100"
							to="/wallet/redeem-voucher/voucher-redeem"
						>
							Back
						</Link>
					) : (
						<button
							className="cmn-btn w-100"
							type="submit"
							data-bs-dismiss="modal"
						>
							Continue
						</button>
					)}
				</div>
			</form>
		</>
	);
};

export default StatusForm;
