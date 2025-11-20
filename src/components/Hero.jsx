import { Strip } from "./Strip";
import { HeroVideo } from "./HeroVideo";
import bgr0001 from "../assets/images/bgr0001.jpg";
import videoHeader from "../assets/video/Vde0001.mp4";

export const Hero = () => (
  <Strip id="home">
    <div style={{fontFamily: "'Space Grotesk', sans-serif", backgroundImage: `url(${bgr0001})`}}>

      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex justify-center mb-8">
          <video
            src={videoHeader}
            autoPlay
            loop
            playsInline
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Guiding Businesses Through the New Marketing Frontier
          </h2>
          <p className="mt-6 text-lg">
            We blend technology, data, and strategy to help you reduce agency
            dependency, optimize your marketing engine, and take control of your
            growth.
          </p>
          <div className="mt-6 flex gap-4 will-change-auto">
            <a
              href="#contact"
              className="px-5 py-3 bg-[#533E8B] text-white rounded-md text-base sm:text-sm"
            >
              Contact us
            </a>
            <a href="#blog" className="px-5 py-3 border rounded-md bg-[#EBEBEB] text-base sm:text-sm">
              Download Whitepaper
            </a>
          </div>
        </div>
        <div className="flex justify-center mb-8 py-20">
          <HeroVideo />
        </div>
      </div>
    </div>
  </Strip>
);

