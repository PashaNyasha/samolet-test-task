import React, {memo, useEffect, useMemo} from "react";
import {
  LIBRARY_INFO_PAGE_NODE,
  MAIN_PAGE_NODE,
  LIST_PAGE_NODE,
} from "./_constants/page-nodes";
import {useRoute} from "react-router5";
import {checkRoutes} from "./_utils/check-routes";

export const MainPage = memo(() => {
  const {
    route: {name},
    router,
  } = useRoute();

  const isWrongInitRoute = useMemo(
    () => name === MAIN_PAGE_NODE || name === LIBRARY_INFO_PAGE_NODE,
    [name]
  );

  useEffect(() => {
    if (isWrongInitRoute) {
      router.navigate(LIST_PAGE_NODE);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const content = useMemo(() => checkRoutes({routeName: name}), [name]);

  return <>{content}</>;
});
