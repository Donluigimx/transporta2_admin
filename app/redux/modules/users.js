const AUTH_USER = 'AUTH_USER';
const UNAUTH_USER = 'UNAUTH_USER';

export function authUser(uid) {
    return {
        type: AUTH_USER,
        uid,
    }
}

export function unauthUser(uid) {
    return {
        type: UNAUTH_USER,
    }
}

const initialUsersState = {
    isAuthed: false,
    authedToken: ''
};

export default function users (state = initialUsersState, action) {
    switch (action.type) {
        case AUTH_USER:
            return {
                ...state,
                isAuthed: false,
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