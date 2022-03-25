import Head from "next/head";
import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import MiddleCards from "../components/MiddleCards";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="dark:bg-black">
      <Head>
        <title>
          Airbnb: Holiday Rentals, Cabins, Beach Houses, Unique Homes &
          Experiences
        </title>
        <link
          rel="icon"
          href="https://a0.muscache.com/airbnb/static/icons/android-icon-192x192-c0465f9f0380893768972a31a614b670.png"
        />
      </Head>
      <div>
        <Header />
        <Banner />
        <main className="max-w-7xl mx-auto px-8 sm:px-16 ">
          <section className="pt-6">
            <h2 className="text-4xl dark:text-gray-100 font-semibold pb-5">
              Explore Nearby
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {exploreData?.map((item) => (
                <SmallCard
                  key={item.img}
                  img={item.img}
                  distance={item.distance}
                  location={item.location}
                />
              ))}
            </div>
          </section>
          <LargeCard
            img="/images/banner2.jpeg"
            title="The Greatest Outdoors"
            description="WishList Curated By Airbnb"
            buttonText="Get Inspired"
            textcolor="black"
            buttoncolor="white"
          />
          <section>
            <h2 className="text-4xl font-semibold dark:text-gray-100 py-6">
              Live Anywhere
            </h2>
            <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
              {cardsData?.map(({ img, title }) => (
                <MediumCard key={img} img={img} title={title} />
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-3xl md:text-4xl dark:text-gray-100 font-semibold pt-6">
              Discover Experiences
            </h2>
            <h3 className="text-lg md:text-2xl dark:text-gray-100 font-normal">
              Unique activities with local experts – in person or online.
            </h3>
            <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
              <MiddleCards
                key="/images/play.jpeg"
                img="/images/play.jpeg"
                title="Experiences"
                discription="Local things to do, wherever you are."
              />
              <MiddleCards
                key="/images/play.jpeg"
                img="/images/play.jpeg"
                title="Online Experiences"
                discription="Live, interactive activities led by Hosts."
              />
              <MiddleCards
                key="/images/play.jpeg"
                img="/images/play.jpeg"
                title="Featured collection: Wanderlust"
                discription="Travel from home with Online Experiences."
              />
            </div>
          </section>
          <LargeCard
            img="/images/banner2.jpeg"
            title="Try hosting"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia"
            buttonText="Learn more"
            textcolor="white"
            buttoncolor="black"
          />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch(
    process.env.API_URL2 || "http://localhost:3000/api/hello2"
  ).then((res) => res.json());

  const cardsData = await fetch(
    process.env.API_URL3 || "http://localhost:3000/api/hello3"
  ).then((res) => res.json());
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
