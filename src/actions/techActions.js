 import {
GET_TECHS,
ADD_TECH,
DELETE_TECH,
SET_LOADING,
TECHS_ERROR,
LOGS_ERROR
 } from './types'

 //Get techs from server
export const getTechs = () => async (dispatch) => {
    try {
        setLoading();
        const res = await fetch('/techs');
        const data = await res.json();
        dispatch({
            type: GET_TECHS,
            payload: data
        });
    }
    catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        });
    }
}

//add tech
export const addTech = (tech) => async (dispatch) => {
    try {
        setLoading();
        const listResponse = await fetch('/techs');
        const listData = await listResponse.json();
        if (listData && listData.length) {
            tech.id = listData.length + 1
        }
        else {
            tech.id = 1
        }
        const request = {
            method: 'POST',
            body: JSON.stringify(tech),
            headers: {
                "Content-Type": "application/json"
            }
        }
        const res = await fetch('/techs', request);
        const data = await res.json();
        dispatch({
            type: ADD_TECH,
            payload: data
        });
    }
    catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        });
    }
}

//delete log
export const deleteTech = (id) => async (dispatch) => {
    try {
        setLoading();
        console.log(id)
        const res = await fetch(`/techs/${id}`, {
            method: 'DELETE'
        });
        const data = await res.json();
        dispatch({
            type: DELETE_TECH,
            payload: data
        });
    }
    catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        });
    }
}



//Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}