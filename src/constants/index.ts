export const exampleData = {
  DeviceInfo: {
    // PackageName: "com.test.com",
    // LangCode: "en",
    // DeviceID: "test_dev_doc",
  },
  Referrer: {
    Affiliate: {
      Campaign: "6a0fa162-fb4c-4074-a6d4-402744e3590b",
      // firstPageButtonID: "msisdn-entry",
      Country: "RE",
    },
  },
  Request: {
    Action: 1,
    TransactionID: "",
    SessionID: "4ede9d3c-80d4-4a3e-be0c-6566d5783ce4",
    MSISDN: "9747013501394",
    // PinCode: "",
  },
};

export type ExampleRequestData = typeof exampleData;


interface Disclaimers {
    headerInfo: string;
    middleInfo: string;
    footerInfo: string;
    OTPTopHeaderInfo: string;
}

// Define the type for the API response
export interface ApiResponse {
    Action: number;
    Name: string;
    Disclaimers: Disclaimers;
    serviceLogo: string;
    serviceName: string;
    buttonText: string;
    PrivacyPolicy: string;
    TermsAndConditions: string;
    AFScript: string;
}