import React from "npm:preact/compat";
import { render } from "npm:preact";
import { App } from "./components/App.tsx";

document.addEventListener("DOMContentLoaded", () => {
  const el: HTMLElement = document.querySelector("main")!;
  render(<App />, el);
});
