import React, { useState, useEffect } from "react";

export const ContactForm = () => {
  const [sent, setSent] = useState(false);
  const [pageUrl, setPageUrl] = useState("");
  const [campaign, setCampaign] = useState("Website_Lead");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");


  useEffect(() => {
    const currentUrl = window.location.href;
    setPageUrl(currentUrl);

    // Capture UTM campaign if available
    const params = new URLSearchParams(window.location.search);
    const utmCampaign = params.get("utm_campaign");
    if (utmCampaign) setCampaign(utmCampaign);
  }, []);

  const validateEmail = (value) => {
    // Basic email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) return "Email is required.";
    if (!emailRegex.test(value)) return "Please enter a valid email address.";
    return "";
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(validateEmail(value));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;
  const validationMessage = validateEmail(email);
  if (validationMessage) {
    setEmailError(validationMessage);
    return;
  }
  setIsSubmitting(true);

  fetch("https://formspree.io/f/xqawaznk", {
    method: "POST",
    body: new FormData(form),
    headers: { Accept: "application/json" },
  })
    .then((response) => {
      setIsSubmitting(false);
      if (response.ok) {
        setSent(true);
        form.reset();
        setEmail("");
        setMessage("");
        setTimeout(() => setSent(false), 8000);
      } else {
        alert("Error sending message. Please try again later.");
      }
    })
    .catch(() => {
      setIsSubmitting(false);
      alert("Network error.");
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl bg-[#EBEBEB]" style={{fontFamily: "'Space Grotesk', sans-serif"}}>
      <input type="hidden" name="page_source" value={pageUrl} />
      <input type="hidden" name="form_id" value="MC_Contact" />
      <input type="hidden" name="campaign" value={campaign} />

      <label className="block mb-3">
        <div className="text-sm font-medium">Name</div>
        <input
          type="text"
          name="name"
          className="mt-1 w-full border px-3 py-2 rounded"
          placeholder="Your name"
        />
      </label>
      <label className="block mb-3">
        <div className="text-sm font-medium">Email*</div>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
          className={`mt-1 w-full border px-3 py-2 rounded ${
            emailError ? "border-red-500" : ""
          }`}
          placeholder="you@company.com"
        />
        {emailError && (
          <p className="text-red-600 text-sm mt-1">{emailError}</p>
        )}
      </label>

      <label className="block mb-3">
        <div className="text-sm font-medium">Message</div>
        <textarea
          type="text"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 w-full border px-3 py-2 rounded"
          rows={5}
          placeholder="How can we help?"
        />
      </label>
      <button
        type="submit"
        disabled={isSubmitting}
        className={`px-5 py-2 rounded text-white transition ${
          isSubmitting
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-[#533E8B] hover:bg-[#533E8B]"
        }`}
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </button>

      {sent && (
        <div className="mt-3 text-green-600 font-medium">
          Message was sent, thank you.
        </div>
      )}
    </form>
  );
};
