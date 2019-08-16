import axios from 'axios';
export const FETCH_FOX_START = "FETCH_FOX";
export const FETCH_FOX_SUCCESS = "FETCH_FOX_SUCCESS";
export const FETCH_FOX_FAILURE = "FETCH_FOX_FAILURE";

export const getFox = () => {
  return dispatch => {
    dispatch({ type: FETCH_FOX_START });
  axios.get('https://randomfox.ca/floof/')
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_FOX_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_FOX_FAILURE })
    })
  }
}