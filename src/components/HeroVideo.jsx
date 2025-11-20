import { useState, useEffect } from "react";
import desktopVideo from "../assets/video/Desktopvid_1.mp4";
import mobileVideo from "../assets/video/Mobilevid_2.mp4";

export const HeroVideo = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <video
      src={isMobile ? mobileVideo : desktopVideo}
      autoPlay
      loop
      playsInline
      className="object-cover"
    />
  );
};
