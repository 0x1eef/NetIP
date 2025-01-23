import type { TServerResponse } from "../../src/js/lib/response.ts";
type TFetchPath = RequestInfo | URL;
type TFetchOptions = RequestInit;

export async function success(_path: TFetchPath, _options?: TFetchOptions) {
  const json: TServerResponse = {
    YourIPAddress: "127.0.0.1",
    YourISP: "FooBar Ltd",
    YourCity: "Foo City",
    YourCountry: "United States of FooBar",
    YourCountryCode: "BR",
    YourTorExit: false,
    YourLocation: "Foo City, United States Of Foobar",
  }
  return {status: 200, json: async () => json};
}

export async function error(_path: TFetchPath, _options?: TFetchOptions) {
  throw new Error("Request error");
}

export async function loading(_path: TFetchPath, _options?: TFetchOptions) {
  return null;
}
