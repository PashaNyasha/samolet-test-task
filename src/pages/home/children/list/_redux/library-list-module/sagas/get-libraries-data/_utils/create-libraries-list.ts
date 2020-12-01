import {LibrariesDataType, LibrariesListItemType} from "../../../types";

type ParamsType = {
  data: Array<LibrariesDataType>;
};

export const createLibrariesList = ({
  data,
}: ParamsType): Array<LibrariesListItemType> =>
  data.map(({territory, order, libraries}) => ({
    territory,
    librariesCount: `Количество библиотек: ${libraries}`,
    order,
  }));
