import React, { Component } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput, MDBContainer } from "mdbreact";
import './AlignColors.css';
import Nav from "./Nav";
import Footer from "./Footer";
import pic from '../assets/align-pics/contact1.jpg';

class ContactPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {

        return (
            <div>
                <header style={{ marginBottom: '120px' }}>
                    <Nav />
                </header>
                <MDBContainer>
                    <h2 className="h1-responsive font-weight-bold mirage text-center my-5">
                        Contact us
                    </h2>
                    <p className="text-center w-responsive trirong-thin mx-auto pb-5">
                        Thank you for your interest in Align Psychotherapy! <br/>Please reach out with any questions or to schedule a consultation. <br/>I look forward to helping you.
                    </p>
                    <MDBRow>
                        <MDBCol md='3' >
                            <img src={pic} alt='vase on stand' className='img-fluid' />
                        </MDBCol>
                        <MDBCol md="9" className="md-0 mb-5">
                            <form>
                                <MDBRow>
                                    <MDBCol md="12">
                                        <div className="md-form mb-0">
                                            <MDBInput type="text" id="contact-name" label="Name" />
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="12">
                                        <div className="md-form mb-0">
                                            <MDBInput
                                                type="text"
                                                id="contact-email"
                                                label="Email"
                                            />
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="12">
                                        <div className="md-form mb-0">
                                            <MDBInput type="text" id="contact-subject" label="Subject" />
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="12">
                                        <div className="md-form mb-0">
                                            <MDBInput
                                                type="textarea"
                                                id="contact-message"
                                                label="Message"
                                            />
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </form>
                            <div className="text-center text-md-left">
                                <MDBBtn outline rounded color='grey lighten-5' className='' size="lg">
                                    Send
                                </MDBBtn>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <footer>
                    <Footer />
                </footer>
            </div>
        );
    };
};

export default ContactPage;