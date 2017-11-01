
import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import users from "redux/modules/users";
import routes from "redux/modules/routes";

export const reducer = combineReducers(
    {
        users,
        routes,
        form: formReducer
    }
);