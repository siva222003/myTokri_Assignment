import { decodeHTML } from "../../helpers";

interface FooterProps {
  footerInfo: string;
  termsAndConditions: string;
  privacyPolicy: string;
}

const Footer = ({ footerInfo, termsAndConditions, privacyPolicy }: FooterProps) => {
  const decodedHtml = decodeHTML(footerInfo);
  return (
    <div className="mt-4 text-xs text-gray-500">
      <div
        className="mt-4 text-xs text-gray-500"
        dangerouslySetInnerHTML={{ __html: decodedHtml }}
      />
      <div className="mt-2">
        <a href={termsAndConditions} target="_blank" className="text-blue-500 underline">
          Terms & Conditions
        </a>{" "}
        -{" "}
        <a href={privacyPolicy} target="_blank" className="text-blue-500 underline">
          Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default Footer;
