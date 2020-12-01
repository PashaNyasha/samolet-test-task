import {combineReducers} from "redux";
import {appReducer, APP_REDUCER_NAME} from "../_reducer/app-module";

type PropsType = {
  prevState?: any;
  asyncReducers?: any;
};

export const createReducers = ({
  prevState = {},
  asyncReducers,
}: PropsType): any =>
  combineReducers({
    ...prevState,
    ...asyncReducers,
    [APP_REDUCER_NAME]: appReducer,
  });
