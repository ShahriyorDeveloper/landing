import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
const locales = ["en", "uz", "ru"];

export default getRequestConfig(async ({ requestLocale }) => {
  // Validate that the incoming `locale` parameter is valid
  const locale = await requestLocale;
  if (!locales.includes(locale!)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
