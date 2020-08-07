import Axios from "axios";

const UNIVERSAL_HTTP_HEADERS = {
  "Content-Type": "application/json",
};

const NETWORK_TIMEOUT_IN_SECONDS = 5_000;
/**
 * @description Official Kore AI HTTP method for accessing platform API's.
 */
export const koreHTTP = Axios.create({
  baseURL: "https://bots.kore.ai",
  timeout: NETWORK_TIMEOUT_IN_SECONDS,
  headers: {
    ...UNIVERSAL_HTTP_HEADERS,
  },
});

/**
 * @description Official HTTP method for accessing client built JWT endpoint.
 */
export const authHTTP = Axios.create({
  baseURL: "https://bots.kore.ai",
  timeout: NETWORK_TIMEOUT_IN_SECONDS,
  headers: {
    ...UNIVERSAL_HTTP_HEADERS,
  },
});
