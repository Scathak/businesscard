import { useState, useEffect } from "react";

export const ContactFormModal = ({ onClose, onSubmit, fileName }) => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});
  const [campaign, setCampaign] = useState("Website_Lead");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utmCampaign = params.get("utm_campaign");
    if (utmCampaign) setCampaign(utmCampaign);
  }, []);

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      setErrors({
        ...errors,
        email: validateEmail(value) ? "" : "Please enter a valid email",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("email", formData.email);
    payload.append("downloaded_file", fileName);
    payload.append("campaign", campaign);
    payload.append("form_id", "PDF_Download");
    payload.append("page_source", window.location.href);

    fetch("https://formspree.io/f/xqawaznk", {
      method: "POST",
      body: payload,
      headers: { Accept: "application/json" },
    });

    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h3 className="text-xl font-bold mb-4">Get your free PDF</h3>

        <form onSubmit={handleSubmit}>
          <input type="hidden" name="downloaded_file" value={fileName} />
          <input type="hidden" name="campaign" value={campaign} />
          <input type="hidden" name="form_id" value="PDF_Download" />
          <input type="hidden" name="page_source" value={window.location.href} />

          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-3 p-2 border rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full mb-2 p-2 border rounded ${
              errors.email ? "border-red-500" : ""
            }`}
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm mb-2">{errors.email}</p>
          )}

          <div className="flex justify-end space-x-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded text-white bg-[#533E8B]"
            >
              Submit & Download
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
