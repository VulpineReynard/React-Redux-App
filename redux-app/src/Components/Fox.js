import React from 'react';
import { connect } from 'react-redux';

const Fox = (props) => {
  return (
    <div className="fox-container">
      <p>{props.test}</p>
    </div>
  );
}
const mapPropsToState = state => ({
  fox: state.fox,
  isLoading: state.isLoading,
  test: state.test
})

export default connect(
  mapPropsToState,
  {  }
)(Fox) 