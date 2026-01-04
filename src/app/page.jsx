import SiteHeader from "@/components/SiteHeader";
import VideoBackground from "@/components/VideoBackground";
import Hero from "@/components/Hero";
import ServicesIntro from "@/components/ServicesIntro";

export default function Home() {
  return (
    <>
      <VideoBackground
        srcMp4="/videos/hero.mp4"
        // srcWebm="/videos/hero.webm" // Optional 
        // poster="/images/hero-poster.jpg" // Optional
        >
      <SiteHeader />

      {/* TODO: Put hero text/buttons here later */}
      <div style={{ height: "520px" }} />
      <ServicesIntro />
      </VideoBackground>
    </>
  );
}
