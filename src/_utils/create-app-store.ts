import {Router} from "router5";
import createSagaMiddleware from "redux-saga";
import {enableBatching, batchDispatchMiddleware} from "redux-batched-actions";
import {applyMiddleware, createStore, Reducer, Store} from "redux";
import {createReducers} from "./create-reducers";
import { IAppStore } from "../_types/app-store";

type ParamsType = {
  router: Router;
};


export const createAppStore = ({router}: ParamsType) => {
  const sagaMiddleware = createSagaMiddleware();
  const composeMiddlewares = [batchDispatchMiddleware, sagaMiddleware];

  const store: IAppStore = createStore(
    enableBatching(createReducers({})),
    applyMiddleware(...composeMiddlewares)
  );

  store.asyncReducers = {};
  store.asyncSagas = {};
  store.router = router;
  store.sagaMiddleware = sagaMiddleware;

  return store;
};
