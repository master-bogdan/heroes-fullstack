import {
  READ_CHARACTERS,
  LOADING_CHARACTERS,
  CrudState,
  CrudActions,
} from './crudTypes';

const initialState: CrudState = {
  data: [],
  isLoading: false,
};

const readReducer = (state = initialState, action: CrudActions): CrudState => {
  switch (action.type) {
    case READ_CHARACTERS:
      return {
        ...state,
        data: action.payload,
      };
    case LOADING_CHARACTERS:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default readReducer;
