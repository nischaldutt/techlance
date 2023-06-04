const APP_CONSTANTS = {
  AUTH_TOKEN_VALIDITY: 2,
  USER_TYPE: {
    CUSTOMER: "customer",
    BUSINESS: "business",
  },
  QUERY_KEYS: {
    CATEGORIES: "CATEGORIES",
    SUB_CATEGORIES: "SUB_CATEGORIES",
    SUB_CATEGORIES_WITH_CATEGORY_ID: "SUB_CATEGORIES_WITH_CATEGORY_ID",
    BUSINESS_REGISTRATION: {
      ADD_BASIC_INFO: "ADD_BASIC_INFO",
      ADD_INSURANCE: "ADD_INSURANCE",
      ADD_REFERENCES: "ADD_REFERENCES",
      ADD_SERVICES: "ADD_SERVICES",
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
  MESSAGES: {
    SIGNUP_SUCCESS: "Account created successfully!",
    ERROR: "Something went wrong!",
    LOGIN_SUCCESS: "Logging you in!",
    LOGIN_FAILED: "Login Failed!",
    COMPANY_REGISTERED: "Company Registered!",
    INSURANCE_INFO_ADDED: "Insurance information Added!",
    REFERENCES_ADDED: "References Added!",
  },
  REGEXES: {
    BUSINESS_UNITS: /^[0-9]{1,6}$/g,
    BUSINESS_HST: /^[0-9]{1,5}$/g,
    WEBSITE_URL:
      /^((https?|http):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/g,
    BUSINESS_INSURANCE_POLICY_NUMBER: /^[0-9]{1,5}$/g,
  },
};

export default APP_CONSTANTS;
