
import {assertIsProducts} from "./productAssertions";

export default async function getProducts(REACT_APP_BASE_API: string) {
  const response = await fetch(REACT_APP_BASE_API, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const body = (await response.json()) as unknown;
  assertIsProducts(body)
  return body;
}


