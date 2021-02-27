import {
  READ_CHARACTERS,
  CrudState,
  CrudActions,
} from './crudTypes';

const initialState: CrudState = {
  data: [],
};

const readReducer = (state = initialState, action: CrudActions): CrudState => {
  switch (action.type) {
    case READ_CHARACTERS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default readReducer;
