
import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import users from "redux/modules/users";
import routes from "redux/modules/routes";
import busStops from "redux/modules/bus_stops";

export const reducer = combineReducers(
    {
        users,
        routes,
        busStops,
        form: formReducer
    }
);