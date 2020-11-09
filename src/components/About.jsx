import React from 'react';
import {
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBCard,
    MDBCardBody
} from 'mdbreact';
import './AlignColors.css';
import Nav from './Nav';
import Footer from './Footer';
import align4 from '../assets/photoshoot/align4.jpg';
import Financial from './Financial';

const About = () => {
    return (
        <div>
            <header style={{ marginBottom: '56px' }}>
                <Nav />
            </header>
            <section className='alignlightblue'>
                <MDBCard className="px-5 pb-5 alignlightblue">
                    <MDBCardBody>
                        <h2 className="h1-responsive font-weight-bold text-muted text-center mb-5 mt-2">
                            About the Counselor
                        </h2>
                        <p className="text-center text-muted w-responsive mx-auto mb-5">
                            Brittany Ellison is a Licensed Professional Counselor (LPC) in the State of Georgia with over 5 years of clinical experience. Brittany is a graduate of the University of San Francisco and received her masters in Counseling Psychology.
                        </p>
                        <MDBRow>
                            <MDBCol lg="4">
                                <img
                                    className="img-fluid"
                                    src={align4}
                                    alt="Brittany Ellison head shot"
                                />
                                {/* <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                    </MDBView> */}
                            </MDBCol>
                            <MDBCol lg="8">

                                <p>
                                    I have worked with individuals and couples in various settings with a wide range of behavioral and emotional concerns including anxiety, depression, trauma, relationship & family issues, grief & loss, life transitions and identity development. I believe that our well-being is greatly impacted by early childhood experiences, our culture and our relationships with ourselves and others.<br /><br />

                                        With a warm and collaborative therapeutic style, my goal is to create a safe and welcoming space where clients can feel seen and not judged, allowing for vulnerability and authentic sharing. I have an integrative approach, incorporating theoretical orientations including humanistic, psychodynamic and cognitive-behavioral modalities.<br /><br />

                                        Each client is unique, and treatment should reflect their uniqueness. We will work together to tailor treatment to clients specific needs. I deeply respect my clients and the wisdom they already have within and would count it an honor to walk with you through the journey of therapy.<br /><br />

                                        Thank you for reaching out for support!
                                    </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </section>
            <section>
                <MDBContainer>
                    <Financial />
                </MDBContainer>
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default About;