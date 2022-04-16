/** @format */

import React from "react";
import { Link } from "react-router-dom";
function Advert() {
	return (
		<section
			className="ftco-section ftco-discount img"
			style={{ backgroundImage: "url(images/bg_2.jpg)" }}>
			<div className="overlay"></div>
			<div className="container">
				<div className="row justify-content-end">
					<div className="col-md-5 discount ">
						<h3>Save up to 25% Off</h3>
						<h2 className="mb-4">Student Discount</h2>
						<p className="mb-4">
							Even the all-powerful Pointing has no control about the blind
							texts it is an almost unorthographic life One day however a small
							line of blind text by the name of Lorem Ipsum decided to leave for
							the far World of Grammar.
						</p>
						<p>
							<Link
								to="#"
								className="btn btn-white btn-outline-white px-4 py-3">
								Book Now
							</Link>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Advert;
