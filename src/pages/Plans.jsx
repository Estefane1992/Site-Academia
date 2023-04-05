import React from "react";
// import  Row from "react-bootstrap/Row";
// import Card  from "react-bootstrap/Card";
// import Col  from "react-bootstrap/Col";
import { Phone } from "@material-ui/icons";
import plan1 from "../images/plans1.jpg";
import plan2 from "../images/plans.jpg";
import plan3 from "../images/plans3.jpeg";
const Plans = () => {
    return (
        <section id="planos"> 
			<div className="container mx-auto py-5" >
				<div className="mb-5 text-center">
					<p className="display-6 section-home" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">PLANOS DIFERENCIADOS PARA CADA NECESSIDADE</p>
					
				</div>
                <div id="plans">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-6 plans-col">
                                <img src={plan1} className="img-responsive" alt=""/>
                            </div>
                            <div className="col-xs-12 col-md-6">
                            <div className="plans-text">
                                <h2>Plano Mensal</h2>
                                <h3>Benefícios</h3>
                                <p>Musculação livre</p>
                                <p>Hórarios livres</p>
                                <p>Sem taxa de matricula</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="plans">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-6">
                            <div className="plans-text">
                                <h2>Plano Mensal</h2>
                                <h3>Benefícios</h3>
                                <p>Musculação livre</p>
                                <p>Hórarios livres</p>
                                <p>Sem taxa de matricula</p>
                            </div>
                                
                            </div>
                            <div className="col-xs-12 col-md-6 plans-col">
                            <img src={plan3} className="img-responsive" alt=""/>
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div id="plans">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-6 plans-col">
                                <img src={plan2} className="img-responsive" alt="" />
                            </div>
                            <div className="col-xs-12 col-md-6">
                                <div className="plans-text">
                                    <h2>Plano Semestral</h2>
                                    <h3>Benefícios</h3>
                                    <p>Musculação livre</p>
                                    <p>Horários livres</p>
                                    <p>Sem taxa de matrícula</p>
                                    <p>Sem taxa de manutenção</p>
                                    <p>Parcelamento em até 6x</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="mb-5 text-center">
					<p className="service-paragraph" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">Para saber mais sobre valores e detalhes dos planos, entre em contato conosco.</p><Phone className="font-icon"/><a className="contato-telefone" href="tel: 557134736303">(71) 34736303</a>
                    
					
				</div>
			</div>
		</section>
    )
}

export default Plans;