import React from "react";
import { ClearIcon } from "../Icon";

const ModalLayout = ({ id, children }) => {
	return (
		<div className="modal" tabindex="-1" id={id}>
			<div className="modal-dialog modal-dialog-centered modal-md">
				<div className="modal-content">
					<div className="modal-body">
						<button
							type="button"
							className="modal-close"
							data-bs-dismiss="modal"
						>
							<ClearIcon />
						</button>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalLayout;
