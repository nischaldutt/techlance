const URL_CONSTANTS = {
  HOME: "/",
  CUSTOMER: {
    AUTH: {
      LOGIN: "/auth/login",
      SIGN_UP: "/auth/signup",
    },
    GET_CATEGORIES: "/categories",
    GET_ALL_SUB_CATEGORIES: "/sub-category/filter",
    GET_SUB_CATEGORIES_WITH_CATEGORY_ID: "/sub-category",
    BOOKING_REQUEST: {
      CREATE_SCHEDULE: "/booking/step1",
      JOB_DETAILS: "/booking/step2",
      CONFIRM_BOOKING: "/booking/confirm",
      UPDATE_SCHEDULE: "/booking/step1",
      UPDATE_JOB_DEATILS: "/booking/step2",
      CLEANUP: "/booking/cleanup",
    },
    GET_BOOKING: "/booking/getbooking",
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
};

export default URL_CONSTANTS;
