export const localURL = 'http://localhost:3000/v1/';
export const serverURL = 'http://camion.storexweb.com/v1/';

export const baseURL = serverURL;
export const mediaPath = 'http://camion.storexweb.com/';
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
  APPROVE: baseURL + 'user/changeApproved',
  DELETE: baseURL + 'user/changeDeleted',
  SEND_RESET_PASSWORD_EMAIL: baseURL + 'user/emailPasswordToken',
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
