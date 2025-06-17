import './globals.css';
import { Barlow, Amaranth, Montserrat } from 'next/font/google';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow',
});

const amaranth = Amaranth({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-amaranth',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'MITTALIS Research India',
  description: 'Empowering underprivileged children across India through education, upskilling, and research',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${barlow.variable} ${amaranth.variable} ${montserrat.variable}`}>
      <body className="bg-yellow-100 font-barlow">
        {children}
      </body>
    </html>
  );
}
