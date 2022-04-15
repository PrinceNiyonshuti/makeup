import React from 'react'

function Footer() {
  return (
     <footer className="ftco-footer ftco-section img">
    	<div className="overlay"></div>
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-5">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">About Us</h2>
              <p>Fosca_makeup </p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
                <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
                <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
             <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Spa Center</h2>
              <ul className="list-unstyled">
                <li><a href="#" className="py-2 d-block">Wedding Makeup</a></li>
                <li><a href="#" className="py-2 d-block">Bridal shower makeup</a></li>
                <li><a href="#" className="py-2 d-block">Photoshoot Makeup</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="ftco-footer-widget mb-4">
            	<h2 className="ftco-heading-2">Have a Questions?</h2>
            	<div className="block-23 mb-3">
	              <ul>
	                <li><span className="icon icon-map-marker"></span><span className="text">Gicumbi </span></li>
	                <li><a href="#"><span className="icon icon-phone"></span><span className="text">+250 784 182 858</span></a></li>
	                <li><a href="#"><span className="icon icon-envelope"></span><span className="text">mariefausca20@gmail.com</span></a></li>
	              </ul>
	            </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">

            <p>
            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Designed by <a href="https://princeniyonshuti.github.io./" target="_blank">NPTech</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
