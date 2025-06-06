import { Navbar } from "./components/Navbar"
import { HeroSection } from "./pages/HeroSection"
import {SectionTwo} from "./pages/SectionTwo"
import {SectionThree} from "./pages/SectionThree"
import {SectionFour} from "./pages/SectionFour"
import { Footer } from "./components/Footer"
import './styles/font.css';

function App() {


  return (
    <>
      <Navbar/>
      <div className="bg-black font-neue">
        <HeroSection/>
        <SectionTwo></SectionTwo>
        <SectionThree></SectionThree>
        <SectionFour></SectionFour>
        <Footer></Footer>
      </div>
   
    </>
  )
}

export default App
