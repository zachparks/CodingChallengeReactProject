const API_BASE_URL_DEVELOPMENT = 'https://localhost:7146';
const API_BASE_URL_PRODUCTION = 'https://codingchallengeredtech-aspnetserver.azurewebsites.net';

//A file for all the URLs for development and production use and to check if it is in development or production

const ENDPOINTS = {
    GET_ALL_ORDERS: 'get-all-orders',
    GET_ORDERS_BY_ID: 'get-order-by-id',
    CREATE_ORDER: 'create-order',
    UPDATE_ORDER: 'update-order',
    DELETE_ORDER_BY_ID: 'delete-order-by-id',
    GET_ORDERS_BY_TYPE: 'get-order-by-type'
};

const development = {
    API_URL_GET_ALL_ORDERS: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.GET_ALL_ORDERS}`,
    API_URL_GET_ORDER_BY_ID: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.GET_ORDERS_BY_ID}`,
    API_URL_CREATE_ORDER: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.CREATE_ORDER}`,
    API_URL_UDPATE_ORDER: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.UPDATE_ORDER}`,
    API_URL_DELETE_ORDER_BY_ID: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.DELETE_ORDER_BY_ID}`,
    API_URL_GET_ORDERS_BY_TYPE: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.GET_ORDERS_BY_TYPE}`,
};

const production = {
    API_URL_GET_ALL_ORDERS: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.GET_ALL_ORDERS}`,
    API_URL_GET_ORDER_BY_ID: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.GET_ORDERS_BY_ID}`,
    API_URL_CREATE_ORDER: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.CREATE_ORDER}`,
    API_URL_UDPATE_ORDER: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.UPDATE_ORDER}`,
    API_URL_DELETE_ORDER_BY_ID: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.DELETE_ORDER_BY_ID}`,
    API_URL_GET_ORDERS_BY_TYPE: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.GET_ORDERS_BY_TYPE}`,
};

const Constants = process.env.NODE_ENV === 'development' ? development : production;

export default Constants;
