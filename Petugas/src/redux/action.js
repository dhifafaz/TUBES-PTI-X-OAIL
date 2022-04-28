export const GET_DATA_KATALOG = 'SET_DATA_KATALOG';

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