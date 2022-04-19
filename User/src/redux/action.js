export const GET_DATA_KATALOG = 'SET_DATA_KATALOG';
export const COUNTER = 'COUNTER';
export const TOTAL_COUNTER = 'TOTAL_COUNTER'
export const ADD_COUNTER = 'ADD_COUNTER'
export const DELETE_COUNTER = 'DELETE_COUNTER'

export const getDataKatalog = () => {
    try {
        return async dispatch => {
            const result = await fetch('http://192.168.43.140:8000/sirius_api/katalog/', {
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

export const getCounter = (counter) => ({
    type: COUNTER,
    data: counter,
})
export const getTotal = (total) => ({
    type: TOTAL_COUNTER,
    data: total,
})
