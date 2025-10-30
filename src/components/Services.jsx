import { Strip } from "./Strip";

export const Services = () => (
  <Strip id="about">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-2xl font-bold">
        Tech-Driven. Business-Smart. Results-Obsessed.
      </h2>
      <p className="mt-3 text-slate-600">
        We unite technical and business expertise to help SMEs master the evolving marketing landscape.
      </p>
      <ul className="mt-6 grid md:grid-cols-3 gap-4">
        <li className="p-4 border rounded">
          <h3 className="font-semibold">Marketing automation</h3>
          <p className="text-sm text-slate-600 mt-2">
            Automation that actually saves you time and money.
          </p>
        </li>
        <li className="p-4 border rounded">
          <h3 className="font-semibold">Data intelligence</h3>
          <p className="text-sm text-slate-600 mt-2">
            Connecting GA4, CRM, and ad platforms to make better decisions.
          </p>
        </li>
        <li className="p-4 border rounded">
          <h3 className="font-semibold">Collaborative workflows</h3>
          <p className="text-sm text-slate-600 mt-2">
            Processes that bring your team together and increase throughput.
          </p>
        </li>
      </ul>
    </div>
  </Strip>
);

