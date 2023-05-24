import React from "react";
import { useNavigate } from "react-router-dom";
import mastercard from "../../assets/img/mastercard.png";
import paypal from "../../assets/img/paypal.png";
import visa from "../../assets/img/visa.png";
import WalletLayout from "./WalletLayout";
const PaymentMethod = () => {
	const navigate = useNavigate();
	return (
		<>
			<WalletLayout>
				<h4 className="title">Payment Method</h4>
				<h5 className="subtitle">Credit card</h5>
				<label className="pay-width-checkbox mb-4">
					<input type="radio" className="form-check-input" name="card" />
					<span className="form-check-label d-flex align-items-center gap-2">
						<img src={mastercard} alt="" />
						<span>•••• •••• •••• 87652</span>
					</span>
				</label>
				<label className="pay-width-checkbox mb-4">
					<input type="radio" className="form-check-input" name="card" />
					<span className="form-check-label d-flex align-items-center gap-2">
						<img src={visa} alt="" />
						<span>•••• •••• •••• 87652</span>
					</span>
				</label>
				<h5 className="subtitle">E-wallet</h5>
				<label className="pay-width-checkbox mb-4">
					<input type="radio" className="form-check-input" name="card" />
					<span className="form-check-label d-flex align-items-center gap-2">
						<img src={paypal} alt="" />
					</span>
				</label>
				<div className="mt-5 d-flex justify-content-end">
					<button
						className="cmn-btn h-48-56 max-sm-full"
						type="button"
						style={{ minWidth: "110px" }}
					>
						Edit
					</button>
				</div>
				<div className="col-12 d-flex mt-0 d-sm-none">
					<button
						className="cmn-outline-btn text-title h-48-56"
						style={{
							marginTop: "40px",
							width: "100%",
							fontWeight: "700",
						}}
						onClick={() => navigate(-1)}
					>
						Back
					</button>
				</div>
			</WalletLayout>
		</>
	);
};

export default PaymentMethod;
