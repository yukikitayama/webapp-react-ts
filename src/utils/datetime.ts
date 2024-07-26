export const getLocalDate = (): string => {
  let utcDate = new Date();
  const offset = utcDate.getTimezoneOffset();
  const localDate = new Date(utcDate.getTime() - (offset * 60 * 1000));
  return localDate.toISOString().split("T")[0];
};