import React from 'react'
import { Link } from "react-router-dom";
function Works() {
  return (
		<section className="ftco-section">
			<div className="container">
				<div className="row justify-content-center mb-5 pb-3">
					<div className="col-md-7 heading-section text-center ">
						<h2 className="mb-4">Our Work</h2>
						<p>
							Far far away, behind the word mountains, far from the countries
							Vokalia and Consonantia, there live the blind texts.
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 ">
						<Link to="#" className="work-entry">
							<img
								src="images/work-1.jpg"
								className="img-fluid"
								alt="Colorlib Template "
							/>
							<div className="info d-flex align-items-center">
								<div>
									<div className="icon mb-4 d-flex align-items-center justify-content-center">
										<span className="icon-search"></span>
									</div>
									<h3>Weeding Makeup</h3>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-md-4 ">
						<Link to="#" className="work-entry">
							<img
								src="images/work-2.jpg"
								className="img-fluid"
								alt="Colorlib Template"
							/>
							<div className="info d-flex align-items-center">
								<div>
									<div className="icon mb-4 d-flex align-items-center justify-content-center">
										<span className="icon-search"></span>
									</div>
									<h3>Bridal Shower Makeup</h3>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-md-4 ">
						<Link to="#" className="work-entry">
							<img
								src="images/photoShoot.jpg"
								className="img-fluid"
								alt="Colorlib Template"
							/>
							<div className="info d-flex align-items-center">
								<div>
									<div className="icon mb-4 d-flex align-items-center justify-content-center">
										<span className="icon-search"></span>
									</div>
									<h3>PhotoShoot Makeup</h3>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Works
