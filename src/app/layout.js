import { ModalProvider } from "./components/modal-provider";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
