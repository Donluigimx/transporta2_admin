import {createReducer} from "redux/utils";
import * as api_routes from "api/routes";

const LIST_ROUTES = 'LIST_ROUTES';
const CREATE_ROUTE = 'CREATE_ROUTE';
const CREATE_ROUTE_FINISHED = 'CREATE_ROUTE_FINISHED';

function list_routes(routes) {
    return {
        type: LIST_ROUTES,
        routes
    }
}

function create_route() {
    return {
        type: CREATE_ROUTE
    }
}

function finish_route_creation() {
    return {
        type: CREATE_ROUTE_FINISHED
    }
}

export function fetchAndRetrieveListRoutes() {
    return async (dispatch, getState) => {
        try {
            // const response = await
        } catch (error) {

        }
    }
}

export function fetchAndCreateRoute(route, origin, destination) {
    return async (dispatch, getState) => {
        try {
            dispatch(create_route());
            const response = await api_routes.createRoute(route, origin, destination, getState().users.authedToken);
            dispatch(finish_route_creation());
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
}

export default createReducer(
    {
        routesList: [],
        creatingRoute: false
    },
    {
        LIST_ROUTES: (state, action) => {
            return {
                ...state,
                routesList: action.routes
            }
        },
        CREATE_ROUTE: (state, action) => {
            return {
                ...state,
                creatingRoute: true,
            }
        },
        CREATE_ROUTE_FINISHED: (state, action) => {
            return {
                ...state,
                creatingRoute: false,
            }
        }
    }
)