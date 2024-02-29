/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import DescriptionOne from "@/components/DescriptionOne";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import HorizontalBanner from "@/components/HorizontalBanner";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RigidPace",
};

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <HorizontalBanner />
      <DescriptionOne />
      <Footer />
    </>
  );
}
