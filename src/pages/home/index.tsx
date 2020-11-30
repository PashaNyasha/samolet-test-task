import React, {memo, useEffect, useMemo} from "react";
import {MAIN_PAGE_NODE, TABLE_PAGE_NODE} from "./_constants/page-nodes";
import {useRoute} from "react-router5";
import {checkRoutes} from "./_utils/check-routes";

export const MainPage = memo(() => {
  const {
    route: {name},
    router,
  } = useRoute();

  const isMainPage = useMemo(() => name === MAIN_PAGE_NODE, [name]);

  useEffect(() => {
    if (isMainPage) {
      router.navigate(TABLE_PAGE_NODE);
    }
  });

  const content = useMemo(() => checkRoutes({routeName: name}), [name]);

  return <>{content}</>;
});
