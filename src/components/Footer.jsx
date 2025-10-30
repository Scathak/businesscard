export const Footer = () => (
  <footer className="mt-12 border-t bg-white" style={{ backgroundColor: '#533E8B', fontFamily: "'Space Grotesk', sans-serif"}}>
    <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-6">
      <div>
        <div className="font-semibold text-white">Market Captains</div>
        <div className="text-sm text-white">USA, San Francisco, CA</div>
        <div className="mt-3 flex gap-3">
          <a href="#" className="text-sm text-white underline">Facebook</a>
          <a href="#" className="text-sm text-white underline">X</a>
          <a href="#" className="text-sm text-white underline">LinkedIn</a>
        </div>
      </div>
      <div>
        <div className="font-semibold text-white">Get in Touch</div>
        <div className="mt-3 text-sm">
          <a href="mailto:marcap8885@gmail.com" className="text-white underline">Email</a>
        </div>
      </div>
      <div>
        <div className="font-semibold text-white">Legal</div>
        <div className="mt-3 text-sm text-white">Privacy · Accessibility</div>
      </div>
      <div className="text-right text-sm text-white">
        © {new Date().getFullYear()} Market Captains. Powered by AI.
      </div>
    </div>
  </footer>
);

