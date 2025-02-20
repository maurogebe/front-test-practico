import BaseService from './BaseService';
import { AxiosResponse } from 'axios';

interface FetchDataParams {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete';
  params?: {
    q: string
  };
}

const ApiService = {
  fetchData(param: FetchDataParams): Promise<AxiosResponse<any>> {
    return new Promise((resolve, reject) => {
      BaseService({
        url: param.url,
        method: param.method,
        params: param.params,
      })
        .then((response: AxiosResponse<any>) => {
          resolve(response);
        })
        .catch((errors) => {
          reject(errors);
        });
    });
  },
};

export default ApiService;
