export const GET_DATA_KATALOG = 'SET_DATA_KATALOG';
export const GET_USER_BANGET = 'GET_USER_BANGET'
export const DATA_USER = 'DATA_USER'
export const GET_DAFTAR_PEMINJAM = 'GET_DAFTAR_PEMINJAM'
export const GET_ORDER_LOG = 'GET_ORDER_LOG'
export const GET_COUNTER = 'GET_COUNTER'
export const GET_RIWAYAT = 'GET_RIWAYAT'

export const getDataKatalog = () => {
    try {
        return async dispatch => {
            const result = await fetch('http://192.168.42.216:8000/sirius_api/katalog/', {
                'method': 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const json = await result.json();
            if (json) {
                dispatch({
                    type: GET_DATA_KATALOG,
                    payload: json
                });
            } else {
                console.log('Unable to fetch!');
            }

        }
    } catch (error) {
        console.log(error);
    }
}
export const getRiwayat = () => {
    try {
        return async dispatch => {
            const result = await fetch('http://192.168.42.216:8000/sirius_api/riwayat_peminjaman/', {
                'method': 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const json = await result.json();
            if (json) {
                dispatch({
                    type: GET_RIWAYAT,
                    payload: json
                });
            } else {
                console.log('Unable to fetch!');
            }

        }
    } catch (error) {
        console.log(error);
    }
}

export const getUserBanget = (id) => {
    try {
        return async dispatch => {
            const result = await fetch('http://192.168.42.216:8000/sirius_api/lihat_users/' + id + '/', {
                'method': 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const json = await result.json();
            if (json) {
                dispatch({
                    type: GET_USER_BANGET,
                    payload: json
                });
            } else {
                console.log('Unable to fetch!');
            }

        }
    } catch (error) {
        console.log(error);
    }
}

export const getDaftarPeminjam = () => {
    try {
        return async dispatch => {
            const result = await fetch('http://192.168.42.216:8000/sirius_api/daftar_peminjam/', {
                'method': 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const json = await result.json();
            if (json) {
                dispatch({
                    type: GET_DAFTAR_PEMINJAM,
                    payload: json
                });
            } else {
                console.log('Unable to fetch!');
            }

        }
    } catch (error) {
        console.log(error);
    }
}
export const getOrderLog = (token, id) => {
    try {
        return async dispatch => {
            const result = await fetch('http://192.168.42.216:8000/sirius_api/order_log/?token=' + token + '&user=' + id, {
                'method': 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const json = await result.json();
            if (json) {
                dispatch({
                    type: GET_ORDER_LOG,
                    payload: json
                });
            } else {
                console.log('Unable to fetch!');
            }

        }
    } catch (error) {
        console.log(error);
    }
}

export const getDataUser = (token) => ({
    type: DATA_USER,
    data: token
})

export const getCaounter = (counter) => ({
    type: GET_COUNTER,
    data: counter
})