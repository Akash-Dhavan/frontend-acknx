import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/Modal.css';

function MyModal({ show, handleClose, onSubmit, position }) {
  const [formData, setFormData] = useState({
    heading: '',
    label: '',
    data: '',
    backgroundColor: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    handleClose();
  };

  return (
    <div className={`modal-custom ${show ? 'modal-show' : ''}`}>
      <Modal 
        show={show} 
        onHide={handleClose} 
        dialogClassName="modal-dialog-custom"
        contentClassName="custom-modal-content"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Widget Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formHeading">
              <Form.Label>Heading</Form.Label>
              <Form.Control
                type="text"
                name="heading"
                value={formData.heading}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formLabel">
              <Form.Label>Label</Form.Label>
              <Form.Control
                type="text"
                name="label"
                value={formData.label}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formData">
              <Form.Label>Data</Form.Label>
              <Form.Control
                type="text"
                name="data"
                value={formData.data}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBackgroundColor">
              <Form.Label>Background Color</Form.Label>
              <Form.Control
                type="text"
                name="backgroundColor"
                value={formData.backgroundColor}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MyModal;
