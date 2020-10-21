import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBCol } from 'mdbreact';
import './AlignColors.css';

class InsuranceModal extends Component {
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
            <MDBContainer>
                <MDBBtn className='aligncream black-text btn-rounded mt-4' onClick={this.toggle}>Accepted Providers</MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader className='aligncream' toggle={this.toggle}>Accepted Insurance Providers</MDBModalHeader>
                    <MDBModalBody>
                        <div>
                            <h5 className='mb-5' >Align Psychotherapy Is Pleased To Accept The Following Insurance Plans:</h5>
                            <MDBRow>
                                <MDBCol md='6' className='text-left'>
                                    <ul>
                                        <li>Aetna</li>
                                        <li>Beacon</li>
                                        <li>BlueCross & BlueShield</li>
                                        <li>Cigna</li>
                                        <li>ComPsych</li>
                                    </ul>
                                </MDBCol>
                                <MDBCol md='6' className='text-left'>
                                    <ul>
                                        <li>Humana</li>
                                        <li>Magellan</li>
                                        <li>Medicare</li>
                                        <li>MulitPlan</li>
                                        <li>TRICARE</li>
                                        <li>United Healthcare</li>
                                    </ul>
                                </MDBCol>
                            </MDBRow>
                        </div>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn className='aligncream btn-rounded black-text' onClick={this.toggle}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}

export default InsuranceModal;