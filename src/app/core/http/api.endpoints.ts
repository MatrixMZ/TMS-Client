import { environment } from './../../../environments/environment';

export const apiEndpoints = {
  auth: {
    login: `${environment.api}/auth/login`,
    register: `${environment.api}/auth/register`
  }
};
