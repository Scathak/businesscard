import React, { useState } from "react";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Website contact from ${name || "Anonymous"}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailto = `mailto:market_captains@protonmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    setSent(true);
    setTimeout(() => setSent(false), 8000);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl">
      <label className="block mb-3">
        <div className="text-sm font-medium">Name*</div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full border px-3 py-2 rounded"
          placeholder="Your full name"
        />
      </label>
      <label className="block mb-3">
        <div className="text-sm font-medium">Email*</div>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full border px-3 py-2 rounded"
          placeholder="you@company.com"
        />
      </label>
      <label className="block mb-3">
        <div className="text-sm font-medium">Message</div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 w-full border px-3 py-2 rounded"
          rows={5}
          placeholder="How can we help?"
        />
      </label>
      <div className="flex items-center gap-4">
        <button type="submit" className="px-5 py-2 bg-slate-900 text-white rounded">
          Submit
        </button>
        {sent && <div className="text-green-600">Message was sent, thank you.</div>}
      </div>
    </form>
  );
};

