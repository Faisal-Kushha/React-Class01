import React from "react";
import HornedBeasts from "./HornedBeasts";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";

class Main extends React.Component {
  render() {
    return (
      <>
        <Row xs={1} md={3} className="g-4">
          {this.props.data.map((item) => {
            return (
              <HornedBeasts
                title={item.title}
                imgUrl={item.image_url}
                description={item.description}
                selectBeast={this.props.selectBeast}
              />
            );
          })}
        </Row>
        ;
      </>
    );
  }
}
export default Main;
