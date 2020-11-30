import React from "react";
import ReactDOM from "react-dom";
import createRouter from "router5";
import browserPluginFactory from "router5-plugin-browser";
import loggerPlugin from "router5-plugin-logger";
import {HOME_ROUTE} from "./route";
import {createAppStore} from "./_utils/create-app-store";
import {Provider} from "react-redux";
import {MainPage} from "./pages/home";

const ROOT = document.getElementById("root");

const routes = [HOME_ROUTE];

const router = createRouter(routes, {
  defaultRoute: "home",
  defaultParams: {},
  allowNotFound: false,
  caseSensitive: true,
  queryParamsMode: "loose",
});

router.usePlugin(browserPluginFactory());
router.usePlugin(loggerPlugin);

const store = createAppStore({router});

router.setDependencies({routes, store});

router.start(() => {
  ReactDOM.render(
    <Provider store={store}>
      <MainPage router={router} />
    </Provider>,
    ROOT
  );
});
