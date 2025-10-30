import { motion } from "framer-motion";
import { Strip } from "./Strip";

export const BlogTeaser = () => (
  <Strip id="blog">
    <div className="max-w-6xl mx-auto px-6 bg-slate-50 rounded p-8">
      <h2 className="text-2xl font-bold">Latest Insights</h2>
      <div className="mt-6 grid sm:grid-cols-2 gap-6">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-4 border rounded bg-white"
        >
          <h3 className="font-semibold">How to build an in-house marketing engine</h3>
          <p className="mt-2 text-sm text-slate-600">
            A quick primer on switching from agencies to internal teams.
          </p>
        </motion.article>
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-4 border rounded bg-white"
        >
          <h3 className="font-semibold">Data fundamentals for small teams</h3>
          <p className="mt-2 text-sm text-slate-600">
            Track what matters so you can scale with confidence.
          </p>
        </motion.article>
      </div>
    </div>
  </Strip>
);

