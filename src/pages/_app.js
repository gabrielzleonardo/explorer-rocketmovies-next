import "@/styles/globals.css";
import { Roboto_Slab } from "next/font/google";

const robotoSlab = Roboto_Slab({
  weights: [400, 700],
  subsets: ["latin"], 
  variable: '--font-slab'
});

export default function App({ Component, pageProps }) {
  return (
    <div className={robotoSlab.variable}>
      <Component {...pageProps} />
    </div>
  );
}
