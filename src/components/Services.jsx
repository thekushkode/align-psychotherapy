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
import tel1 from '../assets/tel1.jpg';
import tel2 from '../assets/tel2.jpg';
import tel3 from '../assets/tel3.jpg';
import tel4 from '../assets/tel4.jpg';

const Telehealth = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <header style={{ marginBottom: '65px' }}>
                <Nav />
            </header>
            {/* <section className="alignlightbrown" >
                    <MDBRow className='text-center'>
                        <MDBCol md='8' className='' style={{ marginLeft: '-75px' }}>
                        <img src={pill} alt='Brittany Ellison on Couch' className='img-fluid' />
                    </MDBCol>
                        <MDBCol md='12' className='align-self-center'>
                            <img src={psycho} alt='Align alternate logo' className='img-fluid' />
                        </MDBCol>
                    </MDBRow>
            </section> */}
            <section className="alignlightgrey">
                <h2 className="h1-responsive black-text mirage font-weight-bold text-center mb-3 pt-5">
                    Virtual Therapy
                        </h2>
                <hr className='hr-dark mb-5' style={{ margin: '0 200px' }} />
                {/* <MDBRow>
                    <MDBCol md='9' className=''>
                        <p className="text-center trirong-med black-text w-responsive mx-auto mb-5">
                            In today’s world of technology, accessing healthcare is easier than ever. Telehealth or virtual therapy has decreased the barriers or challenges in accessing care. In addition it provides comfort, convenience and flexibility to the therapeutic experience. Unfortunately, it can be difficult to find a therapist in your community, with your specialization and whose fee or insurance policy is a good fit. Also, once you find a therapist there can often be a long waitlist. Virtual therapy enables you to receive services you may otherwise not be unable to obtain.<br/><br/>

                            Virtual therapy is a huge step forward in wellness technology and I am extremely excited to provide this opportunity to clients near and far in the states I hold a license. It is the same high-quality mental health care but conveniently offered from the comfort of your own space increasing the flexibility of meeting as there is no planning around traffic to drive to an office. You and your therapist will login to a secure hippa compliant website to begin your therapy session. Clients can use the secure video platform right on their phone, computer, or tablet. This allows you to have therapy sessions from the comfort of your home, on your lunch break or even in your car. Therapy can fit into your busy day. The benefits to virtual therapy are endless. Please reach out if you have any questions!

                                </p>
                        <a href='https://mytherapynyc.com/benefits-of-virtual-therapy/' target='_blank' rel="noopener noreferrer" ><p className="trirong-thin text-center w-responsive mx-auto mb-5">See Benefits of Virtual Therapy</p></a>
                    </MDBCol>
                    <MDBCol md='3' className=''>
                        <img src={sittype} alt='girl sitting and typing on laptop' className='img-fluid pb-3' width='90%' />
                    </MDBCol>
                </MDBRow> */}
                <MDBRow className='d-flex justify-content-between mx-2'>
                    <img src={tel1} alt='' className='img-fluid w-25' />
                    <img src={tel2} alt='' className='img-fluid w-25' />
                </MDBRow>
                <MDBRow className='d-flex justify-content-center'>
                    <MDBCol md='6'>
                        <p className="trirong-med black-text w-responsive mx-auto my-4">
                            In today’s world of technology, accessing healthcare is easier than ever. Telehealth or virtual therapy has decreased the barriers or challenges in accessing care. In addition it provides comfort, convenience and flexibility to the therapeutic experience. Unfortunately, it can be difficult to find a therapist in your community, with your specialization and whose fee or insurance policy is a good fit. Also, once you find a therapist there can often be a long waitlist. Virtual therapy enables you to receive services you may otherwise not be unable to obtain.<br /><br />

                            Virtual therapy is a huge step forward in wellness technology and I am extremely excited to provide this opportunity to clients near and far in the states I hold a license. It is the same high-quality mental health care but conveniently offered from the comfort of your own space increasing the flexibility of meeting as there is no planning around traffic to drive to an office. You and your therapist will login to a secure hippa compliant website to begin your therapy session. Clients can use the secure video platform right on their phone, computer, or tablet. This allows you to have therapy sessions from the comfort of your home, on your lunch break or even in your car. Therapy can fit into your busy day. The benefits to virtual therapy are endless. Please reach out if you have any questions!

                    </p>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <img src={sittype} alt='girl sitting and typing on laptop' className='img-fluid mx-auto pb-3 w-25' />
                </MDBRow>
                <MDBRow className='d-flex justify-content-between mx-2 pb-2'>
                    <img src={tel3} alt='' className='img-fluid w-25' />
                    <img src={tel4} alt='' className='img-fluid w-25' />
                </MDBRow>
            </section>
            {/* <section className='aligngrey'>
                <MDBRow className='p-4'>
                    <MDBCol md='6' className='mb-4'>
                        <img src={tel1} alt='' className='img-fluid' />
                    </MDBCol>
                    <MDBCol md='6' className=''>
                        <img src={tel2} alt='' className='img-fluid' />
                    </MDBCol>
                </MDBRow>
                <MDBRow className='px-4 pb-4'>
                    <MDBCol md='6' className='mb-4'>
                        <img src={tel3} alt='' className='img-fluid' />
                    </MDBCol>
                    <MDBCol md='6' className=''>
                        <img src={tel4} alt='' className='img-fluid' />
                    </MDBCol>
                </MDBRow>
            </section> */}
            {/* <section className="mb-5">
                <h2 className="h1-responsive black-text mirage font-weight-bold text-center my-3">
                    Pricing
                        </h2>
                <hr className='hr-dark mb-5' style={{ margin: '0 200px' }} />
                <MDBRow>
                    <MDBCol md='3'>
                        <img src={tumbleweed} alt='girl sitting and typing on laptop' className='img-fluid ml-5 pb-3' width='70%' />
                    </MDBCol>
                    <MDBCol md='6' className='align-self-center'>
                        <p className="text-justify trirong-med black-text w-responsive mx-auto mb-5">
                            Session cost for one hour (50 minute therapy hour) is $130. I also accept the following insurances: Cigna, BCBS, United, and Aetna. I believe the client/therapist relationship is an extremely important part of the therapy process therefore I offer a free 15 minute phone consultation to help you determine if I am the right fit. Please don't hesitate to reach out!
                        </p>
                    </MDBCol>
                </MDBRow>
            </section> */}
            <footer style={{ marginTop: '-25px' }}>
                <Footer />
            </footer>
        </div>
    );
}

export default Telehealth;