import { useState } from "react";
import { motion } from "framer-motion";
import { Strip } from "./Strip";
import { ContactFormModal } from "./ContactFormModal";

import article1 from "../assets/pdfs/Human_Marketers_vs_by_Dean_Rodionoff.pdf";
import article2 from "../assets/pdfs/GTM_operator_confessions_by_Dean_Rodionoff.pdf";
import article3 from "../assets/pdfs/Sales_Enablement_by_Dean_Rodionoff.pdf";
import article4 from "../assets/pdfs/Vibe_coding_by_Dean_Rodionoff.pdf";
import article5 from "../assets/pdfs/Prompting_Techniques_How_to_Communicate_Effectively_with_AI_Models.pdf";

export const BlogTeaser = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedPDF, setSelectedPDF] = useState(null);

  const handleOpenForm = (pdf) => {
    setSelectedPDF(pdf);
    setShowForm(true);
  };

  const handleDownload = () => {
    setShowForm(false);
    if (selectedPDF) {
      const link = document.createElement("a");
      link.href = selectedPDF;
      link.download = selectedPDF.split("/").pop();
      link.click();
    }
  };

  return (
    <Strip id="blog">
      <div
        className="max-w-6xl mx-auto px-6 rounded p-8"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        <h2 className="text-2xl font-bold">Latest Insights</h2>
        <div className="mt-6 grid sm:grid-cols-2 gap-6">

          {/* ARTICLE 3 */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-4 border rounded"
          >
            <h3 className="font-semibold">Five Pillars of Sales Enablement: A Stack for Impact</h3>
            <p className="mt-2 text-sm">
              Author: Dean Rodionoff Sales enablement today is not just a buzzword anymore—it’s the engine behind a successful revenue team...
            </p>
            <button
              onClick={() => handleOpenForm(article3)}
              className="mt-2 inline-block text-sm text-[#533E8B] underline"
            >
              Download PDF
            </button>
          </motion.article>

          {/* ARTICLE 2 */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-4 border rounded"
          >
            <h3 className="font-semibold">Confessions from a Digital GTM Operator: What Actually Works Now</h3>
            <p className="mt-2 text-sm">
              Author: Dean Rodionoff Digital marketing in B2B SaaS isn’t what it used to be...
            </p>
            <button
              onClick={() => handleOpenForm(article2)}
              className="mt-2 inline-block text-sm text-[#533E8B] underline"
            >
              Download PDF
            </button>
          </motion.article>

          {/* ARTICLE 4 */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="p-4 border rounded"
          >
            <h3 className="font-semibold">Vibe Coding Unpacked: Discovering AI-Driven App Making</h3>
            <p className="mt-2 text-sm">
              Author: Dean Rodionoff AI-powered development tools are clearly reshaping the way...
            </p>
            <button
              onClick={() => handleOpenForm(article4)}
              className="mt-2 inline-block text-sm text-[#533E8B] underline"
            >
              Download PDF
            </button>
          </motion.article>

          {/* ARTICLE 1 */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-4 border rounded"
          >
            <h3 className="font-semibold">Human Marketers vs. Autonomous AI: Myth, Math, and Momentum</h3>
            <p className="mt-2 text-sm">
              Author: Dean Rodionoff Every new AI tool promises revolution...
            </p>
            <button
              onClick={() => handleOpenForm(article1)}
              className="mt-2 inline-block text-sm text-[#533E8B] underline"
            >
              Download PDF
            </button>
          </motion.article>

          {/* ARTICLE 5 */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="p-4 border rounded"
          >
            <h3 className="font-semibold">Prompting Techniques: How to Communicate Effectively with AI Models</h3>
            <p className="mt-2 text-sm">
              Prompt engineering, or the art of designing prompts...
            </p>
            <button
              onClick={() => handleOpenForm(article5)}
              className="mt-2 inline-block text-sm text-[#533E8B] underline"
            >
              Download PDF
            </button>
          </motion.article>

        </div>
      </div>

      {/* 🔹 Modal (only when user clicks Download) */}
      {showForm && (
        <ContactFormModal
          fileName={selectedPDF.split("/").pop()}
          onClose={() => setShowForm(false)}
          onSubmit={handleDownload}
        />
      )}
    </Strip>
  );
};
