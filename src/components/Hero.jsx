import { Strip } from "./Strip";
import bgr0002 from "../assets/bgr0002.png";

export const Hero = () => (
  <Strip id="home">
    <div className="bg-gray-200 ">
          <div className="flex justify-center mb-8 py-6">
            <img
              alt="hero"
              src={bgr0002}
              className=" h-[245px]"
            />
          </div>
      <div className="max-w-6xl mx-auto px-6 py-20 ">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Guiding Businesses Through the New Marketing Frontier
          </h2>
          <p className="mt-6 text-lg text-slate-700">
            We blend technology, data, and strategy to help you reduce agency
            dependency, optimize your marketing engine, and take control of your
            growth.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="#contact"
              className="px-5 py-3 bg-slate-900 text-white rounded-md"
            >
              Contact us
            </a>
            <a href="#download" className="px-5 py-3 border rounded-md">
              Download Whitepaper
            </a>
          </div>
        </div>
      </div>
    </div>
  </Strip>
);

