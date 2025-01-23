import { readFileSync } from "node:fs";
import path from "node:path";

export function getMessage(key: string) {
  const buf = readFileSync(path.resolve("src/_locales/en/messages.json"));
  const messages = JSON.parse(buf.toString());
  return messages[key].message;
}

export function setTitle(_options: {title: string}): unknown {
  return null;
}

export function setIcon(_options: {path: string}): unknown {
  return null;
}
