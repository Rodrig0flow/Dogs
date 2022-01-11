import axios from 'axios';

export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS'

export function getTemperaments(){
    return async function (dispatch) {
        let json = await axios.get('http://localhost:3001/temperament', {});
        return dispatch({
            type: GET_TEMPERAMENTS,
            payload: json.data,
        })
    }
}