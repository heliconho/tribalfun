import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.scss";
import Account from "./pages/account/Account";
import AccountLoginAndSecurity from "./pages/account/AccountLoginAndSecurity";
import Notification from "./pages/account/Notification";
import ConfirmEmailPage from "./pages/auth/ConfirmEmailPage";
import ForgetPassPage from "./pages/auth/ForgetPassPage";
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import Contact from "./pages/contact/Contact";
import Booking from "./pages/destination/Booking";
import DestinationDetails from "./pages/destination/DestinationDetails";
import DestinationPage from "./pages/destination/DestinationPage";
import Home from "./pages/home/Home";
import Landing from "./pages/landing/Landing";
import Order from "./pages/order/Order";
import PaymentMethod from "./pages/wallet/PaymentMethod";
import PointHistory from "./pages/wallet/PointHistory";
import RedeemVoucher from "./pages/wallet/RedeemVoucher";
import VoucherHistory from "./pages/wallet/VoucherHistory";
import VoucherRedeemLayout from "./pages/wallet/modal/VoucherRedeemLayout";
import VoucherRedeemStatusPage from "./pages/wallet/modal/VoucherRedeemStatusPage";
import VoucherRedeemStatusPageFailed from "./pages/wallet/modal/VoucherRedeemStatusPageFailed";
function App() {
	const Wrapper = ({ children }) => {
		const location = useLocation();
		useEffect(() => {
			setTimeout(() => {
				document.documentElement.scrollTo(0, 0);
			}, 500);
		}, [location.pathname, location.search]);
		return children;
	};
	return (
		<BrowserRouter>
			<Wrapper>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/login" element={<SignInPage />} />
					<Route path="/sign-up" element={<SignUpPage />} />
					<Route path="/forget-pass" element={<ForgetPassPage />} />
					<Route path="/confirm-email" element={<ConfirmEmailPage />} />
					<Route path="/home" element={<Home />} />
					<Route path="/destination" element={<DestinationPage />} />
					<Route
						path="/destination/:id"
						element={<DestinationDetails />}
					/>
					<Route path="/booking" element={<Booking />} />
					<Route path="/wallet">
						<Route index element={<PaymentMethod />} />
						<Route path="payment" element={<PaymentMethod />} />
						<Route path="point" element={<PointHistory />} />
						<Route path="voucher" element={<VoucherHistory />} />
						<Route path="redeem-voucher" element={<RedeemVoucher />} />
						<Route
							path="redeem-voucher/voucher-redeem"
							element={<VoucherRedeemLayout />}
						/>
						<Route
							path="redeem-voucher/voucher-redeem/status"
							element={<VoucherRedeemStatusPage />}
						/>
						<Route
							path="redeem-voucher/voucher-redeem/status-failed"
							element={<VoucherRedeemStatusPageFailed />}
						/>
					</Route>
					<Route path="/order" element={<Order />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/setting">
						<Route index element={<Account />} />
						<Route path="personal-info" element={<Account />} />
						<Route
							path="login-and-security"
							element={<AccountLoginAndSecurity />}
						/>
						<Route path="notification" element={<Notification />} />
						<Route
							path="privacy-and-sharing"
							element={<AccountLoginAndSecurity />}
						/>
					</Route>
				</Routes>
			</Wrapper>
		</BrowserRouter>
	);
}

export default App;
