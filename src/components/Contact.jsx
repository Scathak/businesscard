import { Strip } from "./Strip";
import { ContactForm } from "./ContactForm";
import bgr0001 from "../assets/images/bgr0001.jpg";

export const Contact = () => (
  <Strip id="contact">
    <div className="max-width bg-gray-200" style={{backgroundImage: `url(${bgr0001})`}}>
      <div className="max-w-6xl mx-auto px-6" style={{fontFamily: "'Space Grotesk', sans-serif"}}>
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <ContactForm />
        </div>
      </div>
    </div>
  </Strip>
);

