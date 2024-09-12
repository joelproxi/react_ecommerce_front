
import {assertIsProduct} from "./productAssertions";

export default async function getProductDetail(REACT_APP_BASE_API: string) {
    const response = await fetch(REACT_APP_BASE_API, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    const body = (await response.json()) as unknown;
    assertIsProduct(body)
    return body;
}

