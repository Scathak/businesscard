export const Footer = () => (
  <footer className="mt-12 border-t bg-[#533E8B]" style={{fontFamily: "'Space Grotesk', sans-serif"}}>
    <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-6">
      <div>
        <div className="font-semibold text-white">MARKET CAPTAINS</div>
        <div> </div>
        <div className="text-sm text-white">USA, San Francisco, CA</div>
        <div className="mt-3 flex gap-3">
          <a href="#" className="text-white underline">Facebook</a>
          <a href="#" className="text-white underline">X</a>
          <a href="#" className="text-white underline">LinkedIn</a>
        </div>
      </div>
      <div>
        <div className="font-semibold text-white">Get in Touch</div>
        <div className="mt-3 text-sm text-white underline">
          <a href="mailto:marcap8885@gmail.com" className="text-white underline">Email</a>
        </div>
      </div>
      <div className="text-right text-sm text-white">
        © {new Date().getFullYear()} Market Captains. Powered by AI.
      </div>
    </div>
  </footer>
);

