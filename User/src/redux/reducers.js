import { GET_DATA_KATALOG, COUNTER, TOTAL_COUNTER, ADD_COUNTER, DELETE_COUNTER, IS_LOADING } from "./action";

const initialState = {
    dataKatalog: [],
    counter: [],
    totalCounter: 0,
    ip: 'http://192.168.43.140:8000',
    isloading: false,
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DATA_KATALOG:
            return { ...state, dataKatalog: action.payload };
        case COUNTER:
            return { ...state, counter: action.data };
        case TOTAL_COUNTER:
            return { ...state, totalCounter: action.data };
        case ADD_COUNTER:
            return { ...state, counter: [...state.counter, action.payload] };
        case DELETE_COUNTER:
            return { ...state, counter: state.counter.filter(todo.id !== action.payload) };
        case IS_LOADING:
            return { ...state, isloading: action.data };
        default:
            return state;
    }
}

export default userReducer;