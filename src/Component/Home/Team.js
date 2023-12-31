import React, { useEffect } from 'react';
import { Container, Row, Image, Col } from "react-bootstrap";
import team1 from "../../assets/images/team11.png"
import team2 from "../../assets/images/team22.png";
import team3 from "../../assets/images/team33.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Team = () => {
    useEffect(() => {
        AOS.init({
            easing: "linear",
            once: true,
            delay: 400,
            duration: 800,
        });
        AOS.refresh()
    }, []);
    return (
        <>
            <section className='team_wrap'>
                <Container>
                    <div className='team_title'>
                        <h2 className='h2_title'>meet our team</h2>
                    </div>
                    <Row>
                        <Col sm={6} md={6} lg={3} xl={3}>
                            <div className='team_card_wrap' data-aos="fade-right"   data-aos-delay="500">
                                <figure className='team_card_img'>
                                    <Image src={team1} alt='team' fluid />
                                </figure>
                                <div className='team_card_details'>
                                    <h4 className='h4_title'>Omkar Panchal</h4>
                                    <p className='pera'>owner</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} md={6} lg={3} xl={3}>
                            <div className='team_card_wrap' data-aos="fade-down" data-aos-delay="700">
                                <figure className='team_card_img'>
                                    <Image src={team2} alt='team' fluid />
                                </figure>
                                <div className='team_card_details'>
                                    <h4 className='h4_title'>Ravi kant</h4>
                                    <p className='pera'>CEO</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} md={6} lg={3} xl={3}>
                            <div className='team_card_wrap'  data-aos="fade-left" data-aos-delay="500">
                                <figure className='team_card_img'>
                                    <Image src={team3} alt='team' fluid />
                                </figure>
                                <div className='team_card_details'>
                                    <h4 className='h4_title'>Rajesh Panchal</h4>
                                    <p className='pera'>MD</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Team