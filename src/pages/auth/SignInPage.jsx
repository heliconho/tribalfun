import React from "react";
import LandingLayout from "../../components/LandingLayout";
import SignIn from "../../components/SignIn";

const SignInPage = () => {
	return (
		<>
			<LandingLayout>
				<section className="auth-section">
					<div className="container">
						<SignIn />
					</div>
				</section>
			</LandingLayout>
		</>
	);
};

export default SignInPage;
