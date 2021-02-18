import React, { Component } from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBCol } from 'mdbreact';
import './AlignColors.css';

class Pricing extends Component {
    state = {
        modal: false
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <MDBBtn outline color='black' className='black-text' onClick={this.toggle} size='md'>Pricing</MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle} size='lg'>
                    <MDBModalHeader style={{ backgroundColor: "#F1F6F7" }} toggle={this.toggle}>Align Pricing</MDBModalHeader>
                    <MDBModalBody>
                        <div>
                            <MDBRow>
                                <MDBCol md='12'>
                                    <h2 className='' >
                                        Session cost for one hour (50 minute therapy hour) is $130. I also accept the following insurances: Cigna, BCBS, and Aetna. I believe the client/therapist relationship is an extremely important part of the therapy process therefore I o er a free 15 minute phone consultation to help you determine if I am the right fit. Please don't hesitate to reach out!
                                    </h2>
                                </MDBCol>
                            </MDBRow>
                        </div>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn className='btn-rounded black-text navcolor' onClick={this.toggle}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </div>
        );
    }
}

export default Pricing;