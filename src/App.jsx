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
import prj0001 from "./assets/images/prj0001.png";

export default function App() {
  useGoogleTag();

  const projects = [
    {
      id: 1,
      title: "Auto Dealership Dashboard",
      blurb: "Dashboard and reporting for dealer networks.",
      image: prj0001,
    },
  ];

  return (
    <div className="min-h-screen bg-[#EDEDED] text-[#533E8B] scroll-smooth">
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

