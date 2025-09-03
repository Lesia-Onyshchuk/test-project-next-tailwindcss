import { LanguageProvider } from "./components/lang-provider";
import { ModalProvider } from "./components/modal-provider";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Test Project - Next.js & Tailwind CSS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="My Next.js app with Tailwind" />
      </head>
      <body>
        <LanguageProvider>
          <ModalProvider>{children}</ModalProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
