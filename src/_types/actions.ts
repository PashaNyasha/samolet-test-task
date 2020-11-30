export type BaseActionType = () => {
  type: string;
};

export type AdvancedActionType<T> = (
  payload?: T
) => {
  type: string;
  payload?: T;
};
