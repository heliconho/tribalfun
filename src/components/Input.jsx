import React, { useState } from "react";
import { Eye, EyeSlash } from "../Icon";

const Input = ({ label, type, className, ...rest }) => {
	const [viewPass, setViewPass] = useState(false);
	return (
		<>
			{type == "password" ? (
				<div className={`input-item ${className ? className : ""}`}>
					{label && <label>{label}</label>}
					<div className="position-relative">
						<input
							className="form-control pe-5"
							type={viewPass ? "text" : "password"}
							{...rest}
						/>
						<span
							className="view-pass-btn"
							onClick={() => setViewPass(!viewPass)}
						>
							{viewPass ? <EyeSlash /> : <Eye />}
						</span>
					</div>
				</div>
			) : (
				<div className={`input-item ${className ? className : ""}`}>
					{label && <label>{label}</label>}
					<input className="form-control" {...rest} />
				</div>
			)}
		</>
	);
};

export default Input;
