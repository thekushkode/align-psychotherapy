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
            <header style={{ marginBottom: '86px' }}>
                <Nav />
            </header>
            <section className="my-5">
                <h2 className="h1-responsive font-weight-bold text-center my-5">
                    Our Services
        </h2>
                <p className="lead grey-text w-responsive text-center mx-auto mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam.
            </p>
                <MDBContainer>

                    <MDBRow>
                        <MDBCol md="4">
                            <MDBRow className="mb-3">
                                <MDBCol size="2">
                                    <MDBIcon
                                        icon="flag-checkered"
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
                                    <MDBIcon icon="flask" size="2x" className="alignbrowntext" />
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
                                    <MDBIcon icon="glass-martini" size="2x" className="alignbrowntext" />
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
                                    <MDBIcon icon="heart" size="2x" className="alignbrowntext" />
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
                                    <MDBIcon icon="bolt" size="2x" className="alignbrowntext" />
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
                                    <MDBIcon icon="magic" size="2x" className="alignbrowntext" />
                                </MDBCol>
                                <MDBCol size="10">
                                    <h5 className="font-weight-bold mb-3">Stress & Anxiety</h5>
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