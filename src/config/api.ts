export const localURL = 'http://localhost/v1/';
export const serverURL = 'http://camion.storexweb.com/v1/';

export const baseURL = serverURL;
export const mediaPath = 'https://api.clicemails.com/';
export const api = {
  /**
   * General
   */
  mediaPath: mediaPath,
  UPLOAD_PHOTO: baseURL + 'upload-photo',
  UPLOAD_FILE: baseURL + 'upload-file',
  /**
   * Users
   */

  LOGIN: baseURL + 'user/login',

  /*
  * Trucks
  */
  TRUCKS_LIST: baseURL + 'truck/list',
  /*
  * Companies
  */
  COMPANIES_LIST: baseURL + 'company/list'
};
