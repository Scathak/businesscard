import { useEffect } from "react";

export const useGoogleTag = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-91GHPJ9W8Z";
    document.head.appendChild(script1);
    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-91GHPJ9W8Z');
    `;
    document.head.appendChild(script2);

    return () => {
      if (script1.parentNode) script1.parentNode.removeChild(script1);
      if (script2.parentNode) script2.parentNode.removeChild(script2);
    };
  }, []);
};  