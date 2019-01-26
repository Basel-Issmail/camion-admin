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
  /**
   * Roles End Points
   */
  ROLES: baseURL + 'uac/roles/index',
  ROLES_ADD: baseURL + 'uac/roles/add',
  ROLES_PAGINATE: baseURL + 'uac/roles/paginate',
  ROLES_UPDATE: baseURL + 'uac/roles/update',
  ROLES_DELETE: baseURL + 'uac/roles/delete',
  ROLES_RESTORE: baseURL + 'uac/roles/restore',
  ROLES_PERMANENTLY_DELETE: baseURL + 'uac/roles/destroy',
  ROLES_DRAFT_DELETE: baseURL + 'uac/roles/delete-draft',
  ROLES_DRAFT_ADD: baseURL + 'uac/roles/add-draft',
  ROLES_DRAFT_UPDATE: baseURL + 'uac/roles/update-draft',
  ROLES_CHANGE_PASSWORD: baseURL + 'uac/roles/change-password',
  ROLES_UPLOAD: baseURL + 'uac/roles/upload',
  ROLES_CHANGE_ATTRIBUTE: baseURL + 'uac/roles/change-attributes',
  ROLES_GET: baseURL + 'uac/roles/get',
  /**
   * Members End Points
   */
  MEMBERS: baseURL + 'members/index',
  MEMBERS_GET: baseURL + 'members/get',
  MEMBERS_BUILDER: baseURL + 'members/builder',
  MEMBERS_ADD: baseURL + 'members/add',
  MEMBERS_PAGINATE: baseURL + 'members/paginate',
  MEMBERS_UPDATE: baseURL + 'members/update',
  MEMBERS_DELETE: baseURL + 'members/delete',
  MEMBERS_RESTORE: baseURL + 'members/restore',
  MEMBERS_PERMANENTLY_DELETE: baseURL + 'members/destroy',
  MEMBERS_DRAFT_DELETE: baseURL + 'members/delete-draft',
  MEMBERS_DRAFT_ADD: baseURL + 'members/add-draft',
  MEMBERS_CHANGE_PASSWORD: baseURL + 'members/change-password',
  MEMBERS_UPLOAD: baseURL + 'members/upload',
  MEMBERS_CHANGE_ATTRIBUTE: baseURL + 'members/change-attributes',
  MEMBERS_DRAFT_UPDATE: baseURL + 'members/update-draft',

  /**
   * Phones End Points
   */
  PHONES: baseURL + 'members/phones/index',
  PHONES_ADD: baseURL + 'members/phones/add',
  PHONES_UPDATE: baseURL + 'members/phones/update',
  PHONES_DELETE: baseURL + 'members/phones/delete',
  /**
   * Address End Points
   */
  ADDRESSES: baseURL + 'members/addresses/index',
  ADDRESSES_ADD: baseURL + 'members/addresses/add',
  ADDRESSES_UPDATE: baseURL + 'members/addresses/update',
  ADDRESSES_DELETE: baseURL + 'members/addresses/delete',
  ADDRESSES_CITIES: baseURL + 'get-regions',
  LOCATION_INFO: baseURL + 'get-location-info',
  /**
   * Spouses End Points
   */
  SPOUSES: baseURL + 'members/spouses/index',
  SPOUSES_ADD: baseURL + 'members/spouses/add',
  SPOUSES_UPDATE: baseURL + 'members/spouses/update',
  SPOUSES_DELETE: baseURL + 'members/spouses/delete',

  /**
   * Pages End Points
   */
  PAGES: baseURL + 'pages/index',
  PAGES_GET: baseURL + 'pages/get',
  PAGES_BUILDER: baseURL + 'pages/builder',
  PAGES_ADD: baseURL + 'pages/add',
  PAGES_PAGINATE: baseURL + 'pages/paginate',
  PAGES_UPDATE: baseURL + 'pages/update',
  PAGES_DELETE: baseURL + 'pages/delete',
  PAGES_RESTORE: baseURL + 'pages/restore',
  PAGES_PERMANENTLY_DELETE: baseURL + 'pages/destroy',
  PAGES_DRAFT_DELETE: baseURL + 'pages/delete-draft',
  PAGES_DRAFT_ADD: baseURL + 'pages/add-draft',
  PAGES_CHANGE_PASSWORD: baseURL + 'pages/change-password',
  PAGES_UPLOAD: baseURL + 'pages/upload',
  PAGES_CHANGE_ATTRIBUTE: baseURL + 'pages/change-attributes',
  PAGES_DRAFT_UPDATE: baseURL + 'pages/update-draft',
  PAGES_CHANGE_ORDER: baseURL + 'pages/change-order',

  /**
   * Careers End Points
   */
  CAREERS: baseURL + 'career/index',
  CAREERS_GET: baseURL + 'career/get',
  CAREERS_BUILDER: baseURL + 'career/builder',
  CAREERS_ADD: baseURL + 'career/add',
  CAREERS_PAGINATE: baseURL + 'career/paginate',
  CAREERS_UPDATE: baseURL + 'career/update',
  CAREERS_DELETE: baseURL + 'career/delete',
  CAREERS_RESTORE: baseURL + 'career/restore',
  CAREERS_PERMANENTLY_DELETE: baseURL + 'career/destroy',
  CAREERS_DRAFT_DELETE: baseURL + 'career/delete-draft',
  CAREERS_DRAFT_ADD: baseURL + 'career/add-draft',
  CAREERS_CHANGE_PASSWORD: baseURL + 'career/change-password',
  CAREERS_UPLOAD: baseURL + 'career/upload',
  CAREERS_CHANGE_ATTRIBUTE: baseURL + 'career/change-attributes',
  CAREERS_DRAFT_UPDATE: baseURL + 'career/update-draft',
  CAREERS_CHANGE_ORDER: baseURL + 'career/change-order',

  /**
   * Sliders End Points
   */
  SLIDERS: baseURL + 'slider/index',
  SLIDERS_GET: baseURL + 'slider/get',
  SLIDERS_GET_DRAFT: baseURL + 'slider/get-draft',
  SLIDERS_BUILDER: baseURL + 'slider/builder',
  SLIDERS_ADD: baseURL + 'slider/add',
  SLIDERS_PAGINATE: baseURL + 'slider/paginate',
  SLIDERS_UPDATE: baseURL + 'slider/update',
  SLIDERS_DELETE: baseURL + 'slider/delete',
  SLIDERS_RESTORE: baseURL + 'slider/restore',
  SLIDERS_PERMANENTLY_DELETE: baseURL + 'slider/destroy',
  SLIDERS_DRAFT_DELETE: baseURL + 'slider/delete-draft',
  SLIDERS_DRAFT_ADD: baseURL + 'slider/add-draft',
  SLIDERS_UPLOAD: baseURL + 'slider/upload',
  SLIDERS_CHANGE_ATTRIBUTE: baseURL + 'slider/change-attributes',
  SLIDERS_DRAFT_UPDATE: baseURL + 'slider/update-draft',
  SLIDERS_CHANGE_ORDER: baseURL + 'slider/change-order',


  /**
   * Products
   */
  PRODUCTS_BUILDER: baseURL + 'products/builder',

  /**
   * Categories
   */
  CATEGORIES: baseURL + 'products/categories/index',
  CATEGORIES_GET: baseURL + 'products/categories/get',
  CATEGORIES_DRAFT_GET: baseURL + 'products/categories/get-draft',
  CATEGORIES_BUILDER: baseURL + 'products/categories/builder',
  CATEGORIES_ADD: baseURL + 'products/categories/add',
  CATEGORIES_PAGINATE: baseURL + 'products/categories/paginate',
  CATEGORIES_UPDATE: baseURL + 'products/categories/update',
  CATEGORIES_DELETE: baseURL + 'products/categories/delete',
  CATEGORIES_RESTORE: baseURL + 'products/categories/restore',
  CATEGORIES_PERMANENTLY_DELETE: baseURL + 'products/categories/destroy',
  CATEGORIES_DRAFT_DELETE: baseURL + 'products/categories/delete-draft',
  CATEGORIES_DRAFT_ADD: baseURL + 'products/categories/add-draft',
  CATEGORIES_CHANGE_PASSWORD: baseURL + 'products/categories/change-password',
  CATEGORIES_UPLOAD: baseURL + 'products/categories/upload',
  CATEGORIES_CHANGE_ATTRIBUTE: baseURL + 'products/categories/change-attributes',
  CATEGORIES_DRAFT_UPDATE: baseURL + 'products/categories/update-draft',
  CATEGORIES_CHANGE_ORDER: baseURL + 'products/categories/change-order',

  /**
   * Attributes
   */
  ATTRIBUTES: baseURL + 'products/attributes/index',
  ATTRIBUTES_GET: baseURL + 'products/attributes/get',
  ATTRIBUTES_DRAFT_GET: baseURL + 'products/attributes/get-draft',
  ATTRIBUTES_BUILDER: baseURL + 'products/attributes/builder',
  ATTRIBUTES_ADD: baseURL + 'products/attributes/add',
  ATTRIBUTES_PAGINATE: baseURL + 'products/attributes/paginate',
  ATTRIBUTES_UPDATE: baseURL + 'products/attributes/update',
  ATTRIBUTES_DELETE: baseURL + 'products/attributes/delete',
  ATTRIBUTES_RESTORE: baseURL + 'products/attributes/restore',
  ATTRIBUTES_PERMANENTLY_DELETE: baseURL + 'products/attributes/destroy',
  ATTRIBUTES_DRAFT_DELETE: baseURL + 'products/attributes/delete-draft',
  ATTRIBUTES_DRAFT_ADD: baseURL + 'products/attributes/add-draft',
  ATTRIBUTES_UPLOAD: baseURL + 'products/attributes/upload',
  ATTRIBUTES_CHANGE_ATTRIBUTE: baseURL + 'products/attributes/change-attributes',
  ATTRIBUTES_DRAFT_UPDATE: baseURL + 'products/attributes/update-draft',
  ATTRIBUTES_CHANGE_ORDER: baseURL + 'products/attributes/change-order',
  /**
   * Attribute Groups
   */
  ATTRIBUTES_GROUPS_ADD: baseURL + 'products/attributes/groups/add',
  GROUPS_INDEX: baseURL + 'products/attributes/groups/index',


  /**
   * Brands
   */
  BRANDS: baseURL + 'products/brands/index',
  BRANDS_GET: baseURL + 'products/brands/get',
  BRANDS_DRAFT_GET: baseURL + 'products/brands/get-draft',
  BRANDS_BUILDER: baseURL + 'products/brands/builder',
  BRANDS_ADD: baseURL + 'products/brands/add',
  BRANDS_PAGINATE: baseURL + 'products/brands/paginate',
  BRANDS_UPDATE: baseURL + 'products/brands/update',
  BRANDS_DELETE: baseURL + 'products/brands/delete',
  BRANDS_RESTORE: baseURL + 'products/brands/restore',
  BRANDS_PERMANENTLY_DELETE: baseURL + 'products/brands/destroy',
  BRANDS_DRAFT_DELETE: baseURL + 'products/brands/delete-draft',
  BRANDS_DRAFT_ADD: baseURL + 'products/brands/add-draft',
  BRANDS_UPLOAD: baseURL + 'products/brands/upload',
  BRANDS_CHANGE_ATTRIBUTE: baseURL + 'products/brands/change-attributes',
  BRANDS_DRAFT_UPDATE: baseURL + 'products/brands/update-draft',
  BRANDS_CHANGE_ORDER: baseURL + 'products/brands/change-order',


  /**
   * Suppliers
   */
  SUPPLIERS: baseURL + 'products/suppliers/index',
  SUPPLIERS_GET: baseURL + 'products/suppliers/get',
  SUPPLIERS_DRAFT_GET: baseURL + 'products/suppliers/get-draft',
  SUPPLIERS_BUILDER: baseURL + 'products/suppliers/builder',
  SUPPLIERS_ADD: baseURL + 'products/suppliers/add',
  SUPPLIERS_PAGINATE: baseURL + 'products/suppliers/paginate',
  SUPPLIERS_UPDATE: baseURL + 'products/suppliers/update',
  SUPPLIERS_DELETE: baseURL + 'products/suppliers/delete',
  SUPPLIERS_RESTORE: baseURL + 'products/suppliers/restore',
  SUPPLIERS_PERMANENTLY_DELETE: baseURL + 'products/suppliers/destroy',
  SUPPLIERS_DRAFT_DELETE: baseURL + 'products/suppliers/delete-draft',
  SUPPLIERS_DRAFT_ADD: baseURL + 'products/suppliers/add-draft',
  SUPPLIERS_UPLOAD: baseURL + 'products/suppliers/upload',
  SUPPLIERS_CHANGE_ATTRIBUTE: baseURL + 'products/suppliers/change-attributes',
  SUPPLIERS_DRAFT_UPDATE: baseURL + 'products/suppliers/update-draft',
  SUPPLIERS_CHANGE_ORDER: baseURL + 'products/suppliers/change-order',

  /**
   * Tags
   */
  TAGS: baseURL + 'products/tags/index',
  TAGS_GET: baseURL + 'products/tags/get',
  TAGS_DRAFT_GET: baseURL + 'products/tags/get-draft',
  TAGS_BUILDER: baseURL + 'products/tags/builder',
  TAGS_ADD: baseURL + 'products/tags/add',
  TAGS_PAGINATE: baseURL + 'products/tags/paginate',
  TAGS_UPDATE: baseURL + 'products/tags/update',
  TAGS_DELETE: baseURL + 'products/tags/delete',
  TAGS_RESTORE: baseURL + 'products/tags/restore',
  TAGS_PERMANENTLY_DELETE: baseURL + 'products/tags/destroy',
  TAGS_DRAFT_DELETE: baseURL + 'products/tags/delete-draft',
  TAGS_DRAFT_ADD: baseURL + 'products/tags/add-draft',
  TAGS_UPLOAD: baseURL + 'products/tags/upload',
  TAGS_CHANGE_ATTRIBUTE: baseURL + 'products/tags/change-attributes',
  TAGS_DRAFT_UPDATE: baseURL + 'products/tags/update-draft',
  TAGS_CHANGE_ORDER: baseURL + 'products/tags/change-order',


  /**
   * Stores
   */
  STORES: baseURL + 'products/stores/index',
  STORES_GET: baseURL + 'products/stores/get',
  STORES_DRAFT_GET: baseURL + 'products/stores/get-draft',
  STORES_BUILDER: baseURL + 'products/stores/builder',
  STORES_ADD: baseURL + 'products/stores/add',
  STORES_PAGINATE: baseURL + 'products/stores/paginate',
  STORES_UPDATE: baseURL + 'products/stores/update',
  STORES_DELETE: baseURL + 'products/stores/delete',
  STORES_RESTORE: baseURL + 'products/stores/restore',
  STORES_PERMANENTLY_DELETE: baseURL + 'products/stores/destroy',
  STORES_DRAFT_DELETE: baseURL + 'products/stores/delete-draft',
  STORES_DRAFT_ADD: baseURL + 'products/stores/add-draft',
  STORES_UPLOAD: baseURL + 'products/stores/upload',
  STORES_CHANGE_ATTRIBUTE: baseURL + 'products/stores/change-attributes',
  STORES_DRAFT_UPDATE: baseURL + 'products/stores/update-draft',
  STORES_CHANGE_ORDER: baseURL + 'products/stores/change-order',



  /**
   * Products
   */
  PRODUCTS: baseURL + 'products/index',
  PRODUCTS_GET: baseURL + 'products/get',
  PRODUCTS_DRAFT_GET: baseURL + 'products/get-draft',
  PRODUCTS_ADD: baseURL + 'products/add',
  PRODUCTS_MASTER_ADD: baseURL + 'products/add-master',
  PRODUCTS_MASTER_EDIT: baseURL + 'products/update-master/',
  PRODUCTS_PAGINATE: baseURL + 'products/paginate',
  PRODUCTS_UPDATE: baseURL + 'products/update',
  PRODUCTS_DELETE: baseURL + 'products/delete',
  PRODUCTS_VARIATION_DELETE: baseURL + 'products/delete-product/',
  PRODUCTS_RESTORE: baseURL + 'products/restore',
  PRODUCTS_PERMANENTLY_DELETE: baseURL + 'products/destroy',
  PRODUCTS_DRAFT_DELETE: baseURL + 'products/delete-draft',
  PRODUCTS_DRAFT_ADD: baseURL + 'products/add-draft',
  PRODUCTS_UPLOAD: baseURL + 'products/upload',
  PRODUCTS_CHANGE_ATTRIBUTE: baseURL + 'products/change-attributes',
  PRODUCTS_DRAFT_UPDATE: baseURL + 'products/update-draft',
  PRODUCTS_CHANGE_ORDER: baseURL + 'products/change-order',


  /**
   * Rooms
   * */

  ROOMS: baseURL + 'products/rooms/index',
  ROOMS_GET: baseURL + 'products/rooms/get',
  ROOMS_DRAFT_GET: baseURL + 'products/rooms/get-draft',
  ROOMS_BUILDER: baseURL + 'products/rooms/builder',
  ROOMS_ADD: baseURL + 'products/rooms/add',
  ROOMS_PAGINATE: baseURL + 'products/rooms/paginate',
  ROOMS_UPDATE: baseURL + 'products/rooms/update',
  ROOMS_DELETE: baseURL + 'products/rooms/delete',
  ROOMS_RESTORE: baseURL + 'products/rooms/restore',
  ROOMS_PERMANENTLY_DELETE: baseURL + 'products/rooms/destroy',
  ROOMS_DRAFT_DELETE: baseURL + 'products/rooms/delete-draft',
  ROOMS_DRAFT_ADD: baseURL + 'products/rooms/add-draft',
  ROOMS_CHANGE_PASSWORD: baseURL + 'products/rooms/change-password',
  ROOMS_UPLOAD: baseURL + 'products/rooms/upload',
  ROOMS_CHANGE_ATTRIBUTE: baseURL + 'products/rooms/change-attributes',
  ROOMS_DRAFT_UPDATE: baseURL + 'products/rooms/update-draft',
  ROOMS_CHANGE_ORDER: baseURL + 'products/rooms/change-order',

  /**
   * Settings
   */
  SETTINGS: baseURL + 'settings/index',
  SETTINGS_BUILDER: baseURL + 'settings/builder',
  SETTINGS_ADD: baseURL + 'settings/add',
  SETTINGS_UPDATE: baseURL + 'settings/update',
  SETTINGS_DELETE: baseURL + 'settings/delete',

  /**
   * News End Points
   */
  NEWS: baseURL + 'news/index',
  NEWS_GET: baseURL + 'news/get',
  NEWS_BUILDER: baseURL + 'news/builder',
  NEWS_ADD: baseURL + 'news/add',
  NEWS_PAGINATE: baseURL + 'news/paginate',
  NEWS_UPDATE: baseURL + 'news/update',
  NEWS_DELETE: baseURL + 'news/delete',
  NEWS_RESTORE: baseURL + 'news/restore',
  NEWS_PERMANENTLY_DELETE: baseURL + 'news/destroy',
  NEWS_DRAFT_DELETE: baseURL + 'news/delete-draft',
  NEWS_DRAFT_ADD: baseURL + 'news/add-draft',
  NEWS_CHANGE_PASSWORD: baseURL + 'news/change-password',
  NEWS_UPLOAD: baseURL + 'news/upload',
  NEWS_CHANGE_ATTRIBUTE: baseURL + 'news/change-attributes',
  NEWS_DRAFT_UPDATE: baseURL + 'news/update-draft',
  NEWS_CHANGE_ORDER: baseURL + 'news/change-order',
};
