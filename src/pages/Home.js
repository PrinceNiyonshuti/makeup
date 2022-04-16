import React from 'react'
import Advert from '../components/Advert';
import Experts from '../components/Experts';
import Service from '../components/Service';
import ShowCase from '../components/ShowCase';
import Works from '../components/Works';
function Home() {
  return (
    <div>
		<Service />
		<Experts/>
		<Advert/>
    	<Works/>
		<ShowCase/>
		
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
