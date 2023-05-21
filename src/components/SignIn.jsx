import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import useScreen from "../hooks/useScreen";
import Input from "./Input";
const SignIn = () => {
	const screen = useScreen();
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="text-start text-sm-center auth-content">
					<img src={logo} alt="" className="logo d-none d-sm-block" />
					<h6 className="d-sm-none subtitle">- Sign In</h6>
					<h3 className="title">Hey there, welome back!</h3>
					<Input
						label="Email"
						type="text"
						placeholder="Enter your email"
					/>
					<Input
						label="Password"
						type="password"
						placeholder="Enter your password"
					/>
					<button className="cmn-btn w-100" type="submit">
						Login
					</button>
					<div className="my-32">
						{screen < 768 ? (
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
					<div>
						No account?{" "}
						{screen < 768 ? (
							<Link className="text-base" to="/sign-up">
								Create one
							</Link>
						) : (
							<span
								className="text-base"
								data-bs-toggle="modal"
								data-bs-target="#sign-up"
							>
								Create one
							</span>
						)}
					</div>
				</div>
			</form>
		</>
	);
};

export default SignIn;
