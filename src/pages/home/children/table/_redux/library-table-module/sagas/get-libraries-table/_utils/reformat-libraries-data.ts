import {
  LibrariesTableItemServerType,
  LibrariesTableItemType,
} from "../../../types";

type ParamsType = {
  data: Array<LibrariesTableItemServerType>;
};

export const reformatLibrariesTable = ({
  data,
}: ParamsType): Array<LibrariesTableItemType> =>
  data.map(({territory, order, libraries}) => ({
    territory,
    librariesCount: `Количество библиотек: ${libraries}`,
    order,
  }));
