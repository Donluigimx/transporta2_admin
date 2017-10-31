import {auth, unauth} from 'api/auth';
import {createReducer} from "redux/utils";

const AUTH_USER = 'AUTH_USER';
const UNAUTH_USER = 'UNAUTH_USER';

function authUser(token, userId) {
    return {
        type: AUTH_USER,
        token,
        userId,
    }
}

function unauthUser() {
    return {
        type: UNAUTH_USER,
    }
}

export function fetchAndHandleAuthedUser(username, password) {
    return async dispatch => {
        try {
            const response = await auth(username, password);
            if (response.statusCode === 401) {
                return
            }
            dispatch(authUser(response.id, response.userId));
            localStorage.setItem('transporta_auth', JSON.stringify({
                authedToken: response.id,
                userId: response.userId
            }))
        } catch (error) {
            console.log(error);
        }
    }
}

export function getAuthToken() {
    return dispatch => {
        const data = JSON.parse(localStorage.getItem('transporta_auth'));
        if (data) {
            dispatch(authUser(data.authedToken, data.userId));
        }
    }
}

export function HandleUnAuthUser() {
    return async (dispatch, getState) => {
        const response = await unauth(getState().authedToken);
        if (response.status === 401) {
            return;
        }
        localStorage.removeItem('transporta_auth');
        dispatch(unauthUser());
    }
}

export default createReducer(
    {
        isAuthed: false,
        authedToken: '',
        userId: '',
    },
    {
        AUTH_USER: (state, action) => {
            return {
                ...state,
                isAuthed: true,
                authedToken: action.token,
                userId: action.userId,
            }
        },
        UNAUTH_USER: (state, action) => {
            return {
                ...state,
                isAuthed: false,
                authedToken: '',
                userId: '',
            }
        }
    }
)
