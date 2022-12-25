import globalAxios, { AxiosError } from 'axios';

import { ClientsApi } from './api/clients-api';
import { JobRequestApi } from './api/job-request-api';

export class Api {
  clients: ClientsApi = new ClientsApi();

  jobRequests: JobRequestApi = new JobRequestApi();
  constructor() {
    this.setDefaults();
  }

  private setDefaults = () => {
    globalAxios.interceptors.response.use(
      (config) => config,
      (error: AxiosError<any>) => {
        throw error;
      }
    );
  };
}

export const api = new Api();
