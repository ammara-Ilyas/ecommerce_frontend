import { Geist, Geist_Mono } from "next/font/google";
// import Header from "../components/layout/Header";
import TopMarqueeBar from "@/components/layout/widgets/TopBar.jsx";
import "./globals.css";
import Footer from "@/components/layout/footer/Footer";
import ShopWithUs from "@/components/layout/widgets/ShopWithUS";
import NewsletterSection from "@/components/layout/footer/widgets/NewsLetter";
import ReduxProviders from "@/redux/ReduxProvider";
import { callPrivateApi, callPublicApi } from "@/libs/CallApis";
import Navbar from "@/components/layout/Navbar";
import { ToastContainer } from "react-toastify";
import Wrapper from "@/components/miniWidgets/Wrapper";
import ProgressBarProviders from "@/components/miniWidgets/Progressbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home",
  description: "Home page in ecommerce website",
};

const fetchData = async () => {
  let productRes = null;
  let CategoriesRes = null;
  let bannerRes = null;

  try {
    productRes = await callPublicApi("/products", "GET");
  } catch (error) {
    console.error("Product fetch failed:", error);
  }

  try {
    CategoriesRes = await callPublicApi("/category", "GET");
  } catch (error) {
    console.error("Categories fetch failed:", error);
  }

  try {
    bannerRes = await callPublicApi("/banners", "GET");
  } catch (error) {
    console.error("Banner fetch failed:", error);
  }

  return { productRes, CategoriesRes, bannerRes };
};

const { productRes, CategoriesRes, bannerRes, cartRes, wishlistRes } =
  await fetchData();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen `}
      >
        <ReduxProviders
          product={productRes}
          categories={CategoriesRes}
          banners={bannerRes}
        >
          <TopMarqueeBar />
          <Navbar />
          <Wrapper>
            {/* <Header /> */}
            <ProgressBarProviders>{children}</ProgressBarProviders>
            {/* <NewsLatter /> */}
            <NewsletterSection />
            <ShopWithUs />
            <Footer /> <ToastContainer position="top-right" autoClose={3000} />
          </Wrapper>
        </ReduxProviders>
      </body>
    </html>
  );
}
