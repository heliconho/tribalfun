import React from "react";
import ForgetPass from "../../components/ForgetPass";
import LandingLayout from "../../components/LandingLayout";

const ForgetPassPage = () => {
	return (
		<>
			<LandingLayout>
				<section className="auth-section">
					<div className="container">
						<ForgetPass />
					</div>
				</section>
			</LandingLayout>
		</>
	);
};

export default ForgetPassPage;
