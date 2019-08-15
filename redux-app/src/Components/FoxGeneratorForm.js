import React from 'react';
import { connect } from 'react-redux';
import { getFox } from '../Actions/foxAction';

const FoxGeneratorForm = (props) => {
  return (
    <form className="fox-form">
      <button onClick={(event) => {event.preventDefault(); props.getFox()}}>
        Generate Me A Fox
      </button>
    </form>
  );
}

const mapStateToProps = state => ({
  fox: state.fox,
  test: state.test
})

export default connect(
  mapStateToProps,
  { getFox }
)(FoxGeneratorForm);