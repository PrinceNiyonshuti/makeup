/** @format */

import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Work from "../pages/Work";

function Layout() {
	return (
		<BrowserRouter>
			<div>
				<NavBar />
				<Routes>
					<Route exact path="/" element={<Home />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/service" element={<Services />}></Route>
					<Route path="/work" element={<Work />}></Route>
					<Route path="/contact" element={<Contact />}></Route>
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default Layout;
