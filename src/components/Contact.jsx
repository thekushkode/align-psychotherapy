import React, { Component } from "react";
import { MDBRow, MDBCol, MDBBtn, MDBInput, MDBContainer } from "mdbreact";
import './AlignColors.css';
import Nav from "./Nav";
import Footer from "./Footer";
import pic from '../assets/align-pics/contact1.jpg';
import BookingScript from "./BookingScript";

class ContactPage extends Component {

    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }

    render() {
        const { status } = this.state;
        return (
            <div>
                <header style={{ marginBottom: '120px' }}>
                    <Nav />
                </header>
                <MDBContainer>
                    <h2 className="h1-responsive font-weight-bold mirage text-center my-5">
                        Contact us
                    </h2>
                    <hr className='hr-dark mb-5' style={{ margin: '0 300px' }} />
                    <p className="text-center w-responsive trirong-thin mx-auto pb-5">
                        Thank you for your interest in Align Psychotherapy! <br />Please reach out with any questions or to <a href="https://alignpsychotherapy.clientsecure.me"  data-spwidget-scope-id="f3c67842-b172-4f33-afae-04e02f438fe1" data-spwidget-scope-uri="alignpsychotherapy" data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b" data-spwidget-scope-global data-spwidget-autobind>request an appointment.</a><script src="https://widget-cdn.simplepractice.com/assets/integration-1.0.js"></script> <br />I look forward to helping you.
                    </p>
                    <MDBRow>
                        <MDBCol md='3' >
                            <img src={pic} alt='vase on stand' className='img-fluid' />
                        </MDBCol>
                        <MDBCol md="9" className="md-0 mb-5">
                            <form name='contact' onSubmit={this.submitForm} method='POST' action='https://formspree.io/f/myylwndw' >
                                <MDBRow>
                                    <MDBCol md="12">
                                        <div className="md-form mb-0">
                                            <MDBInput type="text" id="contact-name" label="Name" name='Name' />
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
                                                name='Email'
                                            />
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="12">
                                        <div className="md-form mb-0">
                                            <MDBInput type="text" id="contact-subject" label="Subject" name='Subject' />
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
                                                name='Message'
                                            />
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                                <div className="text-center text-md-left">
                                    <MDBBtn outline color='grey lighten-5' className='' size="md" type='submit' >
                                        Send
                                </MDBBtn>
                                
                                </div>
                                {status === 'SUCCESS' && <p>Your Email Has Been Sent!</p>}
                                {status === 'ERROR' && <p>Oops! There was an error. Please try again.</p>}
                            </form>
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