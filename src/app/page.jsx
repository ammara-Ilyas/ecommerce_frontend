import Image from "next/image";
import CategoriesSlider from "@/components/widgets/home/Categories";
import BannerSlider from "@/components/widgets/home/BannerSlider";
import FeaturedProducts from "@/components/widgets/home/FeaturedProducts";
import DealSlider from "@/components/widgets/home/DealSlider";
import Products from "@/components/widgets/home/ProductsCompenent";
export const metadata = {
  title: "Ecommerce Home | Best Online Shopping",
  description: "Welcome to the best ecommerce platform for fashion, electronics, and more. Shop online with great deals and fast shipping.",
  keywords: "ecommerce, online shopping, fashion, electronics, deals, shop online"
};
export default function Home() {
  const images = [
    "/images/home/sale_pro_01.jpg",
    "/images/home/sale_pro_02.jpg",
    "/images/home/sale_pro_03.jpg",
    "/images/home/sale_pro_04.jpg",
  ];
  return (
    <div className="bg-white min-h-screen">
      <BannerSlider />
      <CategoriesSlider />
      <Products />
      <FeaturedProducts />
      <DealSlider images={images} height="h-[250px]" />
    </div>
  );
}
