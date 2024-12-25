import "../globals.css";

import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import greycliff from "../../../public/fonts/GreycliffCF";
import Header from "../../components/header";

export const metadata: Metadata = {
  title: "Visitca",
  description: "visitca, visitca.uz, visitca uz, visitcauz",
};

// Define the RootLayoutProps type
interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

// Layout function
export default async function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  const locale = await getLocale();
  const messages = await getMessages({ locale });

  return (
    <div className={`${greycliff.variable} antialiased bg-body_bg`}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Header />
        {children}
      </NextIntlClientProvider>
    </div>
  );
}
