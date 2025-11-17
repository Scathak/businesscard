import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { BlogTeaser } from "./components/BlogTeaser";
import { BookOnline } from "./components/BookOnline";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import prj0001 from "./assets/images/prj0001.png";
import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const homeSection = document.getElementById("home");

    if (homeSection) {
      window.scrollTo({
        top: homeSection.offsetTop,
        behavior: "smooth"
      });
    }
  }, []);

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
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

