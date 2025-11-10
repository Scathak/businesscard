import { Strip } from "./Strip";
import { ContactForm } from "./ContactForm";

export const Contact = () => (
  <Strip id="contact">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <ContactForm />
      </div>
    </div>
  </Strip>
);

