import React from 'react'
import { Link } from "react-router-dom";

function Experts() {
  return (
		<section className="ftco-section bg-light">
			<div className="container">
				<div className="row justify-content-center mb-5 pb-3">
					<div className="col-md-7 heading-section  text-center">
						<h2 className="mb-4">Our Beauty Experts</h2>
						<p>
							Far far away, behind the word mountains, far from the countries
							Vokalia and Consonantia, there live the blind texts.
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-3 d-flex mb-sm-4 ">
						<div className="staff">
							<div
								className="img mb-4"
								style={{ backgroundImage: "url(images/bg_0.jpg)" }}></div>
							<div className="info text-center">
								<h3>
									<Link to="teacher-single.html">Fausca</Link>
								</h3>
								<span className="position">Stylist</span>
								<div className="text">
									<p>
										Far far away, behind the word mountains, far from the
										countries Vokalia and Consonantia, there live the blind
										texts.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 d-flex mb-sm-4 ">
						<div className="staff">
							<div
								className="img mb-4"
								style={{ backgroundImage: "url(images/person_2.jpg)" }}></div>
							<div className="info text-center">
								<h3>
									<Link to="teacher-single.html">Isabella</Link>
								</h3>
								<span className="position">Fashionist</span>
								<div className="text">
									<p>
										Far far away, behind the word mountains, far from the
										countries Vokalia and Consonantia, there live the blind
										texts.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Experts
