import { GET_DATA_KATALOG } from "./action";

const initialState = {
    dataKatalog: [],
    ip: 'http://192.168.43.140:8000',
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DATA_KATALOG:
            return { ...state, dataKatalog: action.payload };
        default:
            return state;
    }
}

export default userReducer;