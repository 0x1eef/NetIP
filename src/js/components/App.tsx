/// <reference path="../types/chrome.d.ts" />
import React from "npm:preact/compat";
import { useWebService } from "../hooks/useWebService.ts";

export function App() {
  const [response, error] = useWebService();

  if (response) {
    chrome.action.setTitle({ title: response.IPAddress });
    chrome.action.setIcon({ path: `/images/flags/${response.CountryCode}.svg` });
  } else if (error) {
    chrome.action.setTitle({ title: "There was an error. Try again" });
    chrome.action.setIcon({ path: "/images/icon512x512.png" });
  }

  if (response) {
    return (
      <div data-testid="response" className="h-14 flex flex-col justify-center">
        <div className="flex h-full justify-center items-center min-w-48">
          <img className="w-8 h-8" src={`/images/flags/${response.CountryCode}.svg`} />
          <div className="flex flex-col ml-3">
            <span className="text-sm">{response.IPAddress}</span>
            <span className="text-xs">{response.Location}</span>
          </div>
        </div>
      </div>
    );
  } else if (error) {
    return (
      <div data-testid="error" className="h-14 flex flex-col justify-center">
        <div className="p-2 flex items-center h-full min-w-48 justify-center">
          <img data-testid="error" className="w-6 h-6" src="/images/icon.svg" />
        </div>
      </div>
    );
  } else {
    return (
      <div data-testid="loading" className="h-14 flex flex-col justify-center">
        <div className="flex flex-col items-center h-full min-w-48 justify-center">
          <img data-testid="spin" className="w-6 h-6" src="/images/icon256x256.png" />
        </div>
      </div>
    );
  }
}
