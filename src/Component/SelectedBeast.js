import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class SelectedBeast extends React.Component {
  handleClose = () => {
    this.props.handleClose();
  };
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.data.title}</Modal.Title>
          </Modal.Header>
          <Card.Img
            style={{ width: "300px" }}
            variant="top"
            alt={this.props.data.title}
            src={this.props.data.image_url}
          />

          <Modal.Body>{this.props.data.description}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            {/* <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button> */}
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;
