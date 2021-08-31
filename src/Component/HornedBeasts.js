import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
// import Button from 'react-bootstrap/Button';

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Votes: 0,
    };
  }
  selectBeast = () => {
    this.props.selectBeast(this.props.title);
  };

  incrementNumber = () => {
    this.setState({
      Votes: this.state.Votes + 1,
    });
  };
  render() {
    return (
      <>
        <Col>
          <Card style={{ width: "18rem" }} onClick={this.selectBeast}>
            <Card.Img
              variant="top"
              src={this.props.imgUrl}
              onClick={this.incrementNumber}
            />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
                {this.props.description}
                Votes ❤️: {this.state.Votes}
              </Card.Text>

              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}
export default HornedBeasts;
