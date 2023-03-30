import React from "react";
import  Row from "react-bootstrap/Row";
import Card  from "react-bootstrap/Card";
import Col  from "react-bootstrap/Col";



const Plans = () => {
    return (
        <section id="planos"> 
			<div className="container mx-auto py-5" >
				<div className="mb-5 text-center">
					<p className="display-6 section-home" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">PLANOS DIFERENCIADOS PARA CADA NECESSIDADE</p>
					
				</div>
                <Row xs={1} md={3} className="g-5">
                    <Col className="card_plans"  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                        <Card className="background">
                            <Card.Body>
                                <Card.Subtitle className="mb-3 text-center card_subtitle">PLANO</Card.Subtitle>
                                <Card.Subtitle className="text-center card_subtitle">MENSAL</Card.Subtitle>
                                <Card.Text className="mt-5 card_benefit">BENEFÍCIOS</Card.Text>
                                <Card.Text className="text_description">
                                    Musculação livre<br/> Hórarios livres<br/> Sem taxa de matricula<br/><br/><br/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                        <Card className="background"> 
                            <Card.Body>
                                <Card.Subtitle className="mb-3 text-center card_subtitle" >PLANO</Card.Subtitle>
                                <Card.Subtitle className="text-center card_subtitle">TRIMESTRAL</Card.Subtitle>
                                <Card.Text className="mt-5 card_benefit">BENEFÍCIOS</Card.Text>
                                <Card.Text className="text_description"> Musculação livre<br/>  Horários livres<br/>  Sem taxa de matrícula<br/>  Sem taxa de manutenção<br/><br/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                        <Card className="background">
                            <Card.Body>
                                <Card.Subtitle className="mb-3 text-center card_subtitle">PLANO</Card.Subtitle>
                                <Card.Subtitle className="text-center card_subtitle">SEMESTRAL</Card.Subtitle>
                                <Card.Text className="mt-5 card_benefit">BENEFÍCIOS</Card.Text>
                                <Card.Text className="text_description">  Musculação livre<br/>  Horários livres<br/>  Sem taxa de matrícula<br/>  Sem taxa de manutenção<br/> Parcelamento em até 6x
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
			</div>
		</section>
    )
}

export default Plans;