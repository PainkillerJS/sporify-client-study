import makeRequest from "@packages/api/makeRequest";

export const getTracks = <T>() =>
  makeRequest<T>({ method: "get", url: "/getAll" });
