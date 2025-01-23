import "./setup.js";

import React from "npm:preact/compat";
import { render, screen, act, cleanup } from "npm:@testing-library/preact";
import { expect } from "jsr:@std/expect";
import { beforeEach, afterEach, describe, it } from "jsr:@std/testing/bdd";

import { App } from "../src/js/components/App.tsx";
import { setTitle, setIcon, getMessage } from "./mocks/chrome.i18n.ts";
import { success, error } from "./mocks/fetch.ts";

const globalChrome = globalThis.chrome;
const globalFetch  = globalThis.fetch;

describe("App.tsx: ok response", () => {
  beforeEach(() => {
    globalThis.chrome = { action: { setIcon, setTitle }, i18n: { getMessage } };
    globalThis.fetch  = success;
  });

  afterEach(() => {
    globalThis.chrome = globalChrome;
    globalThis.fetch = globalFetch;
  });

  it("renders a response", async () => {
    await act(async () => { render(<App/>) });
    expect(await screen.findByTestId("response"), {timeout: 3000}).not.toBeNull()
  });
});
