import { Strip } from "./Strip";
import video1 from "../assets/video/PM_video1.mp4";

export const Services = () => (
  <Strip id="about">
    <div className="max-w-6xl mx-auto px-6" style={{fontFamily: "'Space Grotesk', sans-serif"}}>
      <h2 className="text-2xl font-bold">
        Tech-Driven. Business-Smart. Results-Obsessed.
      </h2>
      <div className="flex justify-left py-4">
        <video
          src={video1}
          autoPlay
          loop
          playsInline
          className="float-left w-[320px] h-[320px] object-cover rounded-lg mr-6 mb-4 shadow-md"
        />
          <div className="grid md:grid-rows-2">
          
            At Market Captains, we unite technical and business expertise to help SMEs master the evolving marketing landscape. <br/>Our work combines:
          
          <ul className="grid md:grid-rows-3 gap-4">
            <li className="p-4 border rounded">
              <h3 className="font-semibold">Marketing automation</h3>
              <p className="text-sm mt-1">
                Marketing automation that actually saves you time and money
              </p>
            </li>
            <li className="p-4 border rounded">
              <h3 className="font-semibold">Data intelligence</h3>
              <p className="text-sm mt-1">
                Data intelligence connecting GA4, CRM, and ad platforms.
              </p>
            </li>
            <li className="p-4 border rounded">
              <h3 className="font-semibold">Collaborative workflows</h3>
              <p className="text-sm mt-1">
                Collaborative workflows that bring your team together.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-sm mt-1"> 
         Why It Matters: <br/>
          Too many growing businesses overspend on agencies and underuse their own data.
          We help you build an internal marketing engine that performs like a top-tier team — at a fraction of the cost.
      </p>
    </div>
  </Strip>
);

