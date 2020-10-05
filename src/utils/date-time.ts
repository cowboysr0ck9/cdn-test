/**
 * Prints a given time string in a human friendly format
 * @param time - Date string you want to format as a AM/PM time
 * @param locale - Locale for proper formatting. Default: "en-US"
 */
export const formatClockTime = (time: Date, locale = "en-US") =>
  time.toLocaleString(locale, {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

/**
 * Create and return the current time in ISO standard format
 */
export const currentIsoTime = () => new Date().toISOString();

/**
 * Returns the current users International Timezone ex. America/New_York
 */
export const timezone = () => {
  const timezone = "America/New_York";
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    return timezone;
  }
};

/**
 * Returns the current user's locale ex. en-gb
 */
export const locale = () => navigator.language;
