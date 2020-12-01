import React, {memo, useCallback} from "react";
import classnames from "classnames/bind";
import styles from "./index.module.scss";
import {List} from "antd";
import {LibrariesListItemType} from "../../../_redux/library-list-module";

const CLASS_NAME = "Libraries-table";
const cn = classnames.bind(styles);

type PropsType = {
  onChangeRoute: (order: number) => void;
} & LibrariesListItemType;

export const LibrariesListItem = memo(
  ({territory, librariesCount, order, onChangeRoute}: PropsType) => {
    const handleClick = useCallback(
      () => onChangeRoute(order),
      [onChangeRoute, order]
    );

    return (
      <button onClick={handleClick} type="button" className={cn(CLASS_NAME)}>
        <List.Item.Meta title={territory} description={librariesCount} />
      </button>
    );
  }
);
