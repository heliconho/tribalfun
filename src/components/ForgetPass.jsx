import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
import useScreen from "../hooks/useScreen";
import Input from "./Input";
const ForgetPass = () => {
	const screen = useScreen();
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const navigate = useNavigate();
	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="text-start text-sm-center auth-content">
					<img src={logo} alt="" className="logo d-none d-sm-block" />
					<h6 className="d-sm-none subtitle">- Forget password</h6>
					<h3 className="title">Enter your email to reset passowrd</h3>
					<Input
						label="Email"
						type="text"
						placeholder="Enter your email"
					/>
					<button className="cmn-btn w-100" type="submit">
						Reset Password
					</button>
					<div className="mt-32 text-center">
						{screen < 576 ? (
							<span
								className="text-body cursor-pointer"
								onClick={() => navigate(-1)}
							>
								Cancel
							</span>
						) : (
							<span
								className="text-body cursor-pointer"
								data-bs-toggle="modal"
								data-bs-target="#login"
							>
								Cancel
							</span>
						)}
					</div>
				</div>
			</form>
		</>
	);
};

export default ForgetPass;
