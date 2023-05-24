import React from "react";
import Input from "../../components/Input";
import AccountLayout from "./AccountLayout";

const Account = () => {
	return (
		<>
			<AccountLayout>
				<div className="wallet-section-inner">
					<h4 className="title">Personal info</h4>
					<Input label="First Name" placeholder="大文" />
					<Input label="Last Name" placeholder="陳" />
					<Input label="Email" placeholder="Davidchan@gmail.com" />
					<Input label="Phone" placeholder="Phone" />
					<div className="d-flex flex-wrap justify-content-end">
						<button
							type="submit"
							className="cmn-btn h-48-56"
							style={{ minWidth: "120px" }}
						>
							Save
						</button>
					</div>
				</div>
			</AccountLayout>
		</>
	);
};
export default Account;
