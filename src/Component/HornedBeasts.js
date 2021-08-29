import React from 'react';

class HornedBeasts extends React.Component {
  render() {
    return (
      <>
        <div>{this.props.className}</div>
        <div>{this.props.className}</div>
      </>
    );
  }
}
export default HornedBeasts;
