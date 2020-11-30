import React, {memo} from "react";
import classnames from "classnames/bind";
import styles from "./index.module.scss";
import { PagePropsType } from "../../_types/page-props-type";

const CLASS_NAME = "Main-page";
const cn = classnames.bind(styles);

export const MainPage = memo(({ router }: PagePropsType) => {
    const {store} = router.getDependencies();

    console.log(store.getState());
  return (
    <div className={cn(CLASS_NAME)}>
        Hello
    </div>
  );
});
