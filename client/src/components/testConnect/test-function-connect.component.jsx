import React from 'react';
import { connect } from 'react-redux';

const TestFunctionComponentConnect = (props) => {
  console.log(props);
  return <div></div>;
};

export default connect()(TestFunctionComponentConnect);
