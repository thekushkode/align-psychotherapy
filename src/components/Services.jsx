import React, { useEffect } from "react";
import { MDBRow, MDBCol, MDBContainer, MDBView, MDBMask } from "mdbreact";
import './AlignColors.css';
import Footer from "./Footer";
import Nav from "./Nav";
import sittype1 from '../assets/virtualbackground.jpg';
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
            <header style={{ marginBottom: '80px' }}>
                <Nav />
            </header>
            <section>
                <h2 className="h1-responsive black-text mirage font-weight-bold text-center mb-3">
                    Virtual Therapy
                        </h2>
                <hr className='hr-dark mb-4' style={{ margin: '0 200px' }} />
                <MDBContainer>
                    <MDBView >
                        <img src={sittype1} class="img-fluid" alt='' />
                        <MDBMask className="flex-center" overlay="white-strong" >
                            <MDBRow className='mb-3'>
                                <MDBCol md='12'>
                                    {/* <h2 className="h1-responsive black-text mirage font-weight-bold text-center mb-3 pt-5">
                                        Virtual Therapy
                        </h2>
                                    <hr className='hr-dark mb-4' style={{ margin: '0 200px' }} /> */}
                                    <p className="trirong-med black-text text-center mx-auto w-responsive phoneText" style={{ fontSize: '20px' }}>
                                        In today’s world of technology, accessing healthcare is easier than ever. Telehealth or virtual therapy has decreased the barriers or challenges in accessing care. In addition it provides comfort, convenience and flexibility to the therapeutic experience. Unfortunately, it can be difficult to find a therapist in your community, with your specialization and whose fee or insurance policy is a good fit. Also, once you find a therapist there can often be a long waitlist. Virtual therapy enables you to receive services you may otherwise not be unable to obtain.<br /><br />

                            Virtual therapy is a huge step forward in wellness technology and I am extremely excited to provide this opportunity to clients near and far in the states I hold a license. It is the same high-quality mental health care but conveniently offered from the comfort of your own space increasing the flexibility of meeting as there is no planning around traffic to drive to an office. You and your therapist will login to a secure hippa compliant website to begin your therapy session. Clients can use the secure video platform right on their phone, computer, or tablet. This allows you to have therapy sessions from the comfort of your home, on your lunch break or even in your car. Therapy can fit into your busy day. The benefits to virtual therapy are endless. Please reach out if you have any questions!

                    </p>
                                </MDBCol>
                                {/* <MDBCol md='4' className='d-flex flex-column align-items-end' >
                                    <img src={tel1} alt='' className='img-fluid mb-2 ' />
                                    <img src={tel2} alt='' className='img-fluid mb-2 ' />
                                    <img src={tel3} alt='' className='img-fluid mb-2 ' />
                                    <img src={tel4} alt='' className='img-fluid ' />
                                </MDBCol> */}
                            </MDBRow>
                        </MDBMask>
                    </MDBView>
                </MDBContainer>
                <MDBContainer>
                    <MDBRow className='mt-3 text-center'>
                        <MDBCol md='6'>
                            <img src={tel1} alt='' className='img-fluid mb-2 w-75' />
                            <img src={tel3} alt='' className='img-fluid mb-2 w-75' />
                        </MDBCol>
                        <MDBCol md='6'>
                            <img src={tel2} alt='' className='img-fluid mb-2 w-75' />
                            <img src={tel4} alt='' className='img-fluid w-75' />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
            <footer style={{ marginTop: '-25px' }}>
                <Footer />
            </footer>
        </div>
    );
}

export default Telehealth;