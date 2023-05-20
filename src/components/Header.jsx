import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	ArrowLeft,
	Bar,
	BellIcon,
	ClearIcon,
	HeaderLeaf,
	RightAngle,
	SearchIcon,
} from "../Icon";
import logo from "../assets/img/logo.png";
import DropdownGroup from "./DropdownGroup";
import ProfileDropdown from "./ProfileDropdown";
import SocialIcons from "./SocialIcons";
const Header = () => {
	const [open, setOpen] = useState(false);
	const [submenuOpen, setSubmenuOpen] = useState("undefined");

	return (
		<>
			<header>
				<div className="container">
					<div className="header-wrapper">
						{submenuOpen != "undefined" && (
							<div
								className={`d-lg-none menu-toggle`}
								onClick={() => {
									setSubmenuOpen("undefined");
								}}
							>
								<ArrowLeft />
							</div>
						)}
						<div
							className={`d-lg-none menu-toggle ${
								submenuOpen == "undefined" ? "" : "moveRight"
							}`}
							onClick={() => {
								setOpen(!open);
								setSubmenuOpen("undefined");
							}}
						>
							{!open ? <Bar /> : <ClearIcon />}
						</div>
						<Link
							to="/"
							className={`logo  ${
								submenuOpen == "undefined"
									? ""
									: "opacity-0 visibility-lg-hidden"
							}`}
						>
							<img src={logo} alt="" />
						</Link>
						<div
							className={`menu-area ${!open ? "" : "open"}  ${
								submenuOpen == "undefined" ? "" : "submenu-open"
							}`}
						>
							<div className="d-lg-none w-100 px-32">
								<form>
									<label className="search-form">
										<span className="icon">
											<SearchIcon />
										</span>
										<input type="text" placeholder="Search" />
									</label>
								</form>
							</div>
							<ul className={`menu`}>
								{data?.map((item, i) =>
									item?.data?.length > 0 ? (
										<li
											class={
												submenuOpen == i
													? "submenu-parent my-auto"
													: ""
											}
										>
											<Link to="#" onClick={() => setSubmenuOpen(i)}>
												{item?.name}{" "}
												<span className="d-lg-none">
													<RightAngle />
												</span>
											</Link>
											<Submenu data={item?.data} />
										</li>
									) : (
										<li>
											<Link to={item?.url}>{item?.name}</Link>
										</li>
									)
								)}
							</ul>
							<div className="lang-area">
								<div className="language">
									<DropdownGroup data={language} />
								</div>
								<Link to="/" className="position-relative d-block">
									<BellIcon />
									<span className="top-badge">5</span>
								</Link>
							</div>
							<div className="mobile-menu-bottom close-when-submenu pb-0 d-lg-none">
								<Link to="/login" className="cmn-btn w-100">
									Login
								</Link>
							</div>
							<div className="mobile-menu-bottom pt-0 mt-0 d-lg-none">
								<SocialIcons />
							</div>
						</div>
						<ProfileDropdown setMenuTrigger={setOpen} />
					</div>
				</div>
			</header>
			<div className="header-leaf">
				<HeaderLeaf />
			</div>
		</>
	);
};
const Submenu = ({ data }) => {
	return (
		<ul className="submenu">
			{data?.map((item, i) => (
				<li>
					<Link to={item?.url}>{item?.name}</Link>
				</li>
			))}
		</ul>
	);
};
const data = [
	{
		name: "About us",
		url: "/about",
	},
	{
		name: "Category",
		url: "#",
		data: [
			{
				name: "Places",
				url: "",
			},
			{
				name: "Catering",
				url: "",
			},
			{
				name: "Events",
				url: "",
			},
			{
				name: "Party Room",
				url: "",
			},
			{
				name: "Studio",
				url: "",
			},
			{
				name: "Banquet Hall ",
				url: "",
			},
			{
				name: "Meeting Room",
				url: "",
			},
			{
				name: "VIP Room",
				url: "",
			},
		],
	},
	{
		name: "Contact",
		url: "/contact",
	},
	{
		name: "FAQ",
		url: "/faq",
	},
];

const language = [
	{
		label: "English",
	},
	{
		label: "Bangla",
	},
	{
		label: "Spanish",
	},
];

export default Header;
