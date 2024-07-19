export const exampleData = {
  DeviceInfo: {
    PackageName: "com.test.com",
    LangCode: "en",
    DeviceID: "test_dev_doc",
  },
  Referrer: {
    Affiliate: {
      Campaign: "6a0fa162-fb4c-4074-a6d4-402744e3590b",
      ClickID: "your clickid",
      Pub_ID: "your pub id",
      Aff_ID: "your aff id",
      extra: "",
      extra1: "",
      firstPageButtonID: "msisdn-entry",
      secondPageButtonID: "pin-entry",
      Country: "IQ",
    },
  },
  Request: {
    Action: 1,
    TransactionID: "",
    SessionID: "",
    MSISDN: "+964",
    PinCode: "",
  },
};



export type ExampleRequestData = typeof exampleData;