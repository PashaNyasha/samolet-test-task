import {RequestQueryParams} from "./_types";

export type RequestParamsType = {
  endpoint: string;
  queryParams?: RequestQueryParams;
  options?: RequestInit;
  body?: any;
};

export type RequestResultType = {
  data: any;
  hasError: boolean;
  errorText: string;
};

export const request = async ({
  endpoint,
  queryParams,
  options,
  body,
}: RequestParamsType): Promise<RequestResultType> => {
  try {
    let newEndpoint = endpoint;

    if (queryParams) {
      const params = Object.entries(queryParams).reduce(
        (
          acc: string,
          [key, value]: Array<any>,
          index: number,
          array: Array<Array<any>>
        ) => {
          const param = `${key}=${value}`;

          acc += index < array.length - 1 ? `${param}&` : param;

          return acc;
        },
        "?"
      );

      newEndpoint = `${endpoint}${params}`;
    }

    let options: RequestInit = {
      method: "GET",
    };

    if (options) {
      options = {...options, ...options};
    }

    if (body) {
      options = {...options, body};
    }

    const response = await fetch(newEndpoint, options);

    if (!response.ok || response.status !== 200) {
      throw new Error(
        `Failed to connect to ${newEndpoint} Error ${response.statusText}`
      );
    }

    const data = await response.json();

    return {
      data,
      hasError: false,
      errorText: "",
    };
  } catch (error) {
    return {
      data: {},
      hasError: true,
      errorText: error.message,
    };
  }
};
