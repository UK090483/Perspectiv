import { Image } from "@components/Image";
import { Section } from "@components/Section";
import Typo from "@components/Typography";
import Underline from "@components/Underline";

import React from "react";

interface HeroProps {
  variant?: "overlapping" | "sideBySide";
}
const Hero: React.FC<HeroProps> = ({ variant = "overlapping" }) => {
  return (
    <Section width="full" className="relative h-screen bg-green-400">
      <Image />

      <div className="absolute inset-0 flex items-center mx-auto text-white  ml-[10%] ">
        <Underline>
          <Typo variant="h1">
            Grundlagen <br /> Lernförderung <br /> & Lerntherapie
          </Typo>
        </Underline>
      </div>
    </Section>
  );
};

export default Hero;
