import React, { useEffect } from "react";
import { MDBRow, MDBCol, MDBIcon, MDBContainer } from "mdbreact";
import './AlignColors.css';
import logo from '../assets/alignlogo.jpeg';
import Footer from "./Footer";
import Nav from "./Nav";
import AllServicesModal from './AllServicesModal';

const Services = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <header style={{ marginBottom: '106px' }}>
                <Nav />
            </header>
            <section className="my-5">
                <h2 className="h1-responsive font-weight-bold text-center my-5">
                    Counseling Services
                </h2>
                <p className="lead grey-text w-responsive text-center mx-auto mb-5">
                    I have experience in counseling & treating many different issues. I deeply respect my clients and the wisdom they have within. Together, we will tailor a treatment specific to your needs.
                </p>
                <MDBContainer>

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
                </MDBContainer>
                <div className="d-flex justify-content-center">
                    <AllServicesModal />
                </div>
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Services;