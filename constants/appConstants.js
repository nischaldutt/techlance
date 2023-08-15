const APP_CONSTANTS = {
  AUTH_TOKEN_VALIDITY: 2,
  USER_TYPE: {
    CUSTOMER: "customer",
    BUSINESS: "business",
  },
  QUERY_KEYS: {
    CUSTOMER: {
      CATEGORIES: "CATEGORIES",
      SUB_CATEGORIES: "SUB_CATEGORIES",
      SUB_CATEGORIES_WITH_CATEGORY_ID: "SUB_CATEGORIES_WITH_CATEGORY_ID",

      BOOKING_REQUEST: {
        SAVE_SCHEDULE: "SAVE_SCHEDULE",
        SAVE_BOOKING_DETAILS: "CREATE_JOB_DETAILS",
        CONFIRM_BOOKING: "CONFIRM_BOOKING",
      },

      REVIEWS: {
        ADD_BUSINESS_REIVEW: "ADD_BUSINESS_REIVEW",
        EDIT_BUSINESS_REIVEW: "EDIT_BUSINESS_REIVEW",
        GET_REVIEWS_BY_BUSINESS_ID: "GET_REVIEWS_BY_BUSINESS_ID",
        GET_AVERAGE_BUSINESS_RATING: "GET_AVERAGE_BUSINESS_RATING",
      },
    },

    BUSINESS: {
      BUSINESS_REGISTRATION: {
        ADD_BASIC_INFO: "ADD_BASIC_INFO",
        ADD_INSURANCE: "ADD_INSURANCE",
        ADD_REFERENCES: "ADD_REFERENCES",
        ADD_SERVICES: "ADD_SERVICES",
      },
    },
  },
  REDUCER_ACTION_TYPES: {
    BUSINESS_REGISTRATION: {
      ADD_BASIC_INFO: "ADD_BASIC_INFO",
      ADD_INSURANCE: "ADD_INSURANCE",
      ADD_REFERENCES: "ADD_REFERENCES",
      ADD_SERVICES: "ADD_SERVICES",
    },
  },
  REGEXES: {
    BUSINESS_UNITS: /^[0-9]{1,6}$/g,
    BUSINESS_HST: /^[0-9]{1,5}$/g,
    WEBSITE_URL:
      /^((https?|http):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/g,
    BUSINESS_INSURANCE_POLICY_NUMBER: /^[0-9]{1,5}$/g,
  },
  MESSAGES: {
    ERROR: "Something went wrong!",
    AUTH: {
      SIGNUP_SUCCESS: "Account created successfully!",
      LOGIN_SUCCESS: "Logging you in!",
      LOGIN_FAILED: "Login Failed!",
      UNAUTHORISED: "Unauthorized",
    },

    CUSTOMER: {
      BOOKING_REQUEST_SCHEDULED: "Booking Schedule Created!",
      BOOKING_DETAILS_SAVED: "Booking Details Saved!",
      BOOKING_CONFIRMED: "Booking Confirmed!",

      ADDED_BUSINESS_REVIEW: "Added Business Review!",
      UPDATED_BUSINESS_REVIEW: "Updated Business Review!",
    },

    BUSINESS: {
      COMPANY_REGISTERED: "Company Registered!",
      INSURANCE_INFO_ADDED: "Insurance information Added!",
      REFERENCES_ADDED: "References Added!",
    },
  },
};

export default APP_CONSTANTS;
