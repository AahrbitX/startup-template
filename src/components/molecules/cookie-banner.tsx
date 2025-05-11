"use client";

import { useEffect, useRef, useState } from "react";

const CookieBanner = () => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isHandled = localStorage.getItem("cookie-consent");
    if (!isHandled) setVisible(true);
  }, []);

  const hideBanner = (consent: "accepted" | "rejected") => {
    localStorage.setItem("cookie-consent", consent);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      id="cookie-banner"
      ref={itemRef}
      className="fixed bottom-0 right-0 px-6 pb-6 z-[999]"
    >
      <div className="max-w-md rounded-xl bg-neutral-700 p-6 text-white">
        <p className="text-sm">
          Cookie Banner is a message that displays when a user first visits a
          website and gives them the option to accept or reject cookies. Cookies
          are small text files that are placed on your device by websites that
          you visit.
          <a href="#" className="font-semibold text-purple-500"></a>
        </p>
        <div className="mt-4 flex items-center gap-2">
          <button
            onClick={() => hideBanner("accepted")}
            className="rounded-xl border-2 border-primary bg-primary px-3 py-1.5 text-xs font-medium text-black hover:bg-primary/80"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => hideBanner("rejected")}
            className="rounded-xl border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-900 hover:bg-gray-100"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
