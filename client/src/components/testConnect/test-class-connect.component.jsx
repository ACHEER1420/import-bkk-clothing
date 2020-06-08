import React from 'react';
import {connect} from 'react-redux';

class TestClassComponentConnect extends React.Component {
  componentDidMount() {
      console.log(this.pros);
  }

  render() {
    return <div></div>;
  }
}

export default connect()(TestClassComponentConnect);
