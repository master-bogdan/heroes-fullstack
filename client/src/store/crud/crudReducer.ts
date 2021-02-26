import {
  READ_CHARACTERS,
  CREATE_CHARACTER,
  UPDATE_CHARACTER,
  DELETE_CHARACTER,
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
    case CREATE_CHARACTER:
      return {
        ...state,
        data: action.payload,
      };
    // case UPDATE_CHARACTER:
    //   return {
    //     ...state,
    //     data: state.data.map((item: any) => ((item.id === action.payload.id)
    //       ? action.payload.values : item)),
    //   };
    // case DELETE_CHARACTER:
    //   return {
    //     ...state,
    //     data: state.data.filter((data: any) => data.id !== action.payload),
    //   };
    default:
      return state;
  }
};

export default readReducer;
