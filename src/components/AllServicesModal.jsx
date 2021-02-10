import React, { Component } from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBCol } from 'mdbreact';
import './AlignColors.css';

class AllServicesModal extends Component {
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
                <MDBBtn outline color='black' className='black-text' onClick={this.toggle} size='md'>View Services</MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle} size='lg'>
                    <MDBModalHeader style={{ backgroundColor: "#F1F6F7" }} toggle={this.toggle}>All Services</MDBModalHeader>
                    <MDBModalBody>
                        <div>
                            <MDBRow>
                                <MDBCol md='6'>
                                    <ul>
                                        <li>Life Transitions</li>
                                        <li>Self Esteem</li>
                                        <li>Relationship Issues</li>
                                        <li>Addiction</li>
                                        <li>Adoption</li>
                                        <li>Anger Management</li>
                                        <li>Anxiety</li>
                                        <li>Bipolar Disorder</li>
                                        <li>Borderline Personality</li>
                                        <li>Codependency</li>
                                        <li>Depression</li>
                                        <li>Dual Diagnosis</li>
                                    </ul>
                                </MDBCol>
                                <MDBCol md='6'>
                                    <ul>
                                        <li>Eating Disorders</li>
                                        <li>Grief</li>
                                        <li>Infertility</li>
                                        <li>Obsessive-Compulsive (OCD)</li>
                                        <li>Pregnancy, Prenatal, Postpartum</li>
                                        <li>Sexual Abuse</li>
                                        <li>Sleep or Isomnia</li>
                                        <li>Stress</li>
                                        <li>Substance Abuse</li>
                                        <li>Trauma & PTSD</li>
                                        <li>Traumatic Brain Injury</li>
                                        <li>Women's Issues</li>
                                    </ul>
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

export default AllServicesModal;