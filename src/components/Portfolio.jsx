import { motion } from "framer-motion";
import { Strip } from "./Strip";

export const Portfolio = ({ projects }) => (
  <Strip id="portfolio">
    <div className="max-w-6xl mx-auto px-6" style={{fontFamily: "'Space Grotesk', sans-serif"}}>
      <h2 className="text-2xl font-bold">Digital Solutions</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border rounded overflow-hidden shadow-sm bg-white"
          >
            <img src={p.image} alt={p.title} className="w-full h-44 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-slate-600 mt-2">{p.blurb}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </Strip>
);

