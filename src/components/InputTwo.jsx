import React from "react";

const InputTwo = ({ label, startIcon, endIcon, children, flex, ...rest }) => {
	return (
		<>
			<div className="input-two">
				{label && <label>{label}</label>}
				<div
					className={`position-relative form-control ${
						flex ? "flex" : ""
					}`}
				>
					<span className="startIcon">{startIcon}</span>
					<span className="endIcon">{endIcon}</span>
					{children ? children : <input type="text" {...rest} />}
				</div>
			</div>
		</>
	);
};

export default InputTwo;
