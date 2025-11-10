import { Strip } from "./Strip";
import { ContactForm } from "./ContactForm";

export const Contact = () => (
  <Strip id="contact">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <p className="mt-2 text-slate-600">
        Reach out to discuss how we can elevate your brand with innovative AI marketing tools.
      </p>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <ContactForm />
        <div className="p-6 border rounded">
          <h4 className="font-semibold">Contact info</h4>
          <p className="mt-2 text-sm text-slate-600">market_captains@protonmail.com</p>
          <p className="mt-6 text-sm text-slate-500">Privacy · Accessibility</p>
        </div>
      </div>
    </div>
  </Strip>
);

