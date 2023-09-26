import "@styles/index.css";

import { EmailProvider } from "@context/EmailContext";

export const metadata = {
  title: "Newsletter Sign Up",
  description: "Newsletter sign up with success message",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <EmailProvider>
        <body>{children}</body>
      </EmailProvider>
    </html>
  );
}
