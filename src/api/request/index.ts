import {RequestQueryParams} from "./_types";

type RequestParamsType = {
  endpoint: string;
  queryParams?: RequestQueryParams;
  requestParams?: RequestInit;
  body?: any;
};

export const request = async ({
  endpoint,
  queryParams,
  requestParams,
  body,
}: RequestParamsType): Promise<any> => {
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

    if (requestParams) {
      options = {...options, ...requestParams};
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

    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
