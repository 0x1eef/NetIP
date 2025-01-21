import { App } from "./components/App.tsx";
import { render } from "https://esm.sh/preact";

document.addEventListener("DOMContentLoaded", () => {
  const el: HTMLElement = document.querySelector("main")!;
  render(<App />, el);
});
