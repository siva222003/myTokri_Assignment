export const exampleRequestData = {
    DeviceInfo: {
      PackageName: "com.test.com",
      LangCode: "en",
      DeviceID: "test_dev_doc",
    },
    Referrer: {
      Affiliate: {
        Campaign: "will be shared with you",
        ClickID: "your clickid",
        Pub_ID: "your pub id",
        Aff_ID: "your aff id",
        extra: "",
        extra1: "",
        firstPageButtonID: "msisdn-entry",
        secondPageButtonID: "pin-entry",
        Country: "IRAQ",
      },
    },
    Request: {
      Action: 1,
      TransactionID: "",
      SessionID: "",
      MSISDN: "",
      PinCode: "",
    },
  };


export type ExampleRequestData = typeof exampleRequestData;