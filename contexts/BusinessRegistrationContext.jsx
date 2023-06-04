import { useReducer, createContext, useContext } from "react";

import { APP_CONSTANTS } from "@/constants";
import { useCreateBusinessBasicInfo } from "@/hooks";

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

// const initialState = {
//   basicInfo: {
//     name: "",
//     address: "",
//     hst: "",
//     unit: null,
//     website: "",
//     discoverDescription: "",
//     industryStandardAgreement: true,
//   },
//   insuranceInfo: {
//     businessId: null,
//     brokerEmail: "",
//     contactBrokerPermission: true,
//     insurancePolicyNumber: "",
//     insuranceAgreement: true,
//   },
//   referencesInfo: [
//     {
//       businessId: null,
//       fullName: "",
//       relationship: "",
//       company: "",
//       email: "",
//       phone: "",
//       description: "",
//     },
//     {
//       businessId: null,
//       fullName: "",
//       relationship: "",
//       company: "",
//       email: "",
//       phone: "",
//       description: "",
//     },
//   ],
//   servicesInfo: {
//     services: [
//       {
//         name: "",
//         description: "",
//         price: 0.0,
//         subCategoryId: null,
//       },
//     ],
//     businessId: null,
//   },
// };
