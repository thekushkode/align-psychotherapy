import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBBtn,
} from 'mdbreact';
import './AlignColors.css';
import Nav from './Nav';
import Footer from './Footer';
import headshot from '../assets/photoshoot/align11.jpg';
import rocks from '../assets/align-pics/rocks.jpg';
import cups from '../assets/align-pics/cups.jpg';
import altlogo from '../assets/altlogo.jpg';
import quote from '../assets/quote.jpg';

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <header style={{ marginBottom: '66px' }}>
                <Nav />
            </header>
            <section>
                <MDBCard className="pb-5 alignlightgrey">
                    <MDBCardBody>
                        <h2 className="h1-responsive font-weight-bold black-text mirage text-center mb-3 mt-2">
                            About the Counselor
                        </h2>
                        <hr className='hr-dark mb-5' style={{ margin: '0 300px' }} />
                        <MDBRow>
                            <MDBCol lg="4">
                                <img
                                    className="img-fluid rounded"
                                    src={headshot}
                                    alt="Brittany Ellison head shot"
                                />

                            </MDBCol>
                            <MDBCol lg="6" className='mt-3 px-5 align-self-center'>
                                <p className='spacing trirong-med'>
                                    I am a Licensed Professional Counselor in the state of Georgia. I received my masters in counseling psychology from the University of San Francisco. I offer a warm and collaborative therapeutic style focused on creating a safe and welcoming space where clients can feel seen and not judged, allowing for vulnerability and authentic sharing. I have an integrative approach, incorporating theoretical orientations including humanistic, psychodynamic and cognitive-behavioral modalities.
                                </p>
                                <p className='spacing trirong-med'>
                                    I believe each client is unique, and treatment should reflect their uniqueness. We will work together to tailor treatment to your specific needs. I deeply respect my clients and their innate wisdom and would count it an honor to walk with you through the journey of therapy. Thank you for reaching out for support.
                                </p>
                                <Link to='/contact'>
                                    <MDBBtn outline rounded color='grey lighten-5' size="lg">Schedule Consultation</MDBBtn>
                                </Link>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </section>
            <section className='text-center' >
                <img src={altlogo} alt='Alternate logo for Align' className='img-fluid w-50 py-4' />
            </section>
            <section>
                <MDBCard className="px-1 pb-5">
                    <MDBCardBody>
                        <h2 className="h1-responsive font-weight-bold black-text mirage text-center mb-4 mt-2">
                            Approach
                        </h2>
                        <hr className='hr-dark mb-5' style={{ margin: '0 400px' }} />
                        <MDBRow>
                            <MDBCol lg="3">
                                <img
                                    className="img-fluid rounded"
                                    src={cups}
                                    alt="Brittany Ellison head shot"
                                    style={{ marginTop: '100px' }}
                                />

                            </MDBCol>
                            <MDBCol lg="6">
                                <p className='px-5 spacing trirong-thin'>
                                    I believe healing and wholeness takes a holistic and integrative approach--aligning mind, body & soul. Doing the work of therapy can be challenging as we lean into the messy parts of ourselves but understanding our blocks, trauma, and suffering is a great act of self love. Beginning the process of therapy is courageous, it is a commitment to yourself and your growth & healing. It will not always be easy but you will not be alone. We will work together to navigate this journey.
                                    <br/><br/>
                                    I believe in therapy and am honored to join clients in this work. I specialize in life transitions, body image, perfectionism, relationships, self-empowerment, motivation, self-worth, anxiety/overwhelm/burnout, depression/loss/grief, emotional regulation, coping skills, identity development and boundaries.

                                </p>
                            </MDBCol>
                            <MDBCol lg="3">
                                <img
                                    className="img-fluid rounded"
                                    src={rocks}
                                    alt="Brittany Ellison head shot"
                                    style={{ marginTop: '-70px' }}
                                />
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </section>
            <section className='text-center' style={{ backgroundColor: 'rgb(235, 231, 225)' }}>
                <img src={quote} alt='Alternate logo for Align' className='img-fluid w-50 py-4' />
            </section>
            <footer style={{ marginTop: '-25px' }}>
                <Footer />
            </footer>
        </div>
    );
}

export default About;