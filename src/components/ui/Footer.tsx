
const Footer = () => {
  return (
    <div className="mt-4 text-xs text-gray-500">
      <p>
        Entertainment is a subscription service that will automatically renew for 1 USD/7 Day(s).
        You can unsubscribe from the service at anytime, by sending STOP to **** for (operator). To
        make use of this service, you must be 18 or more unless you have received permission from
        your parents or the person who is authorized to pay your bill.
      </p>
      <div className="mt-2">
        <a href="#" className="text-blue-500 underline">
          Terms & Conditions
        </a>{" "}
        -{" "}
        <a href="#" className="text-blue-500 underline">
          Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default Footer;
