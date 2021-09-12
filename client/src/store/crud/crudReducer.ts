import {
  CRUD_CHARACTERS_FETCH,
  CRUD_LOADING,
  CRUD_CHARACTER_CREATE,
  CRUD_CHARACTER_UPDATE,
  CRUD_CHARACTER_DELETE,
  CrudState,
  CrudActions,
} from './crudTypes';

const initialState: CrudState = {
  characters: [],
  isLoading: false,
};

const readReducer = (state = initialState, action: CrudActions): CrudState => {
  switch (action.type) {
    case CRUD_CHARACTERS_FETCH:
      return {
        ...state,
        characters: action.payload,
      };
    case CRUD_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default readReducer;
