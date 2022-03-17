import React from "react";
import dynamic from "next/dynamic";
import Section from "@components/Section/Section";
import Typo from "@components/Typography/Typography";
import { Link } from "@components/Link";
import Social from "./SocialIcons";

import Logos from "./Logos";
import { useAppContext } from "@components/AppContext";

const Marque = dynamic(() => import("./Marque"));

const Footer: React.FC<{}> = (props) => {
  const { data } = useAppContext();

  return (
    <footer data-testid="footer" className="flex flex-col items-center ">
      <Marque />
      <Section width="full" className=" px-5 ">
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 my-12">
          <Logos items={data?.footer?.logos} />

          <div>
            <Typo variant="h1" as="p">
              Follow Us
            </Typo>

            <Social items={data?.footer?.socialMedia || []} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row  gap-6 items-center justify-center mt-16 mb-12">
          <span>© 2021</span>
          {data?.footer?.imprintPage?.href &&
            data?.footer?.imprintPage?.label && (
              <Link href={data?.footer?.imprintPage?.href}>
                {data?.footer?.imprintPage?.label}
              </Link>
            )}
          <Link href="/datenschutz">Datenschutz</Link>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
