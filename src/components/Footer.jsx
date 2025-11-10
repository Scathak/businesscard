export const Footer = () => (
  <footer className="mt-12 border-t bg-white">
    <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-6">
      <div>
        <div className="font-semibold">Market Captains</div>
        <div className="text-sm text-slate-600">USA, San Francisco, CA</div>
        <div className="mt-3 flex gap-3">
          <a href="#" className="text-sm underline">Facebook</a>
          <a href="#" className="text-sm underline">X</a>
          <a href="#" className="text-sm underline">LinkedIn</a>
        </div>
      </div>
      <div>
        <div className="font-semibold">Get in Touch</div>
        <div className="mt-3 text-sm text-slate-600">Email</div>
      </div>
      <div className="text-right text-sm text-slate-500">
        © {new Date().getFullYear()} Market Captains. Powered by AI.
      </div>
    </div>
  </footer>
);

