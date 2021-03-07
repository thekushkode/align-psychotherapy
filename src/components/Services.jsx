import React, { useEffect } from "react";
import { MDBRow, MDBCol, MDBIcon, MDBContainer } from "mdbreact";
import './AlignColors.css';
import logo from '../assets/alignlogo.jpeg';
import Footer from "./Footer";
import Nav from "./Nav";
import AllServicesModal from './AllServicesModal';
import sittype from '../assets/align-pics/sittype.jpg';
import pill from '../assets/pill2.jpg';
import psycho from '../assets/psycho.png';

const Telehealth = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <header style={{ marginBottom: '85px' }}>
                <Nav />
            </header>
            <section>
                <MDBRow>
                    <MDBCol md='8' className='' style={{ marginLeft: '-75px' }}>
                        <img src={pill} alt='Brittany Ellison on Couch' className='img-fluid' />
                    </MDBCol>
                    <MDBCol md='4' className='align-self-center'>
                        <img src={psycho} alt='Align alternate logo' className='img-fluid' />
                    </MDBCol>
                </MDBRow>
            </section>
            <section className="my-5 alignlightgrey">
                {/* <h2 className="h1-responsive font-weight-bold text-center my-5">
                    TeleHealth
                </h2> */}
                {/* <p className="lead grey-text w-responsive text-center mx-auto mb-5">
                    I have experience in counseling & treating many different issues. I deeply respect my clients and the wisdom they have within. Together, we will tailor a treatment specific to your needs.
                </p> */}
                {/* <MDBContainer>

                    <MDBRow>
                        <MDBCol md="4">
                            <MDBRow className="mb-3">
                                <MDBCol size="2">
                                    <MDBIcon
                                        icon="exchange-alt"
                                        size="2x"
                                        className="alignbrowntext"
                                    />
                                </MDBCol>
                                <MDBCol size="10">
                                    <h5 className="font-weight-bold mb-3">Life Transitions</h5>
                                    <p className="text-muted">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Reprehenderit maiores nam, aperiam minima assumenda deleniti
                                        hic.
                                    </p>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="mb-3">
                                <MDBCol size="2">
                                    <MDBIcon icon="child" size="2x" className="alignbrowntext" />
                                </MDBCol>
                                <MDBCol size="10">
                                    <h5 className="font-weight-bold mb-3">Self Esteem</h5>
                                    <p className="text-muted">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Reprehenderit maiores nam, aperiam minima assumenda deleniti
                                        hic.
                                    </p>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="mb-3">
                                <MDBCol size="2">
                                    <MDBIcon icon="people-arrows" size="2x" className="alignbrowntext" />
                                </MDBCol>
                                <MDBCol size="10">
                                    <h5 className="font-weight-bold mb-3">Relationship Issues</h5>
                                    <p className="text-muted">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Reprehenderit maiores nam, aperiam minima assumenda deleniti
                                        hic.
                                    </p>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol md="4" className="my-auto">
                            <img
                                className="img-fluid"
                                src={logo}
                                alt="Align Psychotherapy Logo"
                            />
                        </MDBCol>
                        <MDBCol md="4">
                            <MDBRow className="mb-3">
                                <MDBCol size="2">
                                    <MDBIcon icon="cloud-showers-heavy" size="2x" className="alignbrowntext" />
                                </MDBCol>
                                <MDBCol size="10">
                                    <h5 className="font-weight-bold mb-3">Depression</h5>
                                    <p className="text-muted">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Reprehenderit maiores nam, aperiam minima assumenda deleniti
                                        hic.
                                    </p>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="mb-3">
                                <MDBCol size="2">
                                    <MDBIcon icon="baby" size="2x" className="alignbrowntext" />
                                </MDBCol>
                                <MDBCol size="10">
                                    <h5 className="font-weight-bold mb-3">Infertility</h5>
                                    <p className="text-muted">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Reprehenderit maiores nam, aperiam minima assumenda deleniti
                                        hic.
                                    </p>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="mb-3">
                                <MDBCol size="2">
                                    <MDBIcon icon="angry" size="2x" className="alignbrowntext" />
                                </MDBCol>
                                <MDBCol size="10">
                                    <h5 className="font-weight-bold mb-3">Anger Management</h5>
                                    <p className="text-muted">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Reprehenderit maiores nam, aperiam minima assumenda deleniti
                                        hic.
                                    </p>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer> */}
                    <h2 className="h1-responsive black-text mirage font-weight-bold text-center mb-3 pt-5">
                        Get Care From Anywhere!
                        </h2>
                    <hr className='hr-dark mb-5' style={{ margin: '0 100px' }} />
                    <MDBRow>
                        <MDBCol md='9'>
                            <h4 className="text-center hell black-text w-responsive mx-auto mb-5">
                                Telehealth has met the need for mental health support no matter what circumstances or challenges present to access care. Virtual therapy is a huge step forward in wellness technology and I am extremely excited to provide teletherapy to clients near and far in the states I hold a license. There are endless benefits to teletherapy--convenience being among the top.
                                </h4>
                            <a href='https://mytherapynyc.com/benefits-of-virtual-therapy/' target='_blank' rel="noopener noreferrer" ><p className="trirong-thin text-center w-responsive mx-auto mb-5">See Benefits of Virtual Therapy</p></a>
                        </MDBCol>
                        <MDBCol md='3'>
                            <img src={sittype} alt='girl sitting and typing on laptop' className='img-fluid pb-3' width='90%' />
                        </MDBCol>
                    </MDBRow>

                {/* <div className="d-flex justify-content-center">
                    <AllServicesModal />
                </div> */}
            </section>
            <footer style={{ marginTop: '-50px' }}>
                <Footer />
            </footer>
        </div>
    );
}

export default Telehealth;