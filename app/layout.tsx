import {
  ClerkProvider,
} from "@clerk/nextjs";
import "./globals.css";
import PageHeader from "@/components/page-header";

import Script from "next/script";

export const metadata = {
  title: "Feedback Saas Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Script src="https://feedback-widget-lyart.vercel.app//widget.umd.js"></Script>
        <body>

          <Script src="https://feedback-widget-lyart.vercel.app//widget.umd.js"></Script>
          <PageHeader />
          {/* <my-widget project-id="14"></my-widget> */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
