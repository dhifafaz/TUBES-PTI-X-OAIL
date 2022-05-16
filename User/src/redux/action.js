export const GET_DATA_KATALOG = 'SET_DATA_KATALOG';
export const GET_DATA_ORDER_LOG = 'GET_DATA_ORDER_LOG'
export const COUNTER = 'COUNTER';
export const TOTAL_COUNTER = 'TOTAL_COUNTER'
export const ADD_COUNTER = 'ADD_COUNTER'
export const DELETE_COUNTER = 'DELETE_COUNTER'
export const IS_LOADING = 'IS_LOADING'
export const DATA_USER = 'DATA_USER'
export const PINJAM_ALAT = 'PINJAM_ALAT'
export const GET_USER_BANGET = 'GET_USER_BANGET'


export const getDataKatalog = () => {
    try {
        return async dispatch => {
            const result = await fetch('http://192.168.42.184:8000/sirius_api/katalog/', {
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

export const getUserBanget = (id) => {
    try {
        return async dispatch => {
            const result = await fetch('http://192.168.42.184:8000/sirius_api/lihat_users/' + id + '/', {
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

export const getPinjamAlat = () => {
    try {
        return async dispatch => {
            const result = await fetch('http://192.168.42.184:8000/sirius_api/pinjam_alat/', {
                'method': 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const json = await result.json();
            if (json) {
                dispatch({
                    type: PINJAM_ALAT,
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

export const getDataOrderLog = () => {
    try {
        return async dispatch => {
            const result = await fetch('http://192.168.42.184:8000/sirius_api/order_log/', {
                'method': 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const json = await result.json();
            if (json) {
                dispatch({
                    type: GET_DATA_ORDER_LOG,
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

export const getCounter = (counter) => ({
    type: COUNTER,
    data: counter,
})
export const getTotal = (total) => ({
    type: TOTAL_COUNTER,
    data: total,
})

export const getLoading = (loading) => ({
    type: IS_LOADING,
    data: loading
})

export const getDataUser = (token) => ({
    type: DATA_USER,
    data: token
})
