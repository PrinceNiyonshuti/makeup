import React from 'react'
import Experts from "../components/Experts";
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
      <Experts/>
		</div>
	);
}

export default About
