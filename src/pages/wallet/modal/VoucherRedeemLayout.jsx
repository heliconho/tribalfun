import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import useScreen from "../../../hooks/useScreen";
import VoucherRedeemForm from "./VoucherRedeemForm";

const VoucherRedeemLayout = () => {
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
			<VoucherRedeemForm />
			<Footer />
		</>
	);
};

export default VoucherRedeemLayout;
