import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoadingIcon } from "../../Icon";
import img1 from "../../assets/img/redeem/1.png";
import img2 from "../../assets/img/redeem/2.png";
import img3 from "../../assets/img/redeem/3.png";
import img4 from "../../assets/img/redeem/4.png";
import HomeLayout from "../../components/HomeLayout";
import ModalLayout from "../../components/ModalLayout";
import useScreen from "../../hooks/useScreen";
import StatusFailedForm from "./modal/StatusFailedForm";
import StatusForm from "./modal/StatusForm";
import VoucherRedeemForm from "./modal/VoucherRedeemForm";
const RedeemVoucher = () => {
	const navigate = useNavigate();
	const screen = useScreen();
	return (
		<>
			<HomeLayout>
				<div className="container">
					<div className="voucher-title-area">
						<h2 className="title">Redeem Voucher </h2>
						<div>
							Your current points: <strong>1,320</strong>{" "}
							<span
								type="button"
								className="text-base-2 d-none d-sm-inline-block"
								onClick={() => navigate(-1)}
							>
								Back
							</span>{" "}
						</div>
					</div>
					<div className="cmn-table-wrapper">
						<table className="cmn-table responsive-table redeem-order">
							<thead>
								<tr>
									<th>Voucher List</th>
									<th>Points Required</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td></td>
									<td></td>
									<td></td>
								</tr>
							</tbody>
							<tbody className="tbody-2">
								{data?.map((item, i) => (
									<tr key={i}>
										<td className="px-xl-5">
											<div className="voucher-item">
												<img src={item?.img} alt="" />
												<div className="content">
													<h5>{item?.title}</h5>
													<p>{item?.subtext}</p>
													<span className="date">
														<span className="d-none d-md-block">
															{item?.date}
														</span>
														<span className="d-md-none">
															Expire Date: Nov 10, 2023
														</span>
													</span>
												</div>
											</div>
										</td>
										<td>
											<div className="points-amount">400</div>
										</td>
										<td>
											{/*  */}
											{screen >= 576 ? (
												<button
													type="button"
													className="cmn-outline-btn"
													style={{
														"--base": "var(--base-2)",
														whiteSpace: "nowrap",
													}}
													data-bs-target="#voucher"
													data-bs-toggle="modal"
												>
													Redeem it!
												</button>
											) : (
												<Link
													to="/wallet/redeem-voucher/voucher-redeem"
													className="cmn-outline-btn"
													style={{
														"--base": "var(--base-2)",
														whiteSpace: "nowrap",
													}}
												>
													Redeem it!
												</Link>
											)}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>

					<div className="d-flex justify-content-center mt-5 pb-5">
						<Link to="#" className="cmn-outline-btn loading-btn">
							<span className="loading-spinner">
								<LoadingIcon />
							</span>
							Loading
						</Link>
					</div>

					<div className="d-flex mt-0 d-sm-none">
						<button
							className="cmn-btn h-48-56"
							style={{
								width: "100%",
								fontWeight: "700",
							}}
							onClick={() => navigate(-1)}
						>
							Back
						</button>
					</div>
				</div>
			</HomeLayout>
			<ModalLayout id="voucher">
				<VoucherRedeemForm />
			</ModalLayout>
			<ModalLayout id="status-form">
				<StatusForm />
			</ModalLayout>
			<ModalLayout id="status-failed-form">
				<StatusFailedForm />
			</ModalLayout>
		</>
	);
};

const data = [
	{
		img: img1,
		title: "燒肉801】$100消費抵用券",
		date: "5:00 pm Feb 13, 2023 - 10:00 pm Feb 13, 2023",
		subtext: "全線門市通用，消費滿$200可用",
	},
	{
		img: img2,
		title: "燒肉801】$100消費抵用券",
		date: "5:00 pm Feb 13, 2023 - 10:00 pm Feb 13, 2023",
		subtext: "全線門市通用，消費滿$200可用",
	},
	{
		img: img3,
		title: "燒肉801】$100消費抵用券",
		date: "5:00 pm Feb 13, 2023 - 10:00 pm Feb 13, 2023",
		subtext: "全線門市通用，消費滿$200可用",
	},
	{
		img: img4,
		title: "燒肉801】$100消費抵用券",
		date: "5:00 pm Feb 13, 2023 - 10:00 pm Feb 13, 2023",
		subtext: "全線門市通用，消費滿$200可用",
	},
];

export default RedeemVoucher;
