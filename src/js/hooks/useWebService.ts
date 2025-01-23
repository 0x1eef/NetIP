import { useEffect, useState } from "npm:preact/hooks";
import { TResponse, Response } from "../lib/response.ts";

type Maybe<T> = T | null;

export function useWebService(): [Maybe<TResponse>, Maybe<Error>] {
  const endpoint = "https://clean.myip.wtf/json";
  const [response, setResponse] = useState<Maybe<TResponse>>(null);
  const [error, setError] = useState<Maybe<Error>>(null);

  function receive(res: Response) {
    if (res.status === 200) {
      return res.json();
    } else {
      const message = `Unexpected server response (${res.status})`;
      throw new Error(message);
    }
  }

  useEffect(() => {
    const ac = new AbortController();
    const options: RequestInit = { cache: "no-store", signal: ac.signal };
    fetch(endpoint, options)
      .then(receive)
      .then(json => setResponse(Response(json)))
      .catch(err => err.name !== "AbortError" ? setError(err) : null);
    return () => ac.abort();
  }, []);

  return [response, error];
}
