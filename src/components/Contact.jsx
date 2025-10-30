import { Strip } from "./Strip";
import { ContactForm } from "./ContactForm";

export const Contact = () => (
  <Strip id="contact" style={{ backgroundColor: '#EDEDED', fontFamily: "'Space Grotesk', sans-serif" }}>
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold">Get in Touch</h2>
      <p className="mt-2 text-slate-600">
        Reach out to discuss how we can elevate your brand with innovative AI marketing tools.
      </p>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <ContactForm />
      </div>
    </div>
  </Strip>
);

