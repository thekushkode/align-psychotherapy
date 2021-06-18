import React, { useEffect } from "react";
import { MDBRow, MDBCol, MDBContainer, MDBView, MDBMask } from "mdbreact";
import './AlignColors.css';
import Footer from "./Footer";
import Nav from "./Nav";
import sittype1 from '../assets/virtualbackground.jpg';

const Resources = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <header style={{ marginBottom: '65px' }}>
                <Nav />
            </header>
            <section>
                <MDBView >
                    <img src={sittype1} class="img-fluid" alt='' />
                    <MDBMask className="flex-center" overlay="white-strong" >
                        <MDBContainer>
                            <h2 className="h1-responsive black-text mirage font-weight-bold text-center mb-3 pt-5">
                                Additional Resources
                        </h2>
                            <hr className='hr-dark mb-4' style={{ margin: '0 200px' }} />
                            <MDBRow className='mb-3'>
                                <MDBCol md='6'>
                                    <p className="trirong-med black-text w-responsive mx-auto my-4">
                                        In today’s world of technology, accessing healthcare is easier than ever. Telehealth or virtual therapy has decreased the barriers or challenges in accessing care. In addition it provides comfort, convenience and flexibility to the therapeutic experience. Unfortunately, it can be difficult to find a therapist in your community, with your specialization and whose fee or insurance policy is a good fit. Also, once you find a therapist there can often be a long waitlist. Virtual therapy enables you to receive services you may otherwise not be unable to obtain.<br /><br />
                            Virtual therapy is a huge step forward in wellness technology and I am extremely excited to provide this opportunity to clients near and far in the states I hold a license. It is the same high-quality mental health care but conveniently offered from the comfort of your own space increasing the flexibility of meeting as there is no planning around traffic to drive to an office. You and your therapist will login to a secure hippa compliant website to begin your therapy session. Clients can use the secure video platform right on their phone, computer, or tablet. This allows you to have therapy sessions from the comfort of your home, on your lunch break or even in your car. Therapy can fit into your busy day. The benefits to virtual therapy are endless. Please reach out if you have any questions!
                    </p>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBMask>
                </MDBView>
            </section>
            <footer style={{ marginTop: '-25px' }}>
                <Footer />
            </footer>
        </div>
    );
}

export default Resources;