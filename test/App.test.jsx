import "./setup.js";

import React from "npm:preact/compat";
import { render, screen, act, cleanup } from "npm:@testing-library/preact";
import { expect } from "jsr:@std/expect";
import { beforeEach, afterEach, describe, it } from "jsr:@std/testing/bdd";

import { App } from "../src/js/components/App.tsx";
import { setTitle, setIcon, getMessage } from "./mocks/chrome.i18n.ts";
import { success, loading, error } from "./mocks/fetch.ts";

const globalChrome = globalThis.chrome;
const globalFetch  = globalThis.fetch;
const chrome = { action: { setIcon, setTitle }, i18n: { getMessage } };

describe("App.tsx: ok response", () => {
  beforeEach(() => {
    globalThis.chrome = chrome;
    globalThis.fetch  = success;
  });

  afterEach(() => {
    globalThis.chrome = globalChrome;
    globalThis.fetch = globalFetch;
  });

  it("renders a response", async () => {
    await act(async () => { render(<App/>) });
    expect(await screen.findByTestId("response")).not.toBeNull();
  });
});

describe("App.tsx: error response", () => {
  beforeEach(() => {
    globalThis.chrome = chrome;
    globalThis.fetch  = error;
  });

  afterEach(() => {
    globalThis.chrome = globalChrome;
    globalThis.fetch = globalFetch;
  });

  it("renders an error", async () => {
    await act(async () => { render(<App/>) });
    expect(await screen.findByTestId("error")).not.toBeNull();
  });
});

describe("App.tsx: loader response", () => {
  beforeEach(() => {
    globalThis.chrome = chrome;
    globalThis.fetch  = loading;
  });

  afterEach(() => {
    globalThis.chrome = globalChrome;
    globalThis.fetch = globalFetch;
  });

  it("renders a loader", async () => {
    await act(async () => render(<App/>));
    expect(screen.getByTestId("loading")).not.toBeNull();
  });
});
