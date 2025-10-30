import React from "react";
import { useGoogleTag } from "./hooks/useGoogleTag";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { BlogTeaser } from "./components/BlogTeaser";
import { BookOnline } from "./components/BookOnline";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  useGoogleTag();

  const projects = [
    {
      id: 1,
      title: "Auto Dealership Dashboard",
      blurb: "Dashboard and reporting for dealer networks.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "E-commerce Migration",
      blurb: "Headless commerce and performance optimization.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "AI Marketing Toolkit",
      blurb: "Automated tagging, scoring and campaign optimization.",
      image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 scroll-smooth">
      <Nav />
      <Hero />
      <Services />
      <Portfolio projects={projects} />
      <BlogTeaser />
      <BookOnline />
      <Contact />
      <Footer />
    </div>
  );
}

