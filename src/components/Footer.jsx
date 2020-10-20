import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import logo from '../assets/alignlogo.png';

const Footer = () => {
    return (
        <MDBFooter style={{ backgroundColor: "#f1f5e4" }} className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center black-text text-md-left">
                <MDBRow>
                    <MDBCol md="4">
                        <h4 className="title">Align Psychotherapy</h4>
                        <p>
                            Brittany Ellison, LPC
                        </p>
                        <p className='p-0 m-0'>25 Whitlock Place SE, St-101</p>
                        <p className='p-0 m-0'>Marietta, Ga 30064</p>
                        <p className='p-0 m-0'><a style={{ color: 'black' }} href='tel:4705173251'>470.517.3251</a></p>
                        <p className='mb-4'><a style={{ color: 'black' }} href='mailto:brittellison1@gmail.com'>brittellison1@gmail.com</a></p>
                        <MDBRow>
                            <MDBCol>
                                <p>Georgia License #: <b>011125</b></p>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md='4'>
                        <img src={logo} alt='Align Psychotherapy Logo' className='img-fluid'/>
                    </MDBCol>
                    <MDBCol md="4">
                        <h5 className="title black-text text-right">Helpful Links</h5>
                        <ul>
                            <li className="black-text mb-1 text-right list-unstyled">
                                Schedule Appointment
                            </li>
                            <li className="black-text mb-1 text-right list-unstyled">
                                Services
                            </li>
                            <li className="black-text mb-1 text-right list-unstyled">
                                Contact
                            </li>
                            <li className="black-text text-right list-unstyled">
                                FAQ
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer className='d-flex justify-content-between' fluid>
                    <div>
                        &copy; {new Date().getFullYear()} Copyright: Align Psychotherapy
                    </div>
                    <div>
                        Powered By: <a href='https://www.goatwebdesigns.com'>Goat Web Designs</a>
                    </div>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Footer;