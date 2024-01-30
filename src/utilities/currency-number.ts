export const currencyNumber = (
  value: number,
  currencyCode: string,
  options?: Intl.NumberFormatOptions,
) => {

  const currencySymbols: { [key: string]: string } = {
    USD: "$", // United States Dollar
    EUR: "€", // Euro
    GBP: "£", // British Pound Sterling
    JPY: "¥", // Japanese Yen
    VND: "₫", // Vietnamese Dong
    CNY: "¥", // Chinese Yuan
  };

  if(
    typeof Intl === "object" &&
    Intl &&
    typeof Intl.NumberFormat === "function"
  ) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currencyCode,
      ...options,
    }).format(value);
  }

  const currencySymbol = currencySymbols[currencyCode];
  return currencySymbol ? `${currencySymbol}${value}` : value.toString();
};
