import React, { useEffect } from "react";
import { MDBRow, MDBCol, MDBContainer, MDBView, MDBMask } from "mdbreact";
import './AlignColors.css';
import Footer from "./Footer";
import Nav from "./Nav";
import shadows from '../assets/shadows.jpg';
import vases from '../assets/vases.jpg';

const Resources = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <header style={{ marginBottom: '65px' }}>
                <Nav />
            </header>
            <section >
                <MDBView >
                    <img src={shadows}  class="" alt='' style={{ height: '160vh', width: '100%' }} />
                    <MDBMask className="flex-center" overlay="white-strong" >
                        <MDBContainer>
                            <h2 className="h1-responsive black-text mirage font-weight-bold text-center pt-5">
                                Additional Resources
                            </h2>
                            <hr className='hr-dark peekaboo1' style={{ margin: '50px 200px' }} />
                            <MDBRow className='mb-3'>
                                <MDBCol md='6' className=''>
                                    <h4><i>Telephone Prevention and Access:</i></h4>
                                    <p className="trirong-med black-text w-responsive mx-auto mt-4">
                                        National Suicide Prevention Line: <a href='tel:18002738255'>1-800-273-8255</a>
                                    </p>
                                    <p className="trirong-med black-text w-responsive mx-auto mb-4" >
                                        Georgia Crisis and Access Line: <a href='tel:18007154225'>1-800-715-4225</a>
                                    </p>
                                    <h4><i>Web Resources:</i></h4>
                                    <p className="trirong-med black-text w-responsive mx-auto mt-4">
                                        <a href='tel:18002738255'>National Alliance on Mental Illness</a>
                                    </p>
                                    <p className="trirong-med black-text w-responsive mx-auto">
                                        <a href='tel:18007154225'>Suicide Prevention Lifeline</a>
                                    </p>
                                    <p className="trirong-med black-text w-responsive mx-auto">
                                        <a href='tel:18002738255'>Georgia Crisis and Access Line</a>
                                    </p>
                                    <p className="trirong-med black-text w-responsive mx-auto">
                                        <a href='tel:18007154225'>Florida NAMI</a>
                                    </p>
                                    <p className="trirong-med black-text w-responsive mx-auto">
                                        <a href='tel:18002738255'>Georgia Department of Health</a>
                                    </p>
                                    <p className="trirong-med black-text w-responsive mx-auto mb-4">
                                        <a href='tel:18007154225'>Florida Department of Health</a>
                                    </p>
                                    <h4><i>Reading Materials:</i></h4>
                                    <p className="trirong-med black-text w-responsive mx-auto mt-4">
                                        <a href='https://www.amazon.com/Gifts-Imperfection-Think-Supposed-Embrace/dp/159285849X' target='_blank' rel="noopener noreferrer">The Gifts of Imperfection</a>
                                    </p>
                                    <p className="trirong-med black-text w-responsive mx-auto">
                                        <a href='https://www.amazon.com/Body-Keeps-Score-Healing-Trauma/dp/0143127748/ref=sr_1_4?dchild=1&keywords=the+body+keeps+the+score+by+bessel+vanderkolk&qid=1624982181&s=books&sr=1-4' target='_blank' rel="noopener noreferrer">The Body Keeps Score</a>
                                    </p>
                                    <p className="trirong-med black-text w-responsive mx-auto">
                                        <a href='https://www.amazon.com/How-Do-Work-Recognize-Patterns/dp/006301209X/ref=sr_1_1?dchild=1&keywords=How+to+Do+the+Work+by+Dr.+Nicole+LePera&qid=1624982273&s=books&sr=1-1' target='_blank' rel="noopener noreferrer">How to Do the Work</a>
                                    </p>
                                    <p className="trirong-med black-text w-responsive mx-auto mb-4">
                                        <a href='https://www.amazon.com/Present-Over-Perfect-Leaving-Frantic/dp/0310342996/ref=asc_df_0310342996/?tag=hyprod-20&linkCode=df0&hvadid=241995309321&hvpos=&hvnetw=g&hvrand=14386821225478294937&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9010798&hvtargid=pla-452898753524&psc=1' target='_blank' rel="noopener noreferrer">Present Over Perfect</a>
                                    </p>
                                </MDBCol>
                                <MDBCol md='6' className='d-flex flex-center'>
                                    <img src={vases} alt='vases' className='img-fluid w-75' />
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