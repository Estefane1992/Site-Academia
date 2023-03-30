import React from "react";

const Secheader = (props) => {
	return (
		<>
			<div className="sec_hdr" id="modalidades">
				<div className="secondary_header  d-flex justify-content-center align-items-center flex-column">
					<h2  className="secondary_title" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">{props.sectitle}</h2>	
					<h5 className="secondary_h5 lead px-4 text-center"  data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000">{props.secdesc}</h5>
				</div>
			</div>
		</>
	);
};

export default Secheader;