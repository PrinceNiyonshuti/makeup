/** @format */

import React from "react";

function ShowCase() {
	return (
		<section
			className="ftco-section ftco-counter img"
			id="section-counter"
			style={{ backgroundImage: "url(images/bg_4.jpg)" }}>
			<div className="overlay"></div>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-10">
						<div className="row">
							<div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ">
								<div className="block-18 text-center">
									<div className="text">
										<div className="icon">
											<span className="flaticon-flower"></span>
										</div>
										<span>Makeup Over Done</span>
										<strong className="number" data-number="3500">
											230
										</strong>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ">
								<div className="block-18 text-center">
									<div className="text">
										<div className="icon">
											<span className="flaticon-flower"></span>
										</div>
										<span>Procedure</span>
										<strong className="number" data-number="1000">
											67
										</strong>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ">
								<div className="block-18 text-center">
									<div className="text">
										<div className="icon">
											<span className="flaticon-flower"></span>
										</div>
										<span>Happy Client</span>
										<strong className="number" data-number="3000">
											225
										</strong>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ShowCase;
