import React from 'react'
import { Link } from "react-router-dom";
function About() {
  return (
		<div>
			<section className="ftco-section">
				<div className="container">
					<div className="row d-flex">
						<div className="col-md-6 d-flex ">
							<div
								className="img img-about align-self-stretch"
								style={{backgroundImage:" url('/images/bg_3.jpg')", width:" 100%"}}></div>
						</div>
						<div className="col-md-6 pl-md-5 ">
							<h2 className="mb-4">Welcome to Fosca Makeup Website</h2>
							<p>
								The Big Oxmox advised her not to do so, because there were
								thousands of bad Commas, wild Question Marks and devious
								Semikoli, but the Little Blind Text didn’t listen. She packed
								her seven versalia, put her initial into the belt and made
								herself on the way.
							</p>
							<p>
								On her way she met a copy. The copy warned the Little Blind
								Text, that where it came from it would have been rewritten a
								thousand times and everything that was left from its origin
								would be the word "and" and the Little Blind Text should turn
								around and return to its own, safe country. But nothing the copy
								said could convince her and so it didn’t take long until a few
								insidious Copy Writers ambushed her, made her drunk with Longe
								and Parole and dragged her into their agency, where they abused
								her for their.
							</p>
						</div>
					</div>
				</div>
			</section>

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
                  style={{ backgroundImage: " url(images/person_1.jpg)" }}></div>
							<div className="info text-center">
									<h3>
										<Link to="teacher-single.html">Mellisa Smith</Link>
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
                  style={{ backgroundImage: " url(images/person_2.jpg)" }}></div>
							<div className="info text-center">
									<h3>
										<Link to="teacher-single.html">Marie Mush</Link>
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
						<div className="col-lg-3 d-flex mb-sm-4 ">
							<div className="staff">
								<div
                  className="img mb-4"
                  style={{ backgroundImage: " url(images/person_3.jpg)" }}></div>
						<div className="info text-center">
									<h3>
										<Link to="teacher-single.html">Ana Jacobson</Link>
									</h3>
									<span className="position">Makeup Stylist</span>
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
                  style={{ backgroundImage: " url(/images/person_4.jpg)" }}></div>
    							<div className="info text-center">
									<h3>
										<Link to="teacher-single.html">Ivan Dorchsner</Link>
									</h3>
									<span className="position">Nail Specialist</span>
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
		</div>
	);
}

export default About
