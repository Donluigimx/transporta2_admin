const AUTH_USER = 'AUTH_USER';
const UNAUTH_USER = 'UNAUTH_USER';

export function authUser(token) {
    return {
        type: AUTH_USER,
        token,
    }
}

export function unauthUser() {
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