import Axios from "axios";
import { NETWORK_TIMEOUT_IN_SECONDS } from "./constants";

/**
 * Shareable HTTP headers that can be shared across multiple Axios instances
 */
const UNIVERSAL_HTTP_HEADERS = {
  "Content-Type": "application/json",
};

/**
 * Official Kore Ai HTTP method for accessing platform API's.
 */
export const koreHTTP = Axios.create({
  baseURL: "https://bots.kore.ai",
  timeout: NETWORK_TIMEOUT_IN_SECONDS,
  headers: {
    ...UNIVERSAL_HTTP_HEADERS,
  },
});

/**
 * Official HTTP method for accessing client built JWT endpoint.
 * Default: Points to Kore Ai Cloud, but for on-prem deployments
 * this would point to your JWT service.
 */
export const authHTTP = Axios.create({
  baseURL: "https://bots.kore.ai",
  timeout: NETWORK_TIMEOUT_IN_SECONDS,
  headers: {
    ...UNIVERSAL_HTTP_HEADERS,
  },
});
