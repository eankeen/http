import { assertEquals } from "https://deno.land/std@0.54.0/testing/asserts.ts";
import * as http from "./statusCodes.ts";

Deno.test({
  name: "access caps locked variable",
  fn: (): void => {
    assertEquals(http.ACCEPTED, 202);
  },
});

Deno.test({
  name: "access statusTexts from statusText",
  fn: (): void => {
    assertEquals(http.getStatusText(305), "Use Proxy");
  },
});

Deno.test({
  name: "access statusCodes from statusCode",
  fn: (): void => {
    assertEquals(http.getStatusCode("Use Proxy"), 305);
  },
});
