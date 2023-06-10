import { useReducer, createContext, useContext } from "react";

import { APP_CONSTANTS } from "@/constants";

const BusinessRegistrationContext = createContext(null);
const BusinessRegistrationDispatchContext = createContext(null);

export function BusinessRegistrationProvider({ children }) {
  const [businessData, dispatch] = useReducer(reducer, initialState);

  return (
    <BusinessRegistrationContext.Provider value={{ businessData }}>
      <BusinessRegistrationDispatchContext.Provider value={{ dispatch }}>
        {children}
      </BusinessRegistrationDispatchContext.Provider>
    </BusinessRegistrationContext.Provider>
  );
}

export function useBusinessRegistrationContext() {
  return useContext(BusinessRegistrationContext);
}

export function useBusinessRegistrationDispatchContext() {
  return useContext(BusinessRegistrationDispatchContext);
}

function reducer(state, action) {
  switch (action.type) {
    case APP_CONSTANTS.REDUCER_ACTION_TYPES.BUSINESS_REGISTRATION
      .ADD_BASIC_INFO: {
      return { ...state, businessId: action.payload };
    }
    case APP_CONSTANTS.REDUCER_ACTION_TYPES.BUSINESS_REGISTRATION
      .ADD_INSURANCE: {
      return action.payload;
    }
    case APP_CONSTANTS.REDUCER_ACTION_TYPES.BUSINESS_REGISTRATION
      .ADD_REFERENCES: {
      return action.payload;
    }
    case APP_CONSTANTS.REDUCER_ACTION_TYPES.BUSINESS_REGISTRATION
      .ADD_SERVICES: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

const initialState = {
  businessId: null,
};
