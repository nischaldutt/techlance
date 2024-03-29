const URL_CONSTANTS = {
  GET_USER: "/user",
  AUTH: {
    LOGIN: "/auth/login",
    SIGN_UP: "/auth/signup",
  },
  CUSTOMER: {
    GET_CATEGORIES: "/categories",
    GET_ALL_SUB_CATEGORIES: "/sub-category/filter",
    GET_SUB_CATEGORIES_WITH_CATEGORY_ID: "/sub-category",

    BOOKING_REQUEST: {
      SAVE_SCHEDULE: "/booking/step1",
      SAVE_BOOKING_DETAILS: "/booking/step2",
      CONFIRM_BOOKING: "/booking/confirm",
      UPDATE_SCHEDULE: "/booking/step1",
      UPDATE_BOOKING_DEATILS: "/booking/step2",
      CLEANUP: "/booking/cleanup",
    },
    GET_BOOKING: "/booking/getbooking",

    REVIEWS: {
      ADD_BUSINESS_REIVEW: "/review",
      EDIT_BUSINESS_REIVEW: "/review",
      GET_REVIEWS_BY_BUSINESS_ID: "/review/list",
      GET_AVERAGE_BUSINESS_RATING: "/review/average",
    },
  },
  BUSINESS: {
    REGISTRATION: {
      ADD_BASIC_INFO: "/business/basic",
      ADD_INSURANCE: "/business/insurance",
      ADD_REFERENCES: "/business/references",
      ADD_SERVICES: "/business/services",
    },
    SERVICES: {
      CREATE_SERVICE: "/service/create",
      GET_SERVICES_BY_BUSINESS: "/service/list",
    },
    STATES: "business/states/1",
  },
  ROUTES: {
    HOME: "/",
    CUSTOMER: {
      AUTH: {
        LOGIN: "/auth/login",
        SIGN_UP: "/auth/signup",
      },
    },
    BUSINESS: {
      AUTH: {
        LOGIN: "/business/auth/login",
        SIGN_UP: "/business/auth/signup",
      },
      REGISTRATION: "/business/registration",
      ADMIN: {
        DASHBOARD: "/business/admin/dashboard",
      },
    },
  },
  SINGLE_FILE_UPLOAD: "/file/upload/",
  SINGLE_FILE_DELETE: "/file/delete/",
};

export default URL_CONSTANTS;
