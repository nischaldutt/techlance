const APP_CONSTANTS = {
  AUTH_TOKEN_VALIDITY: 2,
  USER_TYPE: {
    CUSTOMER: "customer",
    BUSINESS: "business",
  },
  QUERY_KEYS: {
    CATEGORIES: "categories",
    SUB_CATEGORIES: "sub-categories",
    SUB_CATEGORIES_WITH_CATEGORY_ID: "sub-categories-with-category-id",
    BUSINESS_REGISTRATION: {
      ADD_BASIC_INFO: "ADD_BASIC_INFO",
      ADD_INSURANCE: "ADD_INSURANCE",
      ADD_REFERENCE: "ADD_REFERENCE",
      ADD_SERVICES: "ADD_SERVICES",
    },
  },
  REDUCER_ACTION_TYPES: {
    BUSINESS_REGISTRATION: {
      ADD_BASIC_INFO: "ADD_BASIC_INFO",
      ADD_INSURANCE: "ADD_INSURANCE",
      ADD_REFERENCE: "ADD_REFERENCE",
      ADD_SERVICES: "ADD_SERVICES",
    },
  },
  MESSAGES: {
    SIGNUP_SUCCESS: "Account created successfully!",
    ERROR: "Something went wrong!",
    LOGIN_SUCCESS: "Logging you in!",
    LOGIN_FAILED: "Login Failed!",
    COMPANY_REGISTERED: "Company Registered!",
    INSURANCE_INFO_ADDED: "Insurance information Added!",
  },
};

export default APP_CONSTANTS;
