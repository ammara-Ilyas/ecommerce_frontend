import Image from "next/image";
import CategoriesSlider from "@/components/widgets/home/Categories";
import BannerSlider from "@/components/widgets/home/BannerSlider";
import FeaturedProducts from "@/components/widgets/home/FeaturedProducts";
import NewArrival from "@/components/widgets/home/NewArrival";
import DealSlider from "@/components/widgets/home/DealSlider";
export default function Home() {
  return (
    <>
      <BannerSlider />
      <CategoriesSlider />
      <FeaturedProducts />
      <DealSlider />
      <NewArrival />
    </>
  );
}
