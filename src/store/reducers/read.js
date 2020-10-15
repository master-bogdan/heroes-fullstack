import { READ_CHARACTERS, UPDATE_CHARACTER, CREATE_CHARACTER, DELETE_CHARACTER } from '../actions/actionTypes';

const initialState = {
    data: []
};

 const readReducer = (state = initialState, action) => {
    switch(action.type) {
        case READ_CHARACTERS:
            return {
                ...state,
                data: action.payload
            };
        case CREATE_CHARACTER:
            return {
                ...state
            };
        case UPDATE_CHARACTER:
            return {
                ...state,
                data: state.data.map((item) => 
                    (item.id === action.payload.id) ? action.payload.values : item
                )
            };
        case DELETE_CHARACTER:
            return {
                ...state,
                data: state.data.filter(data => data.id !== action.payload)
            };
        default:
            return state;
    }
};



export default readReducer;