import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Footer from "./pages/common/Footer";
import NavBar from "./pages/common/Navbar";
import Plans from "./pages/Plans";
import ScrollToTop from "./pages/ScrollToTop";

const App = () => {
	return (
		<>
			<NavBar />
			<Home />
			<Service />
			<Plans />
			<ScrollToTop />
			<Footer />
		</>
	);
};

export default App;