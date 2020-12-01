import React, {memo} from "react";
import classnames from "classnames/bind";
import styles from "./index.module.scss";

const CLASS_NAME = "Crashed-app";
const cn = classnames.bind(styles);

export const CrashedApp = memo(() => (
  <div className={cn(CLASS_NAME)}>
    <h1 className={cn(`${CLASS_NAME}__title-text`)}>Приложение сломалось :(</h1>
  </div>
));
