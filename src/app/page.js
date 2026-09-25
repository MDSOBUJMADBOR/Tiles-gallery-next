import Banner from "@/components/Banner";
import FAQ from "@/components/FAQ";
import FeaturedTiles from "@/components/FeaturedTiles";
import FinalCTA from "@/components/FinalCTA";
import HowItWorks from "@/components/HowItWorks";
import InteriorInspiration from "@/components/InteriorInspiration";
import MarqueePage from "@/components/Marquar";
import ModernCollection from "@/components/ModernCollection";
import ShopByCategory from "@/components/ShopByCategory";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";
import TrendingTiles from "@/components/TrendingTiles";
import WhyChooseUs from "@/components/WhyChooseUs";



export default function Home() {
  return (
 <div>
    <Banner></Banner>
<MarqueePage></MarqueePage>
<ShopByCategory />
<FeaturedTiles></FeaturedTiles>
<WhyChooseUs />
<ModernCollection />
<HowItWorks />
{/* <TrendingTiles />
<InteriorInspiration /> */}
{/* <Testimonials /> */}
<StatsSection />
<FAQ />
<FinalCTA />
 </div>
  
  );
}
