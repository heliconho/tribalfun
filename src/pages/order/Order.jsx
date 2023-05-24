import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LoadingIcon, SearchIcon } from "../../Icon";
import img1 from "../../assets/img/redeem/1.png";
import img2 from "../../assets/img/redeem/2.png";
import HomeLayout from "../../components/HomeLayout";
import useScreen from "../../hooks/useScreen";
import RecomendationPlace from "../destination/components/RecomendationPlace";
const tab__data = [
	{ title: "Place", count: "2" },
	{ title: "Catering" },
	{ title: "Event" },
];
const Order = () => {
	const [index, setIndex] = useState(0);
	const screen = useScreen();
	return (
		<>
			<HomeLayout>
				<div className="container">
					<div className="voucher-title-area pb-4">
						<h5 className="subtitle d-md-none">- Order History</h5>
						<h2 className="title">{screen < 576 ? "Places" : "Order"}</h2>
						<div className="d-flex flex-column-reverse flex-md-column">
							<div
								style={{ maxWidth: "313px" }}
								className="mt-4 mt-md-0"
							>
								<form>
									<label className="search-form my-0">
										<span className="icon">
											<SearchIcon />
										</span>
										<input type="text" placeholder="Search" />
									</label>
								</form>
							</div>
							<ul className="filter-tab-menu mt-md-4">
								{tab__data &&
									tab__data.map((item, i) => (
										<li
											key={i}
											onClick={() => {
												setIndex(i);
											}}
											className={index === i ? "active" : ""}
										>
											{item?.title}{" "}
											{item?.count && (
												<span className="badge">{item?.count}</span>
											)}
										</li>
									))}
							</ul>
						</div>
					</div>
					<div className="cmn-table-wrapper">
						<table className="cmn-table responsive-table redeem-order">
							<thead>
								<tr>
									<th>Order History</th>
									<th>Amount</th>
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
											<div className="points-amount">$490</div>
										</td>
										<td>
											<Link
												to="#"
												className="cmn-outline-btn"
												style={{
													"--base": "var(--base-2)",
													whiteSpace: "nowrap",
												}}
											>
												Whatsapp the Merchant
											</Link>
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
				</div>
				<RecomendationPlace
					title="You may also interest..."
					subtitle="Check out this"
				/>
			</HomeLayout>
		</>
	);
};

const data = [
	{
		img: img1,
		title: "A Little Bit Of Sweetness",
		date: "5:00 pm Feb 13, 2023 - 10:00 pm Feb 13, 2023",
		subtext: "全線門市通用，消費滿$200可用",
	},
	{
		img: img2,
		title: "JM PARTY - Chill Grey",
		date: "5:00 pm Feb 13, 2023 - 10:00 pm Feb 13, 2023",
		subtext: "全線門市通用，消費滿$200可用",
	},
];

export default Order;
