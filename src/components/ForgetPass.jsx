import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import useScreen from "../hooks/useScreen";
import Input from "./Input";
const ForgetPass = () => {
	const screen = useScreen();
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="text-start text-md-center auth-content">
					<img src={logo} alt="" className="logo d-none d-sm-block" />
					<h6 className="d-md-none subtitle">- Forget password</h6>
					<h3 className="title">Enter your email to reset passowrd</h3>
					<Input
						label="Email"
						type="text"
						placeholder="Enter your email"
					/>
					<button className="cmn-btn w-100" type="submit">
						Reset Password
					</button>
					<div className="mt-32">
						{screen < 768 ? (
							<Link
								className="text-body cursor-pointer"
								to="/forget-pass"
							>
								Cancel
							</Link>
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
