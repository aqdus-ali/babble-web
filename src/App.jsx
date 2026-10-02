import Hero from "./components/Hero";
import IconMarquee from "./components/IconMarquee";
import Navbar from "./components/Navbar";
import Gifts from "./components/Gifts";
import Vips from "./components/VipVault";
import Explore from "./components/Explore";
import Host from "./components/HostSection";
import DownloadSection from "./components/DownloadSection";
import SupportSection from "./components/SupportSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <IconMarquee/>
      <Gifts/>
      <Vips/>
      <Explore/>
      <Host/>
      <DownloadSection/>
      <SupportSection/>
      <Footer/>
    </>
  );
}

export default App;