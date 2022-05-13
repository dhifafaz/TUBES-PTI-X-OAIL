import {
    GET_DATA_KATALOG,
    COUNTER, TOTAL_COUNTER,
    ADD_COUNTER,
    DELETE_COUNTER,
    IS_LOADING,
    DATA_USER,
    GET_DATA_ORDER_LOG,
    PINJAM_ALAT,
    GET_USER_BANGET,
} from "./action";

const initialState = {
    dataKatalog: [],
    dataOrderLog: [],
    counter: [],
    totalCounter: 0,
    ip: 'http://192.168.42.219:8000',
    isloading: false,
    data_user: [],
    pinjamAlat: [],
    userBanget: [],
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DATA_KATALOG:
            return { ...state, dataKatalog: action.payload };
        case GET_USER_BANGET:
            return { ...state, userBanget: action.payload };
        case GET_DATA_ORDER_LOG:
            return { ...state, dataOrderLog: action.payload };
        case PINJAM_ALAT:
            return { ...state, pinjamAlat: action.payload }
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
        case DATA_USER:
            return { ...state, data_user: action.data };
        default:
            return state;
    }
}

export default userReducer;