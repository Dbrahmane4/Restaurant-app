/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { Control, Errors, LocalForm } from 'react-redux-form';
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'

class CommentFormComponent extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
        }
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    handleSubmit = (val) => {
    this.toggleModal();
    // console.log(this.props.dishId);
    this.props.postComment(this.props.dishId, val.rating, val.name, val.comment);   
}
  
   render(){
   
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => val && (val.length >= len);
    return (
        <div className='container'>

        <Button outline className='mr-auto' onClick={() => this.toggleModal()}><span className='fa fa-pencil'></span> Submit Comment</Button>
        <Modal isOpen={this.state.isModalOpen} toggle={() => this.toggleModal()}>
            <ModalHeader toggle={() => this.toggleModal()}>
              Submit Comment
            </ModalHeader>
            <ModalBody>
            <div className='container'>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className='form-group'>
                <Label>Rating</Label>
                <Control.select model=".rating" name='rating' className="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Control.select>
              </Row>
              <Row className='form-group'>
                <Label>Your Name</Label>
                <Control.text model=".name" id="name" name="name" placeholder='Enter Name' className="form-control"
                    validators={{
                        minLength: minLength(3), maxLength: maxLength(15)
                    }}
                />
                        <Errors
                                className='text-danger'
                                model=".name"
                                show="touched"
                                messages={{
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />
              </Row>
              <Row className='form-group'>
                <Label>Comment</Label>
                <Control.textarea model=".comment" id='comment' name="comment" rows="6" className="form-control"/>
              </Row>
              <Row className='form-group'>
                        <Col >
                            <Button type='submit' color='primary'>Submit</Button>
                        </Col>
                    </Row>
              </LocalForm>
            </div>
 
            </ModalBody>
          </Modal>
        </div>
        
        
        
      )
   }
  
}

export default CommentFormComponent