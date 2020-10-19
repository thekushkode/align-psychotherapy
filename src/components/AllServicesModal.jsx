import React, { Component } from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
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
                <MDBBtn className='btn-rounded black-text aligncream' onClick={this.toggle}>See All Services</MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle}>All Services</MDBModalHeader>
                    <MDBModalBody>
                        (...)
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn className='btn-rounded deep-blue-gradient' onClick={this.toggle}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </div>
        );
    }
}

export default AllServicesModal;