import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import useScreen from "../../../hooks/useScreen";
import StatusFailedForm from "./StatusFailedForm";

const VoucherRedeemStatusPageFailed = () => {
	const screen = useScreen();
	const navigate = useNavigate();
	useEffect(() => {
		if (screen >= 576) {
			navigate("/wallet/redeem-voucher");
		}
	}, [screen]);
	return (
		<>
			<Header />
			<StatusFailedForm />
			<Footer />
		</>
	);
};

export default VoucherRedeemStatusPageFailed;
