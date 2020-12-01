import { IAppStore } from "../_types/app-store";

type ParamsType = {
  store: IAppStore;
  name: string;
  saga: any;
};

export const injectAsyncSagas = ({store, name, saga}: ParamsType) => {
  const hasThisSaga = Boolean(
    store.asyncSagas && store.asyncSagas[name]
  );

  if (hasThisSaga) {
    return;
  }

  const {
    dispatch,
    router,
    asyncSagas,
    sagaMiddleware: {run},
  } = store;

  if (asyncSagas) {
    const newSaga = run(saga, {router, dispatch});
    asyncSagas[name] = newSaga;
  }
};
