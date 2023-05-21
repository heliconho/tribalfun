import React from "react";
import LandingLayout from "../../components/LandingLayout";
import SignUp from "../../components/SignUp";

const SignUpPage = () => {
	return (
		<>
			<LandingLayout>
				<section className="auth-section">
					<div className="container">
						<SignUp />
					</div>
				</section>
			</LandingLayout>
		</>
	);
};

export default SignUpPage;
