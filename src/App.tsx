import { useState } from "react";
import "./App.css";
import MobileScreen from "./components/ui/MobileSection";
import { ApiResponse, exampleData } from "./constants";
import Footer from "./components/ui/Footer";
import SubmitButton from "./components/ui/Button";
import NumberInput from "./components/ui/NumberInput";
import Steps from "./components/ui/Steps";
import { makeApiRequest } from "./api";

function App() {
  const [msisdn, setMsisdn] = useState("");
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setMsisdn(e.target.value);
  };

  const handleSubmit = async () => {
    // exampleData.Request.MSISDN += msisdn;
    exampleData.Request.TransactionID = Math.random().toString(36).substring(7);
    exampleData.Referrer.Affiliate.Country = "RE";

    setLoading(true);
    const response = await makeApiRequest(exampleData);
    setLoading(false);

    if (response.Error !== 0) {
      setError(response.MessageToShow);
      return;
    }

    setData(response.NextAction);
  };

  return (
    <div className=" min-h-screen bg-gradient-to-b from-blue-500   via-white to-white ">
      <div className=" mx-auto p-6 max-w-md w-full">
        {/* {data && <Header headerInfo={data.Disclaimers.headerInfo} />} */}

        <Steps />

        <MobileScreen />

        <div className="flex flex-col ">
          <NumberInput handleChange={handleChange} />

          <SubmitButton
            handleSubmit={handleSubmit}
            error={error}
            phone={msisdn}
            loading={loading}
          />
        </div>

        {data && (
          <Footer
            footerInfo={data.Disclaimers.footerInfo}
            termsAndConditions={data.TermsAndConditions}
            privacyPolicy={data.PrivacyPolicy}
          />
        )}
      </div>
    </div>
  );
}

export default App;
