import React, { Component } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput, MDBContainer } from "mdbreact";
import './AlignColors.css';
import Nav from "./Nav";
import Footer from "./Footer";

class ContactPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {

        return (
            <div>
                <header style={{ marginBottom: '86px' }}>
                    <Nav />
                </header>
                <MDBContainer>
                    <h2 className="h1-responsive font-weight-bold text-center my-5">
                        Contact us
                    </h2>
                    <p className="text-center w-responsive mx-auto pb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                        error amet numquam iure provident voluptate esse quasi, veritatis
                        totam voluptas nostrum quisquam eum porro a pariatur veniam.
                    </p>
                    <MDBRow>
                        <MDBCol md="12" className="md-0 mb-5">
                            <form>
                                <MDBRow>
                                    <MDBCol md="6">
                                        <div className="md-form mb-0">
                                            <MDBInput type="text" id="contact-name" label="Your name" />
                                        </div>
                                    </MDBCol>
                                    <MDBCol md="6">
                                        <div className="md-form mb-0">
                                            <MDBInput
                                                type="text"
                                                id="contact-email"
                                                label="Your email"
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
                                                label="Your message"
                                            />
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </form>
                            <div className="text-center text-md-left">
                                <MDBBtn color="primary" size="md">
                                    Send
                                </MDBBtn>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>


                {/* <section className="my-5">
                    <h2 className="h1-responsive font-weight-bold text-center my-5">
                        Contact us
                    </h2>
                    <p className="text-center w-responsive mx-auto pb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                        error amet numquam iure provident voluptate esse quasi, veritatis
                        totam voluptas nostrum quisquam eum porro a pariatur veniam.
                    </p>
                    <MDBRow>
                        <MDBCol lg="5" className="lg-0 mb-4">
                            <MDBCard>
                                <MDBCardBody>
                                    <div className="form-header aligncream">
                                        <h3 className="mt-2 black-text">
                                            <MDBIcon icon="envelope" /> Write to us:
                                    </h3>
                                    </div>
                                    <form method='POST' action='' >
                                        <div className="md-form">
                                            <MDBInput
                                                icon="user"
                                                label="Your name"
                                                iconClass="grey-text"
                                                type="text"
                                                id="form-name"
                                            />
                                        </div>
                                        <div className="md-form">
                                            <MDBInput
                                                icon="envelope"
                                                label="Your email"
                                                iconClass="grey-text"
                                                type="text"
                                                id="form-email"
                                            />
                                        </div>
                                        <div className="md-form">
                                            <MDBInput
                                                icon="tag"
                                                label="Subject"
                                                iconClass="grey-text"
                                                type="text"
                                                id="form-subject"
                                            />
                                        </div>
                                        <div className="md-form">
                                            <MDBInput
                                                icon="pencil-alt"
                                                label="Message"
                                                iconClass="grey-text"
                                                type="textarea"
                                                id="form-text"
                                            />
                                        </div>
                                        <div className="text-center">
                                            <MDBBtn className="aligncream black-text btn-rounded">Submit</MDBBtn>
                                        </div>
                                    </form>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol lg="7">
                            <div
                                id="map-container"
                                className="rounded z-depth-1-half map-container"
                                style={{ height: "400px" }}
                            >
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.617642250459!2d-84.57399454983516!3d33.95096108053851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f515d1261fcb73%3A0xd1f945c8407d2ed7!2s25%20Whitlock%20Pl%20SW%20%23101%2C%20Marietta%2C%20GA%2030064!5e0!3m2!1sen!2sus!4v1603119668088!5m2!1sen!2sus"
                                    title="Align Psychotherapy"
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    style={{ border: 0 }}
                                />
                            </div>
                            <br />
                            <MDBRow className="text-center">
                                <MDBCol md="4">
                                    <MDBBtn tag="a" floating className="aligncream black-text">
                                        <MDBIcon className='black-text' icon="map-marker-alt" />
                                    </MDBBtn>
                                    <p>Marietta, Ga 30064</p>
                                </MDBCol>
                                <MDBCol md="4">
                                    <MDBBtn tag="a" floating className="aligncream">
                                        <MDBIcon className='black-text' icon="phone" />
                                    </MDBBtn>
                                    <p>470.517.3251</p>
                                </MDBCol>
                                <MDBCol md="4">
                                    <MDBBtn tag="a" floating className="aligncream">
                                        <MDBIcon className='black-text' icon="envelope" />
                                    </MDBBtn>
                                    <p>brittellison1@gmail.com</p>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </section> */}
                <footer>
                    <Footer />
                </footer>
            </div>
        );
    };
};

export default ContactPage;