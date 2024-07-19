import { useState } from "react";
import "./App.css";
import MobileScreen from "./components/ui/MobileSection";
import { exampleData, ExampleRequestData } from "./constants";
import Footer from "./components/ui/Footer";
import SubmitButton from "./components/ui/Button";
import NumberInput from "./components/ui/NumberInput";
import Header from "./components/ui/Header";
import Steps from "./components/ui/Steps";
import { makeApiRequest } from "./api";

function App() {
  const [msisdn, setMsisdn] = useState("");
  const [data, setData] = useState<ExampleRequestData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMsisdn(e.target.value);
  };

  const handleSubmit = async () => {
    exampleData.Request.MSISDN += msisdn;
    exampleData.Request.TransactionID = Math.random().toString(36).substring(7);

    const response = await makeApiRequest(exampleData);

    if (response.Error !== 0) {
      setError(response.MessageToShow);
      return;
    }

    setData(response);
  };

  return (
    <div className=" min-h-screen bg-gradient-to-b from-blue-500   via-white to-white ">
      <div className=" mx-auto p-6 max-w-md w-full">
        <Header />

        <Steps />

        <MobileScreen />

        <div className="flex flex-col ">
          <NumberInput handleChange={handleChange} />

          <SubmitButton handleSubmit={handleSubmit} error={error} phone={msisdn} />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
