import { useState } from "react";
import "./App.css";
import MobileScreen from "./components/ui/MobileSection";
import { exampleRequestData } from "./constants";
import Footer from "./components/ui/Footer";
import SubmitButton from "./components/ui/Button";
import NumberInput from "./components/ui/NumberInput";
import Header from "./components/ui/Header";
import Steps from "./components/ui/Steps";
import { makeApiRequest } from "./api";

function App() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setPhone(e.target.value);
  };

  const handleSubmit = async () => {
    makeApiRequest(exampleRequestData);
    setError("The number you have entered is not correct, please check the number and try again");
    setPhone("");
  };

  return (
    <div className=" min-h-screen bg-gradient-to-b from-blue-500   via-white to-white ">
      <div className=" mx-auto p-6 max-w-md w-full">
        <Header />

        <Steps />

        <MobileScreen />

        <div className="flex flex-col ">
          <NumberInput handleChange={handleChange} />

          <SubmitButton handleSubmit={handleSubmit} error={error} phone={phone} />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
