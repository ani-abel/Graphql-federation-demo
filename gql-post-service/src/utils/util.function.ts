import axios, { AxiosResponse } from 'axios';

export const httpPost = async <U, T>(
  url: string,
  payload: T,
  headers = {},
): Promise<U> => {
  try {
    const response: AxiosResponse = await axios.post(url, payload, { headers });
    return response.data as U;
  } catch (error) {
    throw error;
  }
};
