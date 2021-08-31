import React from "react";
import Header from "./Component/Header";
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
        console.log(item);
        this.setState({
          show: true,
          SelectedBeast: item,
        });
      }
    });

    console.log(this.state.SelectedBeast);
  };

  render() {
    return (
      <>
        <Header />
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
