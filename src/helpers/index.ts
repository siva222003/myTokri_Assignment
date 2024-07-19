import { decode } from "html-entities";

export const decodeHTML = (html: string) => {
  const spaceReplacedHtml = html.replace(/\+/g, " ");

  const urlDecodedHtml = decodeURIComponent(spaceReplacedHtml);

  const decodedHtml = decode(urlDecodedHtml);

  return decodedHtml;
};
