import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOG,
    DELETE_LOG,
    UPDATE_LOG,
    SET_CURRENT,
    CLEAR_CURRENT,
    SEARCH_LOGS
} from './types';

//Get logs from server
export const getLogs = () => async (dispatch) => {
    try {
        console.log("Request here")

        setLoading();
        const res = await fetch('/logs');
        const data = await res.json();
        dispatch({
            type: GET_LOGS,
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


//add logs
export const addLogs = (log) => async (dispatch) => {
    try {
        setLoading();
        const listResponse = await fetch('/logs');
        const listData = await listResponse.json();
        if (listData && listData.length) {
            log.id = listData.length + 1
        }
        else {
            log.id = 1
        }
        const request = {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                "Content-Type": "application/json"
            }
        }
        const res = await fetch('/logs', request);
        const data = await res.json();
        dispatch({
            type: ADD_LOG,
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
export const deleteLog = (id) => async (dispatch) => {
    try {
        setLoading();
        const res = await fetch(`/logs/${id}`, {
            method: 'DELETE'
        });
        const data = await res.json();
        dispatch({
            type: DELETE_LOG,
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

//update log
export const updateLog = (log) => async (dispatch) => {
    try {
        setLoading();
        const request = {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                "Content-Type": "application/json"
            }
        }
        const res = await fetch(`/logs/${log.id}`, request);
        const data = await res.json();
        console.log(data)
        dispatch({
            type: UPDATE_LOG,
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

//Search Text
export const searchLogs = (text) => async (dispatch) => {
    try {
        setLoading();
        const res = await fetch(`/logs/?q=${text}`);
        const data = await res.json();
        console.log("search data",data)
        dispatch({
            type: SEARCH_LOGS,
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


// Set current log
export const setCurrent = log => {
    return {
        type: SET_CURRENT,
        payload: log
    };
};


// Clear current log
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT
    };
};

//Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}