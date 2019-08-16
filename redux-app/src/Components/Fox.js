import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

const Fox = (props) => {
  return (
    <div className="fox-container">
      {props.isLoading ? (
        <Loader 
          type="BallTriangle"
         color="#9c00ea"
         height="200"
         width="200"
         className="loader"
        />
      ) : (
        <img src={props.fox.image}/>
      )}
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