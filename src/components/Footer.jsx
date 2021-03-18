import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import logo from '../assets/alignvert.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <MDBFooter style={{ backgroundColor: "#f1f6f7" }} className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center black-text text-md-left">
                <MDBRow>
                    <MDBCol md="4">
                        <h4 className="title">Align Psychotherapy</h4>
                        <p>
                            Brittany Ellison, LPC
                        </p>
                        <p className='p-0 m-0'>1985 Riviera Drive, Suite 103-1063</p>
                        <p className='p-0 m-0'>Mount Pleasant, SC 29464</p>
                        <p className='p-0 m-0'><a style={{ color: 'black' }} href='tel:4042599479'>404.259.9479</a></p>
                        <p className='mb-4'><a style={{ color: 'black' }} href='mailto:brittany@alignpsychotherapy.co'>brittany@alignpsychotherapy.co</a></p>
                        <MDBRow>
                            <MDBCol>
                                <p>Georgia License #: <b>011125</b></p>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md='4' className='text-center'>
                        <img src={logo} width='100px' alt='Align Psychotherapy Logo' className='img-fluid' />
                    </MDBCol>
                    <MDBCol md="4">
                        <h5 className="title black-text text-right">Helpful Links</h5>
                        <ul>
                            <li className="black-text text-right list-unstyled">
                                <Link style={{ color: 'black' }} to='/about'>About</Link>
                            </li>
                            <li className="black-text mb-1 text-right list-unstyled">
                                <Link style={{ color: 'black' }} to='/virtual'>Services</Link>
                            </li>
                            <li className="black-text mb-1 text-right list-unstyled">
                                <Link style={{ color: 'black' }} to='/contact'>Contact</Link>
                            </li>
                        </ul>
                        <div className='d-flex justify-content-end' >
                            <a className='black-text mr-2' href='mailto:brittany@alignpsychotherapy.co'>
                                <MDBIcon fas icon='envelope' />
                            </a>
                            <a className='black-text' href='https://www.instagram.com/alignpsychotherapy/'>
                                <MDBIcon fab icon='instagram' />
                            </a>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div style={{ backgroundColor: '#e4e5e7' }} className="footer-copyright text-center py-3">
                <MDBContainer className='d-flex justify-content-between black-text' fluid>
                    <div>
                        &copy; {new Date().getFullYear()} Copyright: Align Psychotherapy
                    </div>
                    <div>
                        Powered By: <a style={{ color: 'black' }} href='https://www.goatwebdesigns.com'>Goat Web Designs</a>
                    </div>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Footer;