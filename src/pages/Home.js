import React from 'react'
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 ">
              <div className="media d-block text-center block-6 services">
                <div className="icon d-flex mb-3"><span className="flaticon-facial-treatment"></span></div>
                <div className="media-body">
                  <h3 className="heading">PhotoShoot Makeup</h3>
                  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
              </div>      
            </div>
            <div className="col-md-4 ">
              <div className="media d-block text-center block-6 services">
                <div className="icon d-flex mb-3"><span className="flaticon-cosmetics"></span></div>
                <div className="media-body">
                  <h3 className="heading">Bridal shower Makeup</h3>
                  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
              </div>      
            </div>
            <div className="col-md-4 ">
              <div className="media d-block text-center block-6 services">
                <div className="icon d-flex mb-3"><span className="flaticon-curl"></span></div>
                <div className="media-body">
                  <h3 className="heading">Weeding Makeup</h3>
                  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
              </div>    
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section  text-center">
              <h2 className="mb-4">Our Beauty Experts</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 d-flex mb-sm-4 ">
              <div className="staff">
                <div className="img mb-4" style={{backgroundImage: "url(images/bg_0.jpg)"}}></div>
                <div className="info text-center">
                  <h3><Link to="teacher-single.html">Fausca</Link></h3>
                  <span className="position">Stylist</span>
                  <div className="text">
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex mb-sm-4 ">
              <div className="staff">
                <div className="img mb-4" style={{backgroundImage: "url(images/person_2.jpg)"}}></div>
                <div className="info text-center">
                  <h3><Link to="teacher-single.html">Isabella</Link></h3>
                  <span className="position">Fashionist</span>
                  <div className="text">
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-discount img" style={{backgroundImage: "url(images/bg_2.jpg)"}}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-md-5 discount ">
              <h3>Save up to 25% Off</h3>
              <h2 className="mb-4">Student Discount</h2>
              <p className="mb-4">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
              <p><Link to="#" className="btn btn-white btn-outline-white px-4 py-3">Book Now</Link></p>
            </div>
          </div>
        </div>
      </section>

    <section className="ftco-section">
    	<div className="container">
    		<div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ">
            <h2 className="mb-4">Our Work</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
        </div>
        <div className="row">
        	<div className="col-md-4 ">
        		<Link to="#" className="work-entry">
        			<img src="images/work-1.jpg" className="img-fluid" alt="Colorlib Template "/>
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
        			<img src="images/work-2.jpg" className="img-fluid" alt="Colorlib Template"/>
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
                <img src="images/photoShoot.jpg" className="img-fluid" alt="Colorlib Template"/>
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

	  <section className="ftco-section ftco-counter img" id="section-counter" style={{backgroundImage: "url(images/bg_4.jpg)"}}>
			<div className="overlay"></div>
      <div className="container">
        <div className="row justify-content-center">
        	<div className="col-md-10">
        		<div className="row">
		          <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ">
		            <div className="block-18 text-center">
		              <div className="text">
		              	<div className="icon"><span className="flaticon-flower"></span></div>
		              	<span>Makeup Over Done</span>
		                <strong className="number" data-number="3500">230</strong>
		              </div>
		            </div>
		          </div>
		          <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ">
		            <div className="block-18 text-center">
		              <div className="text">
		              	<div className="icon"><span className="flaticon-flower"></span></div>
		              	<span>Procedure</span>
		                <strong className="number" data-number="1000">67</strong>
		              </div>
		            </div>
		          </div>
		          <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ">
		            <div className="block-18 text-center">
		              <div className="text">
		              	<div className="icon"><span className="flaticon-flower"></span></div>
		              	<span>Happy Client</span>
		                <strong className="number" data-number="3000">225</strong>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
        </div>
      </div>
    </section>
		
	  <section className="ftco-section ftco-appointment">
			<div className="overlay"></div>
    	<div className="container">
    		<div className="row d-md-flex align-items-center">
    			<div className="col-md-2"></div>
	    		<div className="col-md-4 d-flex align-self-stretch ">
	    			<div className="appointment-info text-center p-5">
	    				<div className="mb-4">
	    					<h3 className="mb-3">Address</h3>
		    				<p>	Gicumbi</p>
	    				</div>
	    				<div className="mb-4">
		    				<h3 className="mb-3">Phone</h3>
		    				<p className="day"><strong>+250 784 182 858</strong> or <strong>000 987 654</strong></p>
	    				</div>
	    				<div>
		    				<h3 className="mb-3">Opening Hours</h3>
		    				<p className="day"><strong>Monday - Friday</strong></p>
		    				<span>08:00am - 09:00pm</span>
	    				</div>
	    			</div>
	    		</div>
	    		<div className="col-md-6 appointment pl-md-5 ">
	    			<h3 className="mb-3">Appointments</h3>
	    			<form action="#" className="appointment-form">
	            <div className="row form-group d-flex">
	            	<div className="col-md-6">
	            		<input type="text" className="form-control" placeholder="First Name"/>
	            	</div>
	            	<div className="col-md-6">
	            		<input type="text" className="form-control" placeholder="Last Name"/>
	            	</div>
	            </div>
	            <div className="row form-group d-flex">
	            	<div className="col-md-6">
	            		<div className="input-wrap">
		            		<div className="icon"><span className="ion-md-calendar"></span></div>
		            		<input type="text" id="appointment_date" className="form-control" placeholder="Date"/>
	            		</div>
	            	</div>
	            	<div className="col-md-6">
	            		<input type="text" className="form-control" placeholder="Phone"/>
	            	</div>
	            </div>
	            <div className="form-group">
	              <textarea name="" id="" cols="30" rows="3" className="form-control" placeholder="Message"></textarea>
	            </div>
	            <div className="form-group">
	              <input type="submit" value="Make Appointment" className="btn btn-white btn-outline-white py-3 px-4"/>
	            </div>
	          </form>
	    		</div>    			
    		</div>
    	</div>
    </section>
    </div>
  )
}

export default Home
