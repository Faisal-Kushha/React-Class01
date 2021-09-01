import React from "react";
import Header from "./Component/Header";
import Form from "react-bootstrap/Form";
import SelectedBeast from "./Component/SelectedBeast";
import Main from "./Component/Main";
import data from "./Component/data.json";
import Footer from "./Component/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      show: false,
      SelectedBeast: {},
    };
  }
  handleClose = () => {
    this.setState({ show: false });
  };
  selectBeast = (title) => {
    this.state.data.filter((item) => {
      if (item.title === title) {
        this.setState({
          show: true,
          SelectedBeast: item,
        });
      }
    });
  };

  numberOfHorns = (event) => {
    let newResult = parseInt(event.target.value);
    let result;
    if (newResult) {
      result = data.filter((item) => {
        if (item.horns === newResult) {
          return item;
        }
      });
    } else {
      result = data;
    }
    this.setState({
      data: result,
    });
  };

  render() {
    return (
      <>
        <Header />
        <Form>
          <Form.Group className="mb-3" controlId="form Number Of Horns">
            <Form.Label>Number Of Horns</Form.Label>
            <Form.Select
              className="me-sm-2"
              id="inlineFormCustomSelect"
              onChange={this.numberOfHorns}
            >
              <option value="">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">WoOoW</option>
            </Form.Select>
          </Form.Group>
        </Form>
        <SelectedBeast
          data={this.state.SelectedBeast}
          show={this.state.show}
          handleClose={this.handleClose}
        />
        <Main data={this.state.data} selectBeast={this.selectBeast} />
        <Footer />
      </>
    );
  }
}

export default App;
