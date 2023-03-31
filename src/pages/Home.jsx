import React, { useEffect} from "react";
import AOS from "aos"
import 'aos/dist/aos.css'
const Home = () => {
	useEffect(() => {
		AOS.init();
	  }, [])
	return (
		<>
		<section className="sec_1" id="home"> 
			<div className="header_height sec_bg d-flex align-items-center">
				<div className="container">
					<div className="home">
						<h1 className="hdrcolor" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">PROFIT ACADEMIA</h1>
						{/* <p className="home-paragrafo" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000">Sua saúde é a nossa história.</p> */}
					</div>
				</div>
			</div>
		</section>

		<section> 
			<div className="container mx-auto py-5" >
				<div className="mb-4 text-center">
					<p className="display-6 mb-1 section-home" data-aos="flip-left" data-aos-easing="linear" data-aos-duration="3000">HORÁRIOS DE FUNCIONAMENTO</p>
					
				</div>
				<div className="row gy-5 d-flex align-items-center justify-content-evenly mt-0">
					<div className="col-md-4 col-lg-3 text-center">
						<div className="box_border position-relative rounded pt-5 pb-3 px-3" data-aos="flip-up" data-aos-easing="linear" data-aos-duration="3000">
							<p id="time" className="text-muted text-left text-xl-center text-lg-center time">SEGUNDA À SEXTA-FEIRA <br/> <br/> Aberto das 05:00h às 22:00h.</p>
						</div>
					</div>
					<div className="col-md-4 col-lg-3 text-center" >
						<div className="box_border position-relative rounded pt-5 pb-3 px-3" data-aos="flip-up" data-aos-easing="linear" data-aos-duration="3000">
							<p id="time" className="text-muted text-left text-xl-center text-lg-center time">SÁBADO <br/> <br/>
							Aberto das 08:00h às 14:00h</p>
						</div>
					</div>
					<div className="col-md-4 col-lg-3 text-center">
						<div className="box_border position-relative rounded pt-5 pb-3 px-3" data-aos="flip-up" data-aos-easing="linear" data-aos-duration="3000">
							<p id="time" className="text-muted text-left text-xl-center text-lg-center">DOMINGO <br/> <br/>
							Aberto das 09:00 às 14:00h</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		</>
	);
};

export default Home;