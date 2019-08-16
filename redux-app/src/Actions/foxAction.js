import axios from 'axios';
export const FETCH_FOX_START = "FETCH_FOX";

export const getFox = () => dispatch => {
  console.log("action");
  axios.get('https://randomfox.ca/floof/')
    .then(res => {
      console.log(res);
      // dispatch({ payload: "it's working" })
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_FOX_START, payload: err.toString() })
    })
}