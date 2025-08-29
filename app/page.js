import Image from "next/image";
import LayoutWrapper from "@/components/layoutWrapper";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";


export default function Home() {
  return (
   <LayoutWrapper>
<Navbar/>

<HeroSection/>
   </LayoutWrapper>

  );
}
