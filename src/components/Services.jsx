import React, { useEffect } from "react";
import { MDBRow, MDBCol, MDBIcon, MDBContainer } from "mdbreact";
import './AlignColors.css';
import logo from '../assets/alignlogo.jpeg';
import Footer from "./Footer";
import Nav from "./Nav";
import AllServicesModal from './AllServicesModal';
import sittype from '../assets/type.jpg';
import pill from '../assets/pill2.jpg';
import psycho from '../assets/psycho.png';
import tumbleweed from '../assets/tumbleweed.jpg';

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
                <h2 className="h1-responsive black-text mirage font-weight-bold text-center mb-3 pt-5">
                    Virtual Therapy
                        </h2>
                <hr className='hr-dark mb-5' style={{ margin: '0 100px' }} />
                <MDBRow>
                    <MDBCol md='9'>
                        <h4 className="text-center trirong-med black-text w-responsive mx-auto mb-5">
                            Telehealth has met the need for mental health support no matter what circumstances or challenges present to access care. Virtual therapy is a huge step forward in wellness technology and I am extremely excited to provide teletherapy to clients near and far in the states I hold a license. There are endless benefits to teletherapy--convenience being among the top.
                                </h4>
                        <a href='https://mytherapynyc.com/benefits-of-virtual-therapy/' target='_blank' rel="noopener noreferrer" ><p className="trirong-thin text-center w-responsive mx-auto mb-5">See Benefits of Virtual Therapy</p></a>
                    </MDBCol>
                    <MDBCol md='3'>
                        <img src={sittype} alt='girl sitting and typing on laptop' className='img-fluid pb-3' width='90%' />
                    </MDBCol>
                </MDBRow>
            </section>
            <section className="mb-5">
                <h2 className="h1-responsive black-text mirage font-weight-bold text-center mb-3">
                    Pricing
                        </h2>
                <hr className='hr-dark mb-5' style={{ margin: '0 100px' }} />
                <MDBRow>
                    <MDBCol md='9' className='align-self-center'>
                        <h4 className="text-justify trirong-med spacing black-text w-responsive mx-auto mb-5">
                            Session cost for one hour (50 minute therapy hour) is $130. I also accept the following insurances: Cigna, BCBS, and Aetna. I believe the client/therapist relationship is an extremely important part of the therapy process therefore I o er a free 15 minute phone consultation to help you determine if I am the right fit. Please don't hesitate to reach out!
                        </h4>
                    </MDBCol>
                    <MDBCol md='3'>
                        <img src={tumbleweed} alt='girl sitting and typing on laptop' className='img-fluid pb-3' width='70%' />
                    </MDBCol>
                </MDBRow>
            </section>
            <footer style={{ marginTop: '-50px' }}>
                <Footer />
            </footer>
        </div>
    );
}

export default Telehealth;