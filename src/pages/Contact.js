/** @format */

import React from "react";
import { Link } from "react-router-dom";
function Contact() {
	return (
		<div>
			<section className="ftco-section contact-section">
				<div className="container mt-5">
					<div className="row block-9">
						<div className="col-md-4 contact-info ">
							<div className="row">
								<div className="col-md-12 mb-4">
									<h2 className="h4">Contact Information</h2>
								</div>
								<div className="col-md-12 mb-3">
									<p>
										<span>Address:</span> Gicumbi
									</p>
								</div>
								<div className="col-md-12 mb-3">
									<p>
										<span>Phone:</span>{" "}
										<a href="tel://1234567920">+250 784 182 858</a>
									</p>
								</div>
								<div className="col-md-12 mb-3">
									<p>
										<span>Email:</span>{" "}
										<a href="mailto:mariefausca20@gmail.com">
											mariefausca20@gmail.com
										</a>
									</p>
								</div>
								<div className="col-md-12 mb-3">
									<p>
										<span>Website:</span> <Link to="#">yoursite.com</Link>
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-1"></div>
						<div className="col-md-6 ">
							<form action="#" className="contact-form">
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<input
												type="text"
												className="form-control"
												placeholder="Your Name"
											/>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<input
												type="text"
												className="form-control"
												placeholder="Your Email"
											/>
										</div>
									</div>
								</div>
								<div className="form-group">
									<input
										type="text"
										className="form-control"
										placeholder="Subject"
									/>
								</div>
								<div className="form-group">
									<textarea
										name=""
										id=""
										cols="30"
										rows="7"
										className="form-control"
										placeholder="Message"></textarea>
								</div>
								<div className="form-group">
									<input
										type="submit"
										value="Send Message"
										className="btn btn-primary py-3 px-5"
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>

			<div>
				<iframe
					title="Map"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1185.7185661571068!2d30.048093300244172!3d-1.598344627250986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dc87416284f1d3%3A0xbc6bc80f940f3889!2sByumba%20Regional%20Stadium%2C%20Kibali!5e0!3m2!1sen!2srw!4v1650219195415!5m2!1sen!2srw"
					width="100%"
					height="450"
					style={{ border: "0" }}
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"></iframe>
			</div>
		</div>
	);
}

export default Contact;
