import { Reducer, Store } from "redux";
import { Router } from "router5";

type AsyncReduxReducers = {
  [name: string]: Reducer;
};

export interface IAppStore extends Store {
  asyncReducers?: AsyncReduxReducers;
  asyncSagas?: AsyncReduxReducers;
  router?: Router;
  sagaMiddleware?: any;
}
