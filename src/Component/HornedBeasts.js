import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

class HornedBeasts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Votes : 0
    };
  }

  incrementNumber = () => {
    this.setState({
      Votes : this.state.Votes + 1
    });
  }
  render() {
    return (
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.imgUrl} onClick={this.incrementNumber} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              Votes ❤️: {this.state.Votes}
            </Card.Text>
            <p>{this.props.description}</p>
          </Card.Body>
        </Card>
      </>
    );
  }
}
export default HornedBeasts;
