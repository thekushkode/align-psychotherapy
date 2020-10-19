import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import logo from '../assets/alignlogo.png';

const Footer = () => {
    return (
        <MDBFooter style={{ backgroundColor: "#f1f5e4" }} className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center black-text text-md-left">
                <MDBRow>
                    <MDBCol md="4">
                        <h5 className="title">Footer Content</h5>
                        <p>
                            Here you can use rows and columns here to organize your footer
                            content.
                        </p>
                    </MDBCol>
                    <MDBCol md='4'>
                        <img src={logo} alt='Align Psychotherapy Logo' className='img-fluid'/>
                    </MDBCol>
                    <MDBCol md="4">
                        <h5 className="title black-text">Links</h5>
                        <ul>
                            <li className="black-text list-unstyled">
                                Option1
                            </li>
                            <li className="black-text list-unstyled">
                                Option2
                            </li>
                            <li className="black-text list-unstyled">
                                Option3
                            </li>
                            <li className="black-text list-unstyled">
                                Option4
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