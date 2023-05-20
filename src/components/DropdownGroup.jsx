import React, { useState } from "react";
import { Globe } from "../Icon";

const DropdownGroup = ({ data }) => {
	const [index, setIndex] = useState(0);
	const [open, setOpen] = useState(false);
	const activeIndex = data[index];
	return (
		<>
			<div className={`__dropdown-language`}>
				<button
					className="__dropdown-active"
					onClick={() => setOpen(!open)}
					onBlur={() => setOpen(false)}
				>
					<Globe />
					{activeIndex.label && <span>{activeIndex.label}</span>}
				</button>
				<ul className={`__dropdown-menu ${open ? "active" : ""}`}>
					{data?.map(({ img, label, value }, i) => (
						<li
							key={i}
							onClick={() => {
								setIndex(i);
								setOpen(false);
							}}
							className={index === i ? "active" : ""}
						>
							{img && <img src={img} alt="name" />}
							{label && <span>{label}</span>}
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default DropdownGroup;
