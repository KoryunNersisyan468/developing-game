import { useEffect } from "react";
import { useLocation } from "react-router";

export default function CanonicalUrl() {
  const location = useLocation();

  useEffect(() => {
    const canonicalLink = document.querySelector("link[rel='canonical']");

    const url = `${window.location.origin}${location.pathname}`;

    if (canonicalLink) {
      canonicalLink.setAttribute("href", url);
    } else {
      const link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      link.setAttribute("href", url);
      document.head.appendChild(link);
    }
  }, [location.pathname]);

  return null;
}
