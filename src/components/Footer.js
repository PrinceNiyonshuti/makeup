import React from 'react'
import { Link } from "react-router-dom";
function Footer() {
  return (
		<footer className="ftco-footer ftco-section img">
			<div className="overlay"></div>
			<div className="container">
				<div className="row mb-5">
					<div className="col-md-5">
						<div className="ftco-footer-widget mb-4">
							<h2 className="ftco-heading-2">About Us</h2>
							<p>
								Fosca_makeup is a small business for a girl named Fosca who
								specializes in makeup especially known as Makeup .
							</p>
							<ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
								<li className="ftco-animate">
									<Link to="/">
										<span className="icon-twitter"></span>
									</Link>
								</li>
								<li className="ftco-animate">
									<Link to="/">
										<span className="icon-facebook"></span>
									</Link>
								</li>
								<li className="ftco-animate">
									<Link to="/">
										<span className="icon-instagram"></span>
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-md-4">
						<div className="ftco-footer-widget mb-4 ml-md-4">
							<h2 className="ftco-heading-2">Services</h2>
							<ul className="list-unstyled">
								<li>
									<Link to="/" className="py-2 d-block">
										Wedding Makeup
									</Link>
								</li>
								<li>
									<Link to="/" className="py-2 d-block">
										Bridal shower makeup
									</Link>
								</li>
								<li>
									<Link to="/" className="py-2 d-block">
										Photoshoot Makeup
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-md-3">
						<div className="ftco-footer-widget mb-4">
							<h2 className="ftco-heading-2">Have a Questions?</h2>
							<div className="block-23 mb-3">
								<ul>
									<li>
										<span className="icon icon-map-marker"></span>
										<span className="text">Gicumbi </span>
									</li>
									<li>
										<Link to="#">
											<span className="icon icon-phone"></span>
											<span className="text">+250 784 182 858</span>
										</Link>
									</li>
									<li>
										<Link to="#">
											<span className="icon icon-envelope"></span>
											<span className="text">mariefausca20@gmail.com</span>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 text-center">
						<p>
							Copyright &copy;
							<script>document.write(new Date().getFullYear());</script> All
							rights reserved | Designed by{" "}
							<Link to="https://princeniyonshuti.github.io./" target="_blank">
								NPTech
							</Link>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer
