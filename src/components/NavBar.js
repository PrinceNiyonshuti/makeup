import React from 'react'
import { Link } from "react-router-dom";
function NavBar() {
    return (
        <>
            <div className="hero-wrap js-fullheight" style={{backgroundImage: "url('/images/bg_0.jpg')"}} data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true">
                    <div className="col-md-8  text-center" data-scrollax=" properties: { translateY: '70%' }">
                        <div className="icon">
                            <Link to="/" className="logo">
                                <span className="flaticon-flower"></span>
                                <h1>Fosca MakeUp</h1>
                            </Link>
                        </div>
                        <h1 className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Beauty MakeUp</h1>

                        <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><Link to="/service" className="btn btn-white btn-outline-white px-4 py-3">View Our Services</Link></p>
                    </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                <Link className="navbar-brand" to="/">Fosca MakeUp</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
                </button>

                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="about" className="nav-link">About</Link></li>
                    <li className="nav-item"><Link to="service" className="nav-link">Services</Link></li>
                    <li className="nav-item"><Link to="work" className="nav-link">Work</Link></li>
                    <li className="nav-item"><Link to="contact" className="nav-link">Contact</Link></li>
                    </ul>
                </div>
                </div>
            </nav>
        </>
  )
}

export default NavBar
