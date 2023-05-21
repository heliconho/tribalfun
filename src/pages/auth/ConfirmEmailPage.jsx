import React from "react";
import ConfirmEmail from "../../components/ConfirmEmail";
import LandingLayout from "../../components/LandingLayout";

const ConfirmEmailPage = () => {
	return (
		<>
			<LandingLayout>
				<section className="auth-section">
					<div className="container">
						<ConfirmEmail />
					</div>
				</section>
			</LandingLayout>
		</>
	);
};

export default ConfirmEmailPage;
