import { Strip } from "./Strip";
import pht0001 from "../assets/images/Pht0001.jpg";
import pht0002 from "../assets/images/Pht0002.png";


export const Team = () => (
  <Strip id="team">
    <div className="max-w-6xl mx-auto px-6" style={{fontFamily: "'Space Grotesk', sans-serif"}}>
      <h2 className="text-2xl font-bold">Meet captains</h2>
      <p className="mt-3">
        Dean Rodionoff
      </p>
      <div >Dean is a seasoned GO-to-market specialist with deep expertise in paid growth optimization, enablement and feedback loop automation.</div>
      <div >
          <img
          alt="pht0001"
          src={pht0001}
          className="w-32 h-auto rounded"
          />
      </div>
      <p className="mt-3">
        Teddy Gros
      </p>
      <div>Teddy excels in software development and research during decades of employment managing performance and usability of software products.</div>
      <div>
          <img
          alt="pht0002"
          src={pht0002}
          className="w-auto h-32 rounded"
          />
      </div>  
    </div>
  </Strip>
);