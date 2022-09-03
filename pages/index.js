import Head from "next/head";
import Image from "next/image";
import FoodComp from "../components/HomeComp/FoodComp/FoodComp";
import HeadlineCard from "../components/HomeComp/HeadlineCard/HeadlineCard";
import HeroComp from "../components/HomeComp/HeroComp/HeroComp";
import MenuComp from "../components/HomeComp/MenuComp/MenuComp";
import Layer from "../components/Layer/Layer";

export default function Home() {
  return (
    <Layer>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroComp />
      <div className="py-12 grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((item) => {
          return <HeadlineCard />;
        })}
      </div>

      <FoodComp/>
      <MenuComp/>
    </Layer>
  );
}