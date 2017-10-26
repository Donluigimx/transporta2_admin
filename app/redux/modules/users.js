import {auth} from 'api/auth';

const AUTH_USER = 'AUTH_USER';
const UNAUTH_USER = 'UNAUTH_USER';

function authUser(token) {
    return {
        type: AUTH_USER,
        token,
    }
}

function unauthUser() {
    return {
        type: UNAUTH_USER,
    }
}

const initialUsersState = {
    isAuthed: false,
    authedToken: ''
};

export function fetchAndHandleAuthedUser(username, password) {
    return async dispatch => {
        try {
            const response = await auth(username, password);
            console.log(response);
            dispatch(authUser(response.id));
        } catch (error) {
            console.log(error);
        }
    }
}

export default function users (state = initialUsersState, action) {
    switch (action.type) {
        case AUTH_USER:
            return {
                ...state,
                isAuthed: true,
                authedToken: action.token,
            };
        case UNAUTH_USER:
            return {
                ...state,
                isAuthed: false,
                authedToken: '',
            };
        default:
            return state
    }
}