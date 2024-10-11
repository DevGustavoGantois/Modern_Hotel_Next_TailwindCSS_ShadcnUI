import { Open_Sans } from 'next/font/google'
import "./globals.css";

const openSans = Open_Sans({
    weight: ['300', '400', '500', '600', '700', '800'],
    subsets: ['latin']
});

export const metadata = {
  title: "Hotel Landing Page",
  description: "Landing Page de um hotel moderno.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
