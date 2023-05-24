import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AngleLeft1, AngleRight1 } from "../../../Icon";
import logo from "../../../assets/img/logo.png";
import useScreen from "../../../hooks/useScreen";

const StatusFailedForm = () => {
	const screen = useScreen();
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const navigate = useNavigate();

	const [value, setValue] = useState(1);
	const handleIncr = () => {
		setValue(value + 1);
	};
	const handleDecr = () => {
		if (value > 1) {
			setValue(value - 1);
		}
	};
	useEffect(() => {
		if (value < 1) {
			setValue(1);
		}
	}, [value]);
	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="text-start text-sm-center voucher-content-modal auth-content">
					<img src={logo} alt="" className="logo d-none d-sm-block" />
					<h3 className="title mw-100">
						Confirm to redeem <br /> 【燒肉801】$100消費抵用券
					</h3>
					<div className="inc-grp" style={{ marginBottom: "29px" }}>
						<span className="str-icon" onClick={handleDecr}>
							<AngleLeft1 />
						</span>
						<span className="end-icon" onClick={handleIncr}>
							<AngleRight1 />
						</span>
						<input
							type="number"
							className="form-control"
							value={value}
							onChange={(e) => setValue(e.target.value)}
						/>
					</div>
					<div className="link-sent justify-content-center text-center">
						<span className="info mx-auto" style={{ maxWidth: "456px" }}>
							❌ Sorry! The voucher can’t be redeemed because you don’t
							have enough points.
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
					<div className="mt-32 text-center">
						{screen < 576 ? (
							<span
								className="text-body cursor-pointer"
								onClick={() => navigate(-1)}
							>
								Cancel
							</span>
						) : (
							<span
								className="text-body cursor-pointer"
								data-bs-dismiss="modal"
							>
								Cancel
							</span>
						)}
					</div>
				</div>
			</form>
		</>
	);
};

export default StatusFailedForm;
