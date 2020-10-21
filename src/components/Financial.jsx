import React from "react";
import { MDBRow, MDBCol, MDBIcon, MDBBtn } from "mdbreact";
import InsuranceModal from "./InsuranceModal";

const Financial = () => {
    return (
        <section className="text-center my-5">
            <h2 className="h1-responsive font-weight-bold my-5">
                Financial Information
            </h2>
            <p className="lead grey-text w-responsive mx-auto mb-5">
                We want to make getting treatment as easy for you as possible. For this reason, I offer sessions in-person, over the phone, as well as video sessions.
            </p>
            <MDBRow>
                <MDBCol md="6">
                    <div className="d-flex justify-content-center">
                        <h5 className="font-weight-bold my-4">Session Costs</h5>
                        <MDBIcon icon="comments-dollar" size="3x" className="alignbrowntext ml-3 mt-2" />

                    </div>
                    <p className="grey-text mb-md-0 mb-5">
                        Session costs start at $130. Rates can fluctuate based on the treatment involved. Please get in touch to discuss costs in greater detail or to schedule an appointment.
                    </p>
                    <MDBBtn className='aligncream btn-rounded black-text mt-4'>Get In Touch</MDBBtn>
                </MDBCol>
                <MDBCol md="6">
                    <div className="d-flex justify-content-center">
                        <h5 className="font-weight-bold my-4">Insurance Plans</h5>
                        <MDBIcon icon="book" size="3x" className="alignbrowntext ml-3 mt-2" />

                    </div>
                    <p className="grey-text mb-md-0 mb-5">
                        Align Psychotherapy is pleased to accept coverage from a wide range of insurance providers. Click the button below to the see the plans we currently accept!
                    </p>
                    <InsuranceModal />
                </MDBCol>
            </MDBRow>
        </section>
    );
}

export default Financial;