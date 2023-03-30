import React from "react";
import Secheader from "./common/Secondaryheader";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Musculacao from "../images/musculacao.jpg";
import CrossTraining from "../images/crosstraining.jpg";
import AulaBoxe from "../images/boxe1.jpg";
import Kickboxing from "../images/kickboxer.jpg";
import JiuJitsu from "../images/jiu.jpg";


const Service = () => {
	return (
		<>

			<Secheader 
				sectitle="Nossas Modalidades" 
				secdesc="Tudo o que você precisa em um só lugar." 
			/>

			<section > 
				<div className="container mx-auto " style={{paddingTop: "150px", paddingBottom: "100px"}}>
					<Row xs={1} md={3} className="g-5" style={{ justifyContent: "center"}}>
						<Col data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
							<Card className="Service" border="primary">
								<Card.Img className="Service-img" variant="top" src={Musculacao}/>
								<Card.Body>
									<Card.Title className="card-title">Musculação</Card.Title>
								</Card.Body>
							</Card>
						</Col>
						<Col data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
							<Card className="Service" border="primary">
								<Card.Img className="Service-img" variant="top" src={AulaBoxe}/>
								<Card.Body>
									<Card.Title className="card-title">Aulas de Boxe</Card.Title>
								</Card.Body>
							</Card>
						</Col> 
						<Col data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
							<Card className="Service" border="primary">
								<Card.Img className="Service-img" variant="top" src={CrossTraining}/>
								<Card.Body>
									<Card.Title className="card-title">Cross Training</Card.Title>
								</Card.Body>
							</Card>
						</Col>
						
						<Col data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
							<Card className="Service" border="primary">
								<Card.Img className="Service-img" variant="top" src={Kickboxing}/>
								<Card.Body>
									<Card.Title className="card-title">Aulas de Kickboxing</Card.Title>
								</Card.Body>
							</Card>
						</Col>
						
						<Col data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
							<Card className="Service" border="primary">
								<Card.Img className="Service-img" variant="top" src={JiuJitsu}/>
								<Card.Body>
									<Card.Title className="card-title">Aulas de Jiu-Jitsu</Card.Title>
								</Card.Body>
							</Card>
						</Col>
						
					</Row> 
				</div>
			</section>
		</>
	);
};

export default Service;