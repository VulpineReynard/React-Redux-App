import {
  FETCH_FOX_START,
  FETCH_FOX_SUCCESS,
  FETCH_FOX_FAILURE
} from "../Actions/foxAction";

const foxData = {
  fox: {},
  isLoading: false,
}

const foxReducer = (state = foxData, action) => {
  switch (action.type) {
    case FETCH_FOX_START:
      return {
        ...state,
        isLoading: true,
      }
    
      case FETCH_FOX_SUCCESS:
        return {
          ...state,
          isLoading: false,
          fox: action.payload
        }

    default:
      return state;
  }
}

export default foxReducer;