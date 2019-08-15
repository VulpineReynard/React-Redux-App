import {
  FETCH_FOX_START
} from "../Actions/foxAction";

const foxData = {
  fox: {},
  isLoading: false,
  test: ""
}

export const foxReducer = (state = foxData, action) => {
  switch (action.type) {
    case FETCH_FOX_START:
      console.log(action.payload)
    return {
      ...state,
      isLoading: true,
      test: action.payload
    }

    default:
      return state;
  }
}