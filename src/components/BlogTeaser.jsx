import { motion } from "framer-motion";
import { Strip } from "./Strip";

import article1 from "../assets/pdfs/Human_Marketers_vs_by_Dean_Rodionoff.pdf"
import article2 from "../assets/pdfs/GTM_operator_confessions_by_Dean_Rodionoff.pdf"
import article3 from "../assets/pdfs/Sales_Enablement_by_Dean_Rodionoff.pdf"
import article4 from "../assets/pdfs/Vibe_coding_by_Dean_Rodionoff.pdf"

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
          <h3 className="font-semibold">Five Pillars of Sales Enablement: A Stack for Impact</h3>
          <p className="mt-2 text-sm text-slate-600">
            Author: Dean Rodionoff Sales enablement today is not just a buzzword anymore—it’s the engine behind a successful revenue team...
          </p>
          <a href={article3} className="mt-2 inline-block text-sm text-[#533E8B] underline">Download PDF</a>
        </motion.article>
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-4 border rounded bg-white"
        >
          <h3 className="font-semibold">Confessions from a Digital GTM Operator: What Actually Works Now</h3>
          <p className="mt-2 text-sm text-slate-600">
            Author: Dean Rodionoff Digital marketing in B2B SaaS isn’t what it used to be. After driving paid media, content, and SEO, here’s what separates meaningful growth from noisy activity...
          </p>
          <a href={article2} className="mt-2 inline-block text-sm text-[#533E8B] underline">Download PDF</a>
        </motion.article>
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-4 border rounded bg-white"
        >
          <h3 className="font-semibold">Vibe Coding Unpacked: Discovering AI-Driven App Making</h3>
          <p className="mt-2 text-sm text-slate-600">
            Author: Dean Rodionoff AI-powered development tools are clearly reshaping the way software is built, sometimes with little more than a good prompt and some domain know-how....
          </p>
          <a href={article4} className="mt-2 inline-block text-sm text-[#533E8B] underline">Download PDF</a>
        </motion.article>
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-4 border rounded bg-white"
        >
          <h3 className="font-semibold">Human Marketers vs. Autonomous AI: Myth, Math, and Momentum</h3>
          <p className="mt-2 text-sm text-slate-600">
            Author: Dean Rodionoff Every new AI tool promises revolution.  But will your marketing team one day be just a CMO and a supercharged AI assistant?   The US Bureau of Labor Statistics (BLS) projects that...
          </p>
          <a href={article1} className="mt-2 inline-block text-sm text-[#533E8B] underline">Download PDF</a>
        </motion.article>
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-4 border rounded bg-white"
        >
          <h3 className="font-semibold">Prompting Techniques: How to Communicate Effectively with AI Models</h3>
          <p className="mt-2 text-sm text-slate-600">
            Prompt engineering, or the art of designing prompts, is the foundation of effective interaction with large language models (LLMs). Whether you’re a developer, researcher, or educator...
          </p>
        </motion.article>
      </div>
    </div>
  </Strip>
);

