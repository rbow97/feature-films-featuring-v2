import { useState, useEffect } from "preact/hooks";

/**
 * Define a boolean which will only be `true` when JavaScript is enabled on the
 * client-side. On the Server it will be `false` and if JavaScript is not
 * enabled it will never be updated from that.
 */
export function useJsIsEnabled(): boolean {
  const [jsIsEnabled, setJsIsEnabled] = useState(false);
  useEffect(() => setJsIsEnabled(true), []);
  return jsIsEnabled;
}
