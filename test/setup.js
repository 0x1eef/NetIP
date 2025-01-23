import { JSDOM } from "npm:jsdom";
const dom = new JSDOM("<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n</body>\n</html>");
const window = dom.window;

(() => {
  const keys = Object.keys(window);
  for (const key of keys) {
    if (globalThis[key]) {
      continue;
    } else {
      globalThis[key] = window[key];
    }
  }
  globalThis.window = window;
})();
