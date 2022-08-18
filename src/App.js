import assets from "./assets/index.js";
import { Download, Features, SectionWrapper } from "./components/index.js";
import styles from "./styles/Global.js";


const App =() =>{
  return (
    <>
      <SectionWrapper
        title="You own store of Nifty NFTs. Start Selling & Growing"
        description="
     Buy, sotre, collect NFTs, exchange & ear crypto. Join 25+ million people using ProNef Marketplace"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="
     Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of fluent UI Design"
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="
     ProNef is build using Expo which runs natively on all users' devices. You can easily get your app into people's hands"
        
        mockupImg={assets.feature}
      reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="
     The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT"
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download/>
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center  banner04">
        <p className={`${styles.pText}`}>
          Made with ❤️ by {" "} 
          <span className="bold">Prince Codemon</span>
        </p>
      </div>
    </>
  );
}

export default App;
