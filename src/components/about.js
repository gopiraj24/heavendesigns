import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Eyebrow from "./eyebrow";
import AwardBadge from "../images/award-badge.svg";

const About = () => {
  const data = useStaticQuery(graphql`
    {
      aboutimage: file(relativePath: { eq: "about-creative.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 592
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid items-center grid-cols-1 gap-20 py-12 lg:grid-cols-12 lg:gap-8 lg:py-32">
          <div className="flex flex-col gap-6 lg:col-span-6">
            <Eyebrow label="ABOUT US" />
            <h2 className="pb-4 font-normal font-display md:text-display-xl text-display-md">
              We help to bring your <span className="italic">dream home</span>{" "}
              to reality
            </h2>
            <p className="font-light md:text-body-lg text-body-md text-neutral-700">
            At our core, we are dedicated to making dreams come true. Our team is passionate about translating 
            your vision of a dream home into a tangible reality. From the initial spark of an idea to the final
             touches of construction, we are with you every step of the way. Our commitment extends beyond the structures
             we build; it's about creating havens where cherished memories unfold. Experience the journey of transforming your
             dream home aspirations into beautifully crafted, personalized spaces with us.
            </p>
            {/* <p className="font-light md:text-body-lg text-body-md text-neutral-700">
              Tempor dolor elementum tellus non ipsum faucibus. Justo, magna
              mauris posuere auctor justo. Habitant proin aliquet volutpat leo
              ultricies. Dui blandit eget vitae turpis ultrices aliquet nunc.
              Faucibus sit odio bibendum lobortis diam.
            </p> */}
          </div>
          <div className="relative flex flex-col gap-8 lg:col-span-6">
            <GatsbyImage
              image={getImage(data.aboutimage)}
              alt="Interior Design"
            />
            {/* <img
              src={AwardBadge}
              alt="Award Badge"
              className="absolute left-[42%] -top-14"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
