const URL_CONSTANTS = {
  GET_USER: "/user",
  CUSTOMER: {
    AUTH: {
      LOGIN: "/auth/login",
      SIGN_UP: "/auth/signup",
    },

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
    },
  },
  BUSINESS: {
    AUTH: {
      LOGIN: "/auth/login",
      SIGN_UP: "/auth/signup",
    },
    REGISTRATION: {
      ADD_BASIC_INFO: "/business/basic",
      ADD_INSURANCE: "/business/insurance",
      ADD_REFERENCES: "/business/references",
      ADD_SERVICES: "/business/services",
    },
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
    },
  },
};

export default URL_CONSTANTS;
