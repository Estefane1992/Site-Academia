import React from "react";
import { Facebook } from "@material-ui/icons";
import { Instagram } from "@material-ui/icons";

const Footer = () => {
	return (
		<>
			<footer>
				<div  className="container d-lg-flex align-items-center justify-content-center py-3 small text-center">
					<div ><a href="https://www.facebook.com/profitacademiasalvador/" target="blank"><Facebook className="icons" style={{fontSize: "2rem", color: "white"}}/></a>
					<a href="https://www.instagram.com/profit.academia/" target="blank"><Instagram className="icons" style={{fontSize: "2rem", color: "white"}}/></a>
					</div>
					
				</div>
				<div className="container d-lg-flex align-items-center justify-content-center py-3 small text-center">
					<div className="text-white small">Copyright © 2023 - Profit Academia</div>
					
				</div>
			</footer>
		</>
	);
};

export default Footer;