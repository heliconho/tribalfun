import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import useScreen from "../../../hooks/useScreen";
import StatusForm from "./StatusForm";

const VoucherRedeemStatusPage = () => {
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
			<StatusForm />
			<Footer />
		</>
	);
};

export default VoucherRedeemStatusPage;
