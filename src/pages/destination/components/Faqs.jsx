import React, { useState } from "react";
import { Minus, Plus } from "../../../Icon";

const Faqs = ({ data, id }) => {
	const [open, setOpen] = useState(0);
	return (
		<div className="accordion" id={id}>
			{data?.map(({ title, text, info, facility, icon }, i) => (
				<div className="accordion-item" key={i}>
					<h2 className="accordion-header">
						<button
							className="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target={`#accordion-${id}-${i}`}
							aria-expanded="true"
							onClick={() => setOpen(i)}
						>
							<span className="icon">{icon}</span>
							<span className="me-2">{title} </span>
							{facility && <span className="subtxt"> ({facility})</span>}
							<span className="plus ms-auto">
								{open !== i ? <Plus /> : <Minus />}
							</span>
						</button>
					</h2>
					<div
						id={`accordion-${id}-${i}`}
						className={`accordion-collapse collapse ${
							i == "0" ? "show" : ""
						}`}
						data-bs-parent={`#${id}`}
					>
						<div className="accordion-body">
							{text && <p>{text}</p>}
							{info?.length && (
								<ul>
									{info?.map((item, i) => (
										<li key={i}>{item}</li>
									))}
								</ul>
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Faqs;
