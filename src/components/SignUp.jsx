import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import useScreen from "../hooks/useScreen";
import Input from "./Input";
const SignUp = () => {
	const screen = useScreen();
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="text-start text-sm-center auth-content signup-content">
					<img src={logo} alt="" className="logo d-none d-sm-block" />
					<h6 className="d-sm-none subtitle">- Sign Up</h6>
					<h3 className="d-sm-none title">Create Account</h3>
					<Input
						label="Email"
						type="text"
						placeholder="Enter your email"
					/>
					<Input
						label="Hong Kong Phone Number "
						type="text"
						placeholder="Enter your Hong Kong phone number"
					/>
					<Input
						label="Password"
						type="password"
						placeholder="Enter your password"
					/>
					<Input
						label="Confirm Your Password"
						type="password"
						placeholder="Enter your password"
					/>
					{screen < 576 ? (
						<Link className="cmn-btn w-100" to="/confirm-email">
							Sign Up
						</Link>
					) : (
						<button
							className="cmn-btn w-100"
							type="submit"
							data-bs-toggle="modal"
							data-bs-target="#confirm-email"
						>
							Sign Up
						</button>
					)}
					<div className="my-32 text-center">
						{screen < 576 ? (
							<Link
								className="text-body cursor-pointer"
								to="/forget-pass"
							>
								Forgot Password?
							</Link>
						) : (
							<span
								className="text-body cursor-pointer"
								data-bs-toggle="modal"
								data-bs-target="#forget-pass"
							>
								Forgot Password?
							</span>
						)}
					</div>
					<div className="text-center">
						Already have an account?{" "}
						{screen < 576 ? (
							<Link className="text-base" to="/login">
								Log in
							</Link>
						) : (
							<span
								className="text-base"
								data-bs-toggle="modal"
								data-bs-target="#login"
							>
								Log in
							</span>
						)}
					</div>
				</div>
			</form>
		</>
	);
};

export default SignUp;
