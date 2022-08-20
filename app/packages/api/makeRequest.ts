import axios, { Axios } from "axios";

export interface OptionsRequest {
  method: keyof Pick<Axios, "get">;
  url: string;
}

const api = axios.create({
  baseURL: "http://localhost:5000"
});

export default async <T>({
  method,
  url
}: OptionsRequest): Promise<{ data: T }> => {
  return api[method](url);
};
