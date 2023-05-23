import { Manrope } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});


export default function MyApp({ Component, pageProps }) {
  return (
    <main className={manrope.className}>
      <Component {...pageProps} />
    </main>
  );
}