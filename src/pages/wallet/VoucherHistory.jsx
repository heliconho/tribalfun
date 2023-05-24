import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoadingIcon } from "../../Icon";
import WalletLayout from "./WalletLayout";
const VoucherHistory = () => {
	const navigate = useNavigate();
	return (
		<>
			<WalletLayout>
				<h4 className="title d-none d-lg-block">Voucher</h4>
				<h5 className="subtitle mb-5">Voucher List</h5>
				<div className="cmn-table-wrapper">
					<table className="cmn-table responsive-table">
						<thead>
							<tr>
								<th>Vourcher Name</th>
								<th>Status</th>
								<th>Expire Date</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
						<tbody className="tbody">
							{data?.map((item, i) => (
								<tr
									key={i}
									style={{
										opacity: item?.status == "Expired" ? "0.6" : "",
									}}
								>
									<td>
										<div>
											<h6 className="name">{item?.title}</h6>
											<span className="date">{item?.date}</span>
										</div>
									</td>
									<td data-label="Status">{item?.status}</td>
									<td data-prev="Expire date:" className="expire">
										{item?.expired}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				<div className="d-md-none d-flex justify-content-center mt-5 pb-5">
					<Link to="#" className="cmn-outline-btn loading-btn">
						<span className="loading-spinner">
							<LoadingIcon />
						</span>
						Loading
					</Link>
				</div>

				<div className="mt-5 d-flex justify-content-end">
					<button
						className="cmn-btn h-48-56 max-sm-full"
						type="button"
						style={{ minWidth: "110px" }}
					>
						Redeem
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

const data = [
	{
		title: "Voucher 1",
		date: "5:00 pm Feb 13, 2023 - 10:00 pm Feb 13, 2023",
		status: "Active",
		expired: "1 Jun 2023",
	},
	{
		title: "Voucher 2",
		date: "5:00 pm Feb 13, 2023 - 10:00 pm Feb 13, 2023",
		status: "Active",
		expired: "1 Jun 2023",
	},
	{
		title: "Voucher 3",
		date: "5:00 pm Feb 13, 2023 - 10:00 pm Feb 13, 2023",
		status: "Expired",
		expired: "1 Jun 2023",
	},
];

export default VoucherHistory;
