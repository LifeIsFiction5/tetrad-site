import SiteHeader from "@/components/SiteHeader";
import VideoBackground from "@/components/VideoBackground";
import Hero from "@/components/Hero";
import ServicesIntro from "@/components/ServicesIntro";
import AboutCard from "../components/AboutCard";
import AboutBand from "@/components/AboutBand";
import TestimonialCarousel from "../components/TestimonialCarousel";
import ServiceShowcase from "../components/ServiceShowcase";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <Hero />
      <AboutCard />
      <TestimonialCarousel/>
      <ServiceShowcase />
    </>
  );
}
