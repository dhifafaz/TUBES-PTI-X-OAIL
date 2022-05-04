import {
    GET_DATA_KATALOG,
    GET_USER_BANGET,
    DATA_USER,
    GET_DAFTAR_PEMINJAM,
    GET_ORDER_LOG
} from "./action";

const initialState = {
    dataKatalog: [],
    ip: 'http://192.168.43.140:8000',
    userBanget: [],
    data_user: [],
    daftarPeminjman: [],
    orderLog: [],
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DATA_KATALOG:
            return { ...state, dataKatalog: action.payload };
        case GET_DAFTAR_PEMINJAM:
            return { ...state, daftarPeminjman: action.payload };
        case GET_USER_BANGET:
            return { ...state, userBanget: action.payload };
        case GET_ORDER_LOG:
            return { ...state, orderLog: action.payload };
        case DATA_USER:
            return { ...state, data_user: action.data };
        default:
            return state;
    }
}

export default userReducer;