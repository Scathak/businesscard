import { Strip } from "./Strip";

export const Hero = () => (
  <Strip id="home" style={{ backgroundColor: '#EDEDED', fontFamily: "'Space Grotesk', sans-serif" }}>
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div style={{ color: "#533E8B" }}>
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Guiding Businesses Through the New Marketing Frontier
          </h1>
          <p className="mt-6 text-lg text-slate-700">
            We blend technology, data, and strategy to help you reduce agency
            dependency, optimize your marketing engine, and take control of your
            growth.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="#contact"
              className="px-5 py-3 text-white rounded-md bg-[#533E8B]"
            >
              Contact us
            </a>
            <a href="#download" className="px-5 py-3 border rounded-md bg-[#533E8B] text-white">
              Download Whitepaper
            </a>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg bg-gray-50 p-6">
          <img
            alt="hero"
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop"
            className="w-full h-64 object-cover rounded"
          />
        </div>
      </div>
    
  </Strip>
);

